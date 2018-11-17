 $(document).ready(function(){
    // navbar active class
   $('ul li').click(function(){
     $('li').removeClass("active1");
     $(this).addClass('active1');
   });

    /*shrink nav*/
   $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });
  /*shrink nav*/

    /*humbergur menu*/
  $('.navbar .navbar-toggler').click(function(){
    $(this).toggleClass('open');
  });
  /*humbergur menu*/

  /*work toggle*/
  $('#work .vew').click(function(){
    $('.activediv').toggle('activ-dgn');
  });

/*work toggle*/


$("#modal1").iziModal({
  title: '<h2 class="contacts_name">contacts us</h2>',
  icon: null,
  iconText: null,
  arrowKeys: true,
  navigateArrows: true,
    overlayColor: 'rgba(31, 31, 31, 0.82)',
    bodyOverflow: true,
});



  //wow js active
  new WOW().init();






//     $('').css({
//        overflow: 'auto',
//        height: 'auto';
//     });
// //
// // carousel timer
//   $('.carousel').carousel({
//   interval: 2000
//   })
//
//
//
// /*===============================isotop ==============================*/
//   var $grid = $('.product').isotope({
// // options
//   });
//
// // filter items on button click
//   $('.filter-button').on( 'click', 'ul li', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
//   });
//
//   // active class
//
//   $('#protfolio ul li').click(function(){
//     $('li').removeClass("active");
//     $(this).addClass('active');
 // });


 // silk slider
 /*
 $('.caro-fdbck').slick({
    autoplay:true,
    autoplaySpeed: 3000,
    mobileFirst: false,
    prevArrow: '<img src="img/prev.png" class="previmg" alt=""/>',
    nextArrow: '<img src="img/next.png" class="nextimg" alt=""/>',
  });*/

  $('#work .work-dgn').slick({
    infinite: true,
    //autoplay:true,
    autoplaySpeed: 3000,
    //dots: true,
    prevArrow: false,
    nextArrow: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
   });

});




/*preloader*/

$(document).ready(function() {
      setTimeout(function() {

        $("body").removeClass("cut");
        $("#pulsar").addClass("hide");
        $("#preloader").addClass("moveUp");

    }, 3000)
})
/*preloader*/
