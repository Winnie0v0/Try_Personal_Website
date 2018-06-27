<script src="assets/js/jquery.min.js"></script>
<script type="text/javascript">var submitted=false;</script>
<script type="text/javascript">

$('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(1500);
  $('#gform').prepend('Your submission has been processed...');
  });

/* Animations on scroll */
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '50%'
});


/* Mobile navigation */
$('.js--about-me').click(function() {
    var nav = $('.js--about-me');
    var icon = $('.js--about-me');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }

  $('.js--contact-me').click(function() {
      var nav = $('.js--contact-me');
      var icon = $('.js--contact-me');

      nav.slideToggle(200);

      if (icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
      } else {
          icon.addClass('ion-navicon-round');
          icon.removeClass('ion-close-round');
      }
  });


</script>
