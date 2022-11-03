$(document).ready(function(){

    $('.product-top-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 1022,
            settings: {
              centerMode: false,
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
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
            breakpoint: 1022,
            settings: {
              centerMode: false,
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
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
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
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
            breakpoint: 1022,
            settings: {
              slidesToShow: 3,
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
              slidesToShow: 3,
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
})
AOS.init();