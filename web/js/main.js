$(function() {
    "use strict";

    /* ==========================================================================
   Sub Form   
   ========================================================================== */



    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'https://sae.us2.list-manage.com/subscribe/post?u=95fb27315ff4ae984287de1d0&amp;id=2c1f5890e4'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    };

    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });

    /* ==========================================================================
   litebox
   ========================================================================== */

    $('.litebox-hero, .litebox-tour').magnificPopup({
        type: 'iframe'
    });


    /* ==========================================================================
       Number animation
       ========================================================================== */


    $('.welcome-message').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 54, //change value here
            numberStep: comma_separator_number_step
        }, 3000);

    }, {
        offset: '80%'

    });




    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };


        featureImg();


        $(window).on("resize", function() {
            featureImg();
        });


    });




/* ==========================================================================
   Smooth scroll
   ========================================================================== */
$('a[href*=#]:not([href=#])').on('click', function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({

                scrollTop: (target.offset().top - 40)
            }, 1000);
            return false;
        }
    }
});


/* ==========================================================================
   Collapse nav bar
   ========================================================================== */

$(".navbar-nav li a").on('click', function() {
    $(".navbar-collapse").collapse('hide');
});



/* ==========================================================================
   Contact form
   ========================================================================== */


var formFields = $('.contact-form form input, .contact-form form textarea');



$(formFields).on('focus', function() {
    $(this).removeClass('input-error');
});
$('.contact-form form').submit(function(e) {
    e.preventDefault();
    $(formFields).removeClass('input-error');
    var postdata = $('.contact-form form').serialize();
    $.ajax({
        type: 'POST',
        url: 'php/contact.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {

            if (json.nameMessage !== '') {
                $('.contact-form form .contact-name').addClass('input-error');
            }
            if (json.emailMessage !== '') {
                $('.contact-form form .contact-email').addClass('input-error');
            }
            if (json.messageMessage !== '') {
                $('.contact-form form textarea').addClass('input-error');
            }
            if (json.antispamMessage !== '') {
                $('.contact-form form .contact-antispam').addClass('input-error');
            }
            if (json.nameMessage === '' && json.emailMessage === '' && json.messageMessage === '' && json.antispamMessage === '') {
                $('.contact-form').fadeOut('3000', "linear", function() {
                    $('.contact-form-success').slideToggle();

                });
            }
        }
    });
});




/* ==========================================================================
   Chat button
   ========================================================================== */


// $('.sub-form').waypoint(function() {
// $('.chat-btn').addClass('fixed');

// }, {
// offset: '60%'

// });




// });