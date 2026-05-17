//实时位置
var x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "<p>Latitude: " + position.coords.latitude + "</p>" +
    "<p>Longitude: " + position.coords.longitude + "</p>";
}
