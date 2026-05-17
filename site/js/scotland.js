var canvas = document.getElementById('flagCanvas')
var ctx = canvas.getContext('2d')

var IMG_MAX_WIDTH = 600
var IMG_MAX_HEIGHT = 600
var imgWidth, imgHeight

var image = new Image()
image.src = '../scotland/scotflag.jpg'

var amplitude = 30
var period = 2
var frequency = 1
var wavelength
var v
var cftX
var cftA

image.onload = function (ev) {

  imgWidth = Math.floor(image.width)
  imgHeight = Math.floor(image.height)

  var canvas = document.getElementById('flagCanvas')
  var scale = 1
  if (imgWidth > IMG_MAX_WIDTH) {
    scale = IMG_MAX_WIDTH / imgWidth
  }
  if (imgHeight > IMG_MAX_HEIGHT) {
    scale = scale * IMG_MAX_HEIGHT / imgHeight
  }

  canvasWidth = imgWidth
  canvasHeight = imgHeight + amplitude * 2
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  canvas.style.transform = 'translate3d(-50%,-50%,0) scale(' + scale + ')'

  wavelength = imgWidth / period
  cftX = 2 * Math.PI / wavelength
  cftA = amplitude / imgWidth
  v = wavelength * frequency

  tick()
}
$(document).ready(function(){
    var slideShow=$(".slideShow"),     //获取最外层框架的名称
        ul=slideShow.find("ul"),
        showNumber=slideShow.find(".showNav span"),//获取按钮
        oneWidth=slideShow.find("ul li").eq(0).width();   //获取每个图片的宽度
        var timer=null;   //定时器返回值，主要用于关闭定时器
        var iNow=0;      //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

        showNumber.on("click",function(){           //为每个按钮绑定一个点击事件
            $(this).addClass("active").siblings().removeClass("active");   //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
            var index=$(this).index();  //获取哪个按钮被点击，也就是找到被点击按钮的索引值
            iNow=index;
            ul.animate({
                "left":-oneWidth*iNow,   //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNOWx确定
            })
        });

        timer=setInterval(function(){        //打开定时器
            iNow++;                          //让图片的索引值次序加1，这样就可以实现顺序轮播图片
            if(iNow>showNumber.length-1){    //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
                iNow=0;
            }
            showNumber.eq(iNow).trigger("click");    //模拟触发数字按钮的click
        },5000);   //2000为轮播的时间
})


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
