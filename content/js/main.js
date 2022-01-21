V = {
  urlData: "", // Global değişkenler

  init: function () {
    V.global();
    V.slider.init();
    V.features.init();
  },

  features: {
    init: function () {
      this.clientInfo();
    },

    clientInfo: function () {
      // Detect Device
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent
        ) ?
        true :
        false;

      // Browser Width and Height
      var browserWidth = window.innerWidth;
      var browserHeight = window.innerHeight;

      // Get Browser info
      var userAgent = navigator.userAgent;

      console.log("isMobile: " + isMobile);
      console.log("browserWidth: " + browserWidth);
      console.log("browserHeight: " + browserHeight);
      console.log("User-agent header sent: " + userAgent);
    },

    smoothScroll: function () {
      document.querySelectorAll('a[href^="#"]').forEach(($anchor) => {
        $anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start", //scroll to top of the target element
          });
        });
      });
    },
    isNear: function (element, distance1, distance2) {
      var scrollCheck = false;
      $(window).scroll(function () {
        (scrollTop = $(window).scrollTop()),
        (elementOffset = $(element).offset().top),
        (distance = elementOffset - scrollTop);

        if (
          distance < distance1 &&
          distance > distance2 &&
          scrollCheck == false
        ) {
          //Your Run Code
          scrollCheck = true;
        }
      });
    },
    isBottom: function (distance) {
      $(window).scroll(function () {
        if (
          $(window).scrollTop() + $(window).height() >
          $(document).height() - distance
        ) {
          $("#launcher").addClass("isBottom");
        } else {
          $("#launcher").removeClass("isBottom");
        }
      });
    },
  },

  slider: {
    init: function () {
      this.Swiper();
    },
    Swiper: function () {
      var main = new Swiper(".swiper-main", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
      var photo = new Swiper(".swiper-photo", {
        loop: true,
        navigation: {
          nextEl: ".swiper-photo .swiper-button-next",
          prevEl: ".swiper-photo .swiper-button-prev",
        },
        pagination: {
          el: ".swiper-photo .swiper-pagination",
        },
      });
    },
  },

  notice: {
    init: function () {

    },
    formCheckBox: function () {
      $('#kvkk-checkbox').click(function () {
        if ($('#kvkk-checkbox').prop('checked')) {
          $("#btn--disabled").css("display", "none");
          $("#register").prop("disabled", false);
        } else {
          $("#btn--disabled").css("display", "block");
          $("#register").prop("disabled", true);
        }
      });
    },
    formCheckBoxShake: function () {
      $('.form .btn--disabled').click(function () {
        $(".kvkk-checkbox").addClass("anim-shake");
        $(".kvkk-checkbox p").addClass("color-warning");
        $(".kvkk-checkbox a").addClass("color-warning");
        setTimeout(function () {
          $('.kvkk-checkbox').removeClass("anim-shake color-warning");
          $(".kvkk-checkbox p").removeClass("color-warning");
          $(".kvkk-checkbox a").removeClass("color-warning");
        }, 1000);
      });
    }
  },

  buttons: {
    init: function () {
      this.Button1();
    },
    Button1: function () {

    },
  },

  popup: {
    init: function () {},

    popup1: function () {
      $(document).ready(function () {
        $("#popup").fancybox().trigger("click");
      });
    },
  },

  form: {

    init: function () {
      this.forms();
      this.formMask();
    },

    forms: function (element) {
      //Duplicate Form Send Block
      $("form").submit(function () {
        $(this).find("button[type=submit]").prop("disabled", true);
      });
      $("form input").click(function (e) {
        e.preventDefault();
        $(this).addClass("invalid");
      });
      $(".phone").click(function () {
        if (!$(".phone").val()) {
          $(".phone").val("(5");
        }
      });
    },
    formMask: function () {
      // Use this Mask github.com/igorescobar/jQuery-Mask-Plugin - jQuery Mask Plugin v1.14.16
      $(".date").mask("00/00/0000");
      $(".time").mask("00:00:00");
      $(".date_time").mask("00/00/0000 00:00:00");
      $(".cep").mask("00000-000");
      $(".phone").mask("(500)-(000)-(0000)");
      $(".phone_with_ddd").mask("(00)-(000)-(000)-(0000)");
      $(".phone_us").mask("(000) 000-0000");
      $(".mixed").mask("AAA 000-S0S");
      $(".cpf").mask("000.000.000-00", {
        reverse: true
      });
      $(".cnpj").mask("00.000.000/0000-00", {
        reverse: true
      });
      $(".money").mask("000.000.000.000.000,00", {
        reverse: true
      });
      $(".money2").mask("#.##0,00", {
        reverse: true
      });
      $(".ip_address").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
        translation: {
          Z: {
            pattern: /[0-9]/,
            optional: true,
          },
        },
      });
      $(".ip_address").mask("099.099.099.099");
      $(".percent").mask("##0,00%", {
        reverse: true
      });
      $(".clear-if-not-match").mask("00/00/0000", {
        clearIfNotMatch: true
      });
      $(".placeholder").mask("00/00/0000", {
        placeholder: "__/__/____"
      });
      $(".fallback").mask("00r00r0000", {
        translation: {
          r: {
            pattern: /[\/]/,
            fallback: "/",
          },
          placeholder: "__/__/____",
        },
      });
      $(".selectonfocus").mask("00/00/0000", {
        selectOnFocus: true
      });
    },
  },

  global: function () {
    //
  },


};

$(document).ready(function () {
  V.init();
});

$(window).on("load", function () {});