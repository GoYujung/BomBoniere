$(document).ready(function(){

  var imgs = 2;
var now = 0;
start();
function start(){
  $(".slide>a").eq(0).siblings().animate({width:"-1980px"});
  setInterval(function(){
    now = now==imgs ? 0 : now+=1;
    $(".slide>a").eq(now-1).animate({width:"-1980px"});
    $(".slide>a").eq(now).animate({width:"1980px"});
  },3000);
}

}); 