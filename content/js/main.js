V = {
    urlData: "", // Global değişkenler

    init: function () {
        V.global();
    },

    Ajax: {
        ajaxRequest: function (baseUrl, requestType, sentData = null) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: baseUrl,
                    type: requestType,
                    data: ((sentData != null && requestType != "GET") ? sentData : (sentData != null && requestType == "GET") ? sentData : null),
                    dataType: "json",
                    /*contentType: "application/json",*/
                    success: function (response) {
                        resolve(response)
                    },
                    error: function (error) {
                        reject(error)
                    },
                })
            })
        },
    },

    DistanceTrigger:{
        // If Scrool near Element Do Something
        distance: function(element, distance1, distance2){
            var scrollCheck = false;
            $(window).scroll(function () {
                scrollTop     = $(window).scrollTop(),
                elementOffset = $(element).offset().top,
                distance      = (elementOffset - scrollTop);
        
                if(distance < distance1 && distance > distance2 && scrollCheck == false ){
                    //Your Run Code
                    scrollCheck = true;
                }
            });
        },
        bottom: function (distance) {
            $(window).scroll(function () {
                if ($(window).scrollTop() + $(window).height() > $(document).height() - distance) {
                    $("#launcher").addClass("isBottom");
                }
                else {
                    $("#launcher").removeClass("isBottom");
                }
            });
          }
    },

    slider:{

        Swiper: function(){
            var swiper = new Swiper('.swiper-container', {
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
        }

    },

    buttons:{
        button: function(){
            $("element").on("click", function () {
                $("#wp-text").fadeOut();
                $("#wp-close").css("display","none");
            });
        }
       
    },

    popup:{
        popup:function (){
            $(document).ready(function () {
                $("#popup").fancybox().trigger('click');
            });
        }
    },

    form:{
        form: function (element) { 
            //Duplicate Form Send Block
            $('form').submit(function () {
                $(this).find('button[type=submit]').prop('disabled', true);
            });
         },
         formMask:function(){
             // Use this Mask github.com/igorescobar/jQuery-Mask-Plugin - jQuery Mask Plugin v1.14.16
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
         }
    },


    global: function () {

        // Detect Device
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

        // Browser Width and Height
        var browserWidth = window.innerWidth;
        var browserHeight = window.innerHeight;

        //Smooth Scrool to DIV
        document.querySelectorAll('a[href^="#"]').forEach($anchor => {
            $anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' //scroll to top of the target element
                });
            });
        });

        //Notification Menu
        $(".notification .numbers .wrap").click(function () {

            $(".notification .numbers .wrap").removeClass("active");
            $(this).addClass("active");

            var numberID = $(this).attr("id");

            $(".notification .people .wrap").removeClass("active animate__animated animate__faster animate__bounceInDown");
            $(".notification .people " + "#" + numberID).addClass("active animate__animated animate__faster animate__bounceInDown");

        });

    },

};

$(document).ready(function () {
    V.init();
});

$(window).on('load', function () {

});