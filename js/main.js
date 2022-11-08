$(document).ready(function(){

    $('.product-top-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 741,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 740,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $('.product-bottom-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 741,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 740,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $('.base-partner-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<i class='trademark-left fa fa-angle-left' aria-hidden='true'></i>",
        nextArrow:"<i class='trademark-right fa fa-angle-right' aria-hidden='true'></i>",
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow:4,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:3,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots:true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:true
            }
          }
        ]
    });

    $(".content-recruit-outside__btn").click(function(event){
      $(".modal-recruit").addClass("visible");
    });
    $(".modal-recruit-container__close").click(function(){
      $(".modal-recruit").removeClass("visible");
    });
    $(".modal-recruit").click(function() {
      $(".modal-recruit").removeClass("visible");
    });
    $(".modal-recruit-container").click(function(event) {
      event.stopPropagation();
    });

    $(".content-recruit-outside__top--btn").click(function(event){
      $(".modal-map").addClass("visible");
    });
    $(".js-modal-close").click(function(){
      $(".modal-map").removeClass("visible");
    });
    $(".modal-map").click(function() {
      $(".modal-map").removeClass("visible");
    });
    $(".modal-maps-address").click(function(event) {
      event.stopPropagation();
    });

    $('.js-moblie-navbar').click(function() { 
      $('.js-mobile-menu').toggleClass('show'); 
      $('.mobile-menu-overlay').toggleClass('show');  
      if($('.js-mobile-menu').hasClass('show') === false) {
        $('.navbar-mobile').css("color", "#000")
      } else { 
        $('.navbar-mobile').css("color", "#fff")
      }
    })
    $(".mobile-menu-overlay").click(function() {
      $('.js-mobile-menu').removeClass('show'); 
      $('.mobile-menu-overlay').toggleClass('show');
      if($('.js-mobile-menu').hasClass('show') === false) {
        $('.navbar-mobile').css("color", "#000")
      } else { 
        $('.navbar-mobile').css("color", "#fff")
      } 
    });
    $('.home-industries-body__list').slick({
      slidesToShow: 5,
      dots: false,
      nextArrow: true,
      prevArrow: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            autoplaySpeed: 3000,
            autoplay: true,
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            autoplaySpeed: 3000,
            autoplay: true,
            prevArrow:"<i class='industries-left fa fa-angle-left' aria-hidden='true'></i>",
            nextArrow:"<i class='industries-right fa fa-angle-right' aria-hidden='true'></i>",
          }
        }
      ]
    });
    $('.home-reason-list').slick({
      slidesToShow: 3,
      dots: false,
      nextArrow: true,
      prevArrow: true,
      responsive: [
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            autoplaySpeed: 3000,
            autoplay: true,
            dots:true
          }
        }
      ]
    });
    $('.content-service').slick({
      slidesToShow: 6,
      dots: false,
      nextArrow: true,
      prevArrow: true,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            autoplaySpeed: 3000,
            autoplay: true,
            dots:true
          }
        }
      ]
    });
    $('.banner-home-outside').slick({
      slidesToShow: 1,
      autoplaySpeed: 3000,
      autoplay: true,
      dots: true,
      nextArrow: false,
      prevArrow: false,
      responsive: [
        {
          
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              dots:false,
            }
          
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            dots:false,
          }
        }
      ]
    });
    var mybutton = $("#myBtn");
    var offSetTop = 100;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offSetTop)  {
          mybutton.css("display","block");
      } else {
          mybutton.css("display","none");
      }
    });
    mybutton.click(function() {
      $(window).scrollTop({
        top: 0,
        behavior: "smooth",
      })
    })
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
    $("a[href^='#']").click(function(e) {
      e.preventDefault();
      
      var position = $($(this).attr("href")).offset().top;
    
      $("body, html").animate({
        scrollTop: position
      } /* speed */ );
    });
})
var sliderBool = false,
  sliderBreakpoint = 739,
  sliderSettings = {
  mobileFirst: true,
  rows:2,
  dots: true,
  autoplay:true,
	responsive: [
		{
      breakpoint: sliderBreakpoint,
      settings: "unslick"
		}
	]
};
function sliderInit(sliderElem) {
	if (window.innerWidth <= sliderBreakpoint) {
    if (sliderBool == false) {
      $("" + sliderElem + "").slick(sliderSettings);
      sliderBool = true;
    }
	} else {
		sliderBool = false;
	}
}
sliderInit(".career-box");
$(window).resize(function () {
	sliderInit(".career-box");
});
AOS.init();