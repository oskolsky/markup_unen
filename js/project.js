// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  sectionPosition();  

  $("body").queryLoader2({
      barColor: "#000",
      backgroundColor: "#0a0a0a",
      percentage: false,
      barHeight: 1,
      completeAnimation: "grow",
      minimumTime: 100
  });

  // Enter
  $('.enter').click(function() {        
    $('.cycle-slideshow').cycle('goto', 1);
    $('.header_nav').fadeIn();
    $('#about').find('.header_nav_a_img').fadeIn();
    return false;
  });

  // Set current item
  var hash = $(window.location.hash);
  if (hash.selector != '') {
    $('.header_nav').show();
    $(hash).find('.header_nav_a_img').show();    
  }

  $('.page_sidebar.__content').slideDown();

  /* Slider */
  $('.cycle-slideshow').on('cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $('.page').animate({opacity: '1'});
    $('.page_sidebar.__photogallery').hide();
    $('.page_sidebar.__content').slideDown();    
    $('.scroll-pane').jScrollPane();
  });

  $('.cycle-slideshow').on('cycle-before', function() {
    $('.page').animate({opacity: '0.1'});
    $('.page_sidebar.__content').slideUp();  
  });

  $('.header_nav_a').click(function() {
    $('.header_nav_a_img').fadeOut()
    $(this).find('.header_nav_a_img').fadeIn();
    return false;
  });  

  // Tabs
  $('.links').find('.links_a').click(function() {
    var 
        defaultTab = 'services',
        tab = $(this).data('tab');
    $('.links').find('.__current').removeClass('__current');
    if ( $('.tab.__' + tab).hasClass('__current') ) {
      $('.tab').removeClass('__current');
      $('.tab.__' + defaultTab).addClass('__current');
    } else {
      $(this).addClass('__current');
      $('.tab').removeClass('__current');
      $('.tab.__' + tab).addClass('__current');      
    }
    $('.scroll-pane').jScrollPane();
  });

});

// WINDOW SCROLL
// ----------------------------------------------------------------------------------------------------
$(window).scroll(function() {});

// WINDOW LOAD
// ----------------------------------------------------------------------------------------------------
$(window).load(function() {

  // FadiIn section
  $('.section').fadeIn(1500, function() {
    $('.scroll-pane').jScrollPane();
  });

});

// WINDOW RESIZE
// ----------------------------------------------------------------------------------------------------
$(window).resize(function() {
  sectionPosition();
});

function sectionPosition() {
  var 
      windowH  = $(window).outerHeight(),
      sectionH = $('.section').outerHeight();
  if (windowH > sectionH) {
    var padding = (windowH - sectionH) / 2;
    $('.section').css({marginTop: padding + 'px'});
  }
} 