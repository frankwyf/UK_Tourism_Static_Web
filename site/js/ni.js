var canvas = document.getElementById('flagCanvas')
var ctx = canvas.getContext('2d')

var IMG_MAX_WIDTH = 600
var IMG_MAX_HEIGHT = 600
var imgWidth, imgHeight

var image = new Image()
image.src = '../ni/sni.png'

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
