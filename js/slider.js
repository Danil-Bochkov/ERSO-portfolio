// $(document).ready(function () {
//     $('.portfolio-list').slick({
//         dots: false,
//         responive: [
//             {
//                 breakpoint: '767px',
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             }
//         ],
//     });
// });

mobileOnlySlider(".portfolio-list", false, true, 767);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  const slider = $($slidername);
  const settings = {
    centerMode: true,
  centerPadding: '60px',
    dots: $dots,
    arrows: $arrows,
    responsive: [
        {
            breakpoint: $breakpoint,
            settings: {
                centerMode: false,
                slidesToShow: 1
            },
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}