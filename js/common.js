$(document).ready(function () {

  var owlEvent = $(".owl-event");

  owlEvent.owlCarousel({

    dots: false,
    nav: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        stagePadding: 15,
        margin: 15
      },

      // breakpoint from 768 up
      998: {
        items: 3
      }
    }
  });

  var owlEvent = $(".slider-owl");

  owlEvent.owlCarousel({

    dots: false,
    nav: true,
    items: 1
  });

  if ($(window).width() < 988) {
    var owlRew = $(".review-owl");

    owlRew.owlCarousel({

      dots: false,
      nav: true,
      items: 1,
      stagePadding: 30,
      margin: 15
    });
  }


  $(".question-part").on("click", "h2", function () {
    $(this).parent().toggleClass("active");
  });
  $.parallaxify();

  var showAccountTime;
  $(".accaunt-img, .accaunt-link").hover(function () {
    $(".popup-account").addClass("show");
    clearTimeout(showAccountTime);

  }, function () {
    showAccountTime = setTimeout(function () {
      $(".popup-account").removeClass("show");
    }, 250);
  });
  $(".popup-account").hover(function () {
    clearTimeout(showAccountTime);
  }, function () {
    $(".popup-account").removeClass("show");
  });



});