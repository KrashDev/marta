$(document).ready(function() {

  // $('.box').append('<img id="beat" src="images/beat.svg">');
  // var shape = document.querySelector("#b2PTF6lHdC");
  // var shapeLength = shape.getTotalLength();
  // console.log(shapeLength);
  //
  // var shape1 = document.querySelector("#aMkbum4Nd");
  // var shapeLength1 = shape1.getTotalLength();
  // console.log(shapeLength1);
  //
  // var shape2 = document.querySelector("#e2pYLaai2c");
  // var shapeLength2 = shape2.getTotalLength();
  // console.log(shapeLength2);
  //
  // var shape3 = document.querySelector("#a4kMFv2ZrW");
  // var shapeLength3 = shape3.getTotalLength();
  // console.log(shapeLength3);

  $('.direction').click(function() {
    var el = $(this);
    el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"))
    $('#bNGpIIHVP').toggleClass('reverse');
  });

  $('.speed').click(function() {
    var el = $(this);
    el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"))
    $('#bNGpIIHVP').toggleClass('slower');
  });


  // $('svg path').each(function() {
  //   var delay = Math.floor((Math.random() * 5) + 1);
  //   $(this).css({
  //     "animation-delay": delay + "s"
  //   });
  // });

  $('.line-name').click(function() {
    $(this).parent().find('li').css('visibility', 'visible');
  });







}); //document ready function