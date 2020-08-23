$(document).ready(function() {

  /*! Fades in page on load */
  $('body').css('display', 'none');
  $('body').fadeIn(500);

  /*! Fades out the whole page when clicking links */
  $('.clk').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(500, newpage);
  });

  function newpage() {
    window.location = newLocation;
  }

});
