$(document).ready(function(){

  var img = $('#myPicture');
  //img.attr('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');

  //$("img").slideDown(12000);
  //$('img').fadeTo(12000, 1);
  $("section").click(function() {
    //$("#bio").css({
    $(this).css({
      'background-color': 'blue'
    });
  });

  $("img").mouseenter(function() {
      $("img").fadeTo("fast", 0.5);
    });

    $("img").mouseleave(function() {
      $("img").fadeTo("fast", 1.0);
    });

});
