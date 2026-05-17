var canvas = document.getElementById('flagCanvas')
var ctx = canvas.getContext('2d')

var IMG_MAX_WIDTH = 600
var IMG_MAX_HEIGHT = 600
var imgWidth, imgHeight

var image = new Image()
image.src = '../walse/walesflag.jpg'

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
