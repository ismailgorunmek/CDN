(function($) {

    "use strict";


    // SCROLL TO TOP ===============================================================================
    $(window).on('scroll', function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });


    if (window.innerWidth < 770) {
        $("button.forward, button.backword").on('click', function() {
            $("html, body").animate({ scrollTop: 115 }, "slow");
            return false;
        });
    }

    if (window.innerWidth < 500) {
        $("button.forward, button.backword").on('click', function() {
            $("html, body").animate({ scrollTop: 245 }, "slow");
            return false;
        });
    }
    if (window.innerWidth < 340) {
        $("button.forward, button.backword").on('click', function() {
            $("html, body").animate({ scrollTop: 280 }, "slow");
            return false;
        });
    }
    // WIZARD  ===============================================================================

    //  Basic wizard with validation
    $("#survey_container").wizard({
        stepsWrapper: "#wrapped",
        submit: ".submit",
        beforeSelect: function(event, state) {
            if (!state.isMovingForward)
                return true;
            var inputs = $(this).wizard('state').step.find(':input');
            return !inputs.length || !!inputs.valid();
        }


    }).validate({
        errorPlacement: function(error, element) {
            if (element.is(':radio') || element.is(':checkbox')) {
                error.insertBefore(element.next());

            } else {
                error.insertAfter(element);
            }
        }
    });

    //  progress bar
    $("#progressbar").progressbar();

    $("#survey_container").wizard({
        afterSelect: function(event, state) {
            $("#progressbar").progressbar("value", state.percentComplete);
            $("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
        }
    });



    // OHTER ===============================================================================

    //Menu mobile
    $(".btn-responsive-menu").on('click', function() {
        $("#top-nav").slideToggle(400);
    });

    //Check and radio input styles
    $('input.check_radio').iCheck({
        checkboxClass: 'icheckbox_square-aero',
        radioClass: 'iradio_square-aero'
    });

    //Carousel
    $("#owl-demo").owlCarousel({

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

})(window.jQuery);
