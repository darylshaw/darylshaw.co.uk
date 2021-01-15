$(document).ready(function() {

    if ('ontouchstart' in document) {
        // if touch device

        // remove class to all hover reveal
        $('.hover-reveal').removeClass('no-touch');

        // trigger hover-reveal on touch
        $('.hover-reveal').on({
            'touchstart': function(e) {
                $('.hover-reveal').removeClass('hover-effect');
                $(this).addClass('hover-effect');
            }
        });

        // remove hover reveal if touch lands anywhere else
        $(document).on({
            'touchstart': function(e) {
                if(
                    !$(e.target).closest('.hover-reveal').length
                    && !$(e.target).is('.hover-reveal')
                ) {
                    $('.hover-reveal').removeClass('hover-effect');
                }
            }
        });
    }
  });

$(function(){

  // https://codepen.io/blucube/pen/zPmGyL

  // init arrays of element positions
  var navEls = new Array();
  var bgPanels = new Array();

  // on resize, determine positions
  $(window).resize(function(){

    // nav elements
    navEls = new Array();
    var vPos = $(window).scrollTop();
    $('.nav-el').each(function(){
      var elMid = $(this).offset().top + ($(this).innerHeight() / 2) - vPos;
      navEls.push(new Array($(this), elMid));
    });

    // invert-nav background panels
    bgPanels = new Array();
    $('.invert-nav').each(function(){
      var elTop = $(this).offset().top;
      var elBottom = elTop + $(this).height();
      bgPanels.push(new Array(elTop, elBottom));
    });

    // once all positions calculated, trigger scroll event
    $(window).trigger('scroll');

  });

  // on scroll, check if nav elements are over invert-nav panels
  $(window).scroll(function(){
    var vPos = $(window).scrollTop();
    for(i = 0; i < navEls.length; i++) {
      navEls[i][0].removeClass('invert');
      for(p = 0; p < bgPanels.length; p++) {
        if(((bgPanels[p][0] - vPos) <= navEls[i][1]) && ((bgPanels[p][1] - vPos) > navEls[i][1])) {
          navEls[i][0].addClass('invert');
          break;
        }
      }
    }
  });

  // fire resize event on load
  $(window).trigger('resize');

});
