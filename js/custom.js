/*  remove side navigaton on small screens
*/

function sideNav() {
  if ($(window).width() < 750) {
    $('.off-canvas-wrap').removeClass('move-right');
    $('.left-off-canvas-toggle').show();
  } else {
    $('.off-canvas-wrap').addClass('move-right');
    $('.left-off-canvas-toggle').hide();
  }  
}

$(window).resize(function() {
  sideNav();
});



/*  slick image slideer
*/

angular.module('qp', ['slick']);




/*  add to cart
*/

$('.add-to-order-button').on('click', function() {
	console.log('add to cart');
});



