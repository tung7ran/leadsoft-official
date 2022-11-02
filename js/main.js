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
    });

    $('.base-partner-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<i class='trademark-left fa fa-angle-left' aria-hidden='true'></i>",
        nextArrow:"<i class='trademark-right fa fa-angle-right' aria-hidden='true'></i>",
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