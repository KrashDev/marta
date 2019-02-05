$(document).ready(function() {

  // $('.box').append('<img id="beat" src="images/beat.svg">');
  // var shape = document.querySelector("#bNGpIIHVP");
  // var shapeLength = shape.getTotalLength();
  // console.log(shapeLength);

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


  // a2zU4pxSq8, length = 940
  // jzBxlKKY4, length = 1060
  // aihNAE5HB, length = 1102
  // bijzkvWWt, length = 1182
  // a1kPH6qs9k, length = 1243
  // bhkF4RiW, length = 1314
  // a22JOEqj3, length = 1150
  // cQOyV3aTQ, length = 1233
  // auz20nwpr, length = 1600
  // e1PVFVGX1y, length = 940
  // b2Gnn0cJz9, length = 940
  // l4vmPj1Ve, length = 940
  // fCIeJR3An, length = 940
  // f2ziO4LPKp, length = 940

  $('svg path').each(function() {
    var delay = Math.floor((Math.random() * 5) + 1);
    $(this).css({
      "animation-delay": delay + "s"
    });
  });







}); //document ready function