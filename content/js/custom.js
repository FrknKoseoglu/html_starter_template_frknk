// Detect Device
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

// Browser Width and Height
var browserWidth = window.innerWidth;
var browserHeight = window.innerHeight;

//Href #Div to Smooth Scroll
$.fn.funcSmoothScroll = function () {  
    document.querySelectorAll('a[href^="#"]').forEach($anchor => {
        $anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start' //scroll to top of the target element
            });
        });
    });
}

// Scroll Distance Trigger
$.fn.funcCounterScrollTrigger = function () {  
    var scrollCheck = false;
    $(window).scroll(function () {
        scrollTop     = $(window).scrollTop(),
        elementOffset = $('.ScroolTriggerFunc').offset().top,
        distance      = (elementOffset - scrollTop);

        if(distance < 900 && distance > -480 && scrollCheck == false ){
            //Your Run Code
            scrollCheck = true;
        }
    });
}

// All Slider Func
$.fn.funcAllSlider = function () {

}

// All Button Click Trigger
$.fn.funcAllButton = function () {
    // Whatsapp Button Close
    $("#wp-close").on("click", function () {
        $("#wp-text").fadeOut();
        $("#wp-close").css("display","none");
    });
  
}

// PopUp Func
$.fn.funcPopup = function () {
    $(document).ready(function () {
        $("#popup").fancybox().trigger('click');
    });
}

// Scroll Bottom Trigger Func
$.fn.funcScrollBottom = function (){
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
            $("#launcher").addClass("isBottom");
            $("#wp-button").fadeOut();
            $("#wp-close").fadeOut();
            $("#sticky-rez").addClass("animate__backInLeft d-block");
            $("#sticky-rez").removeClass("animate__backOutLeft");

        }
        else {
            $("#launcher").removeClass("isBottom");
            $("#wp-button").fadeIn();
            $("#wp-close").fadeIn();
            $("#sticky-rez").removeClass("animate__backInLeft ");
            $("#sticky-rez").addClass("animate__backOutLeft");

        }
    });
}

//Form Func
$.fn.funcForm = function (){
    //Form Sumbit Func
    $('form').submit(function () {
        $(this).find('button[type=submit]').prop('disabled', true);
    });
    //jquery.mask.min.js
    $(document).ready(function(){
        $('.date').mask('00/00/0000');
        $('.time').mask('00:00:00');
        $('.date_time').mask('00/00/0000 00:00:00');
        $('.cep').mask('00000-000');
        $('.phone').mask('(000)-(000)-(0000)');
        $('.phone_with_ddd').mask('(00)-(000)-(000)-(0000)');
        $('.phone_us').mask('(000) 000-0000');
        $('.mixed').mask('AAA 000-S0S');
        $('.cpf').mask('000.000.000-00', {reverse: true});
        $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
        $('.money').mask('000.000.000.000.000,00', {reverse: true});
        $('.money2').mask("#.##0,00", {reverse: true});
        $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
          translation: {
            'Z': {
              pattern: /[0-9]/, optional: true
            }
          }
        });
        $('.ip_address').mask('099.099.099.099');
        $('.percent').mask('##0,00%', {reverse: true});
        $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
        $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
        $('.fallback').mask("00r00r0000", {
            translation: {
              'r': {
                pattern: /[\/]/,
                fallback: '/'
              },
              placeholder: "__/__/____"
            }
          });
        $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
      });

}

// @@@@@@@@ Func Call Area @@@@@@@@

$().funcSmoothScroll();
