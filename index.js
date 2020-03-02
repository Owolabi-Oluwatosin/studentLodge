$(function(){
    $('.for-slick-slider').slick({
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        dots: false,
        centerMode:false,
        centerPadding:'60px',
        infinite: true,
        speed: 300,
        arrows:true,
        autoPlay:true,
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 4,
              centerMode:false,
              centerPadding:'60px',
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1, 
              centerMode:false,
              centerPadding:'60px',
              dots: false,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode:false,
              centerPadding:'60px',
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode:false,
              centerPadding:'60px',
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:false,
              centerPadding:'60px',
              dots: false,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:false,
              centerPadding:'60px',
              dots: false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
 

      $('.trusted-party-img').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows:false,
        autoPlay:true,
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoPlay:true,
              autoplaySpeed:2000,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false,
              autoPlay:true,
              autoplaySpeed:2000,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              autoPlay:true,
              autoplaySpeed:2000,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              autoPlay:true,
              autoplaySpeed:1000,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoPlay:true,
              autoplaySpeed:1000,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoPlay:true,
              autoplaySpeed:500,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('.property-slider1').slick({
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
      });

      $('.property-slider2').slick({
        prevArrow: '.prev',
        nextArrow: '.next',
      });
      
      $('.card-img').slick({
        autoPlay:true,
        autoplaySpeed:2000,
        speed: 300,
        arrows:false,
      });

});	
