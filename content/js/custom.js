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

// @@@@@@@@ Func Call Area @@@@@@@@

$().funcSmoothScroll();
