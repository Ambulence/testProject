$(document).ready(function(){

      //Intro Slider
      const introSlider = $('#introSlider'),
                battles = $('#battles'),
                matches = $('#matches');

      introSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoSpeed: 2000,
            arrows: false,
            infinite: true,
            fade: true,
            cssEase: 'linear',
            responsive: [{

                  breakpoint: 575,
                  settings: "unslick"
            }]
      });


      //Tabs Slider
      matches.slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            responsive: [{

                  breakpoint: 1200,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        dots: false,
                  }

                }, {

                  breakpoint: 991,
                  settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                  }

                }, {

                  breakpoint: 767,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                  }

                }, {

                  breakpoint: 575,
                  settings: "unslick"

            }]
      });


      battles.slick({
            arrows: false,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{

                  breakpoint: 1200,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        dots: false,
                  }

                }, {

                  breakpoint: 991,
                  settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false,
                  }

                }, {

                  breakpoint: 767,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                  }

                }, {

                  breakpoint: 575,
                  settings: "unslick"

            }]
      });

      $('#tabsArrowPrev').on('click', function() {
            matches.slick('slickPrev');
            battles.slick('slickPrev');
      });

      $('#tabsArrowNext').on('click', function() {
            matches.slick('slickNext');
            battles.slick('slickNext');
      });


      //Tabs
      $("[data-tabs]").on("click", function(event) {
            event.preventDefault();

            const tabs = $(this).data('tabs');
            $(tabs).addClass('active').siblings().removeClass('active');

            battles.slick("refresh");
            matches.slick("refresh");

      });
});