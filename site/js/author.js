//总访问次数
if (typeof(Storage) !== "undefined") {
function setStorage(){
   if(localStorage.counter){
      localStorage.counter=Number(localStorage.counter)+1;
   }
   else{
        localStorage.counter=1;
        }
        return localStorage.counter;
        }
}
else {
  window.alter("Local storage is not supported");
}
  var counter=setStorage();
  var oBox=document.getElementById('box');
  oBox.innerHTML="The website has been visited for: "+counter+" times.";

// 当前访问人数
if (typeof(Storage) !== "undefined") {
  function current(){
  if(sessionStorage.counter){
     sessionStorage.counter=Number(sessionStorage.counter)+1;
  }
  else{
       sessionStorage.counter=1;
       }
       return sessionStorage.counter;
       }
}
else {
  window.alter("Local storage is not supported");
}
var counter1=current();
var current=document.getElementById('boxcurrent');
current.innerHTML="The website has been visited for: "+counter1+" times lately."


//轮播
function aa() {
    var lIndex = 0;
    $(".r-arr").click(function() {
        if (lIndex < 4) {
            lIndex++;
        } else {
            lIndex = 0;
        }
        $(".but ul li").eq(lIndex).addClass("hover").siblings().removeClass("hover");
        $(".pic img").eq(lIndex).fadeIn().siblings().fadeOut();
    });
    $(".l-arr").click(function() {
        if (lIndex > 0) {
            lIndex--;
        } else {
            lIndex = 4;
        }
        $(".but ul li").eq(lIndex).addClass("hover").siblings().removeClass("hover");
        $(".pic img").eq(lIndex).fadeIn().siblings().fadeOut(500);
    });
    $(".but ul li").click(function() {
        $(this).addClass("hover").siblings().removeClass("hover");
        var nIndex = $(this).index();
        $(".pic img").eq(nIndex).fadeIn(500).siblings().fadeOut(500);
        lIndex = nIndex;
    });
    function dingshi() {
        setInterval(function() {
            (lIndex < 4) ? (lIndex++) : (lIndex = 0);
            $(".but ul li").eq(lIndex).addClass("hover").siblings().removeClass("hover");
            $(".pic img").eq(lIndex).fadeIn().siblings().fadeOut();
        }, 1600);
    };
    dingshi(); 
}
aa();
