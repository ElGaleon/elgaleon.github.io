$logoHeader = document.getElementsByClassName("logo-header");
$main = document.getElementsByClassName("main");

setTimeout(
    function() 
    {
    
$(document).ready(function(){
    $($logoHeader).mouseover(function(){
      $('body').not('logo-header').css("filter", "blur(10px)");
    });
    $($logoHeader).mouseleave(function(){
        $('body').css("filter", "blur(0px)");
      });
  });
    //do something special
}, 5000);