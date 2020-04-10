$(document).ready(function() {
  
    var i = 0, timeOut = 0;
    
    $('.close').on('mousedown touchstart', function(e) {
      $(this).addClass('active');
      timeOut = setInterval(function(){
        console.log(i++);
      }, 100);
    }).bind('mouseup mouseleave touchend', function() {
      $(this).removeClass('active');
      clearInterval(timeOut);
    });
    
  });