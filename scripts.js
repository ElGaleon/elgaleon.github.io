$logoHeader = document.getElementsByClassName("logo-header");
$main = document.getElementsByClassName("main");

setTimeout(
    function() 
    {
    
$(document).ready(function(){
    $($logoHeader).mouseover(function(){
      $(document.getElementsByClassName('manifest')).css("display", "block");
      $(document.getElementsByClassName('main')).css("filter", "blur(50px)").fadeIn();
      
    });
    $($logoHeader).mouseleave(function(){
        $('.main').css("filter", "blur(0px)"),
        $('.manifest').css("display", "none");
      });
  });
    //do something special
}, 5000);