$(function() {

  // Photogallery open
  $('.photogallery-open').click(function() {
    $(this).closest('.page_sidebar.__content').slideUp();
    $(this).closest('.page_sidebar.__content').siblings('.page_sidebar.__photogallery').slideDown();
    return false;
  });

  // Photogallery close
  $('.photogallery-close').click(function() {
    $(this).closest('.page_sidebar.__photogallery').slideUp();
    $(this).closest('.page_sidebar.__photogallery').siblings('.page_sidebar.__content').slideDown();
    return false;
  });

  // Thumb click
  $('.photogallery_th_i_a').click(function() {
    var src = $(this).prop('rel');
    $(this).closest('.photogallery').find('.photogallery_viewport_img').prop('src', src);
    $('.photogallery_th_i').find('.__current').removeClass('__current');
    $(this).addClass('__current');
    return false;
  });

  // Thumbs roller
  $('.photogallery_th').each(function() {

    var
        $outer_container         = $(this).find('.photogallery_th'),
        $thumbScroller           = $(this).find('.photogallery_th_scroller'),
        $thumbScroller_container = $(this).find('.photogallery_th_scroller_ctn'),
        $thumbScroller_content   = $(this).find('.photogallery_th_i'),
        $thumbScroller_thumb     = $(this).find('.photogallery_th_i_img');

    var 
        sliderWidth  = $thumbScroller.width(),
        itemWidth    = $thumbScroller_content.width() + 5,
        totalContent = $thumbScroller_thumb.length * itemWidth - 5;

    $thumbScroller_container.css('width', totalContent);
    
    $(this).mousemove(function (e) {
      var 
          mouseCoords = (e.pageX - this.offsetParent.offsetLeft - this.offsetLeft),
          mousePercentY = mouseCoords / sliderWidth,
          destY = -((totalContent - 2*sliderWidth ) * mousePercentY),
          thePosA = mouseCoords - destY,
          thePosB = destY - mouseCoords;
          
      if (mouseCoords == destY) {
        $thumbScroller_container.stop();
      }
      if (mouseCoords > destY) {
        $thumbScroller_container.css('left', -thePosA);
      }
      if (mouseCoords < destY) {
        $thumbScroller_container.css('left', thePosB);
      }
    });
  });

});