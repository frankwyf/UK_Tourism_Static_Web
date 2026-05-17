
// Default to central London so the page works without any external map key.
var defaultLatitude = 51.5074;
var defaultLongitude = -0.1278;
var currentLatitude = defaultLatitude;
var currentLongitude = defaultLongitude;

window.onload = function () {
    load();

    var btn = document.getElementById("refresh");
    if (btn) {
        btn.onclick = function () {
            load();
            return false;
        };
    }

    var btn2 = document.getElementById("submit");
    if (btn2) {
        btn2.onclick = function () {
            var lo = parseFloat(document.getElementById("lo").value);
            var la = parseFloat(document.getElementById("la").value);
            load2(lo, la);
            return false;
        };
    }
};

function renderMap(latitude, longitude, label) {
    var container = document.getElementById("container");
    if (!container) {
        return;
    }

    var safeLatitude = Number.isFinite(latitude) ? latitude : defaultLatitude;
    var safeLongitude = Number.isFinite(longitude) ? longitude : defaultLongitude;
    var mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=" +
        (safeLongitude - 0.03) + "%2C" + (safeLatitude - 0.02) + "%2C" +
        (safeLongitude + 0.03) + "%2C" + (safeLatitude + 0.02) +
        "&layer=mapnik&marker=" + safeLatitude + "%2C" + safeLongitude;

    container.innerHTML =
        '<iframe title="OpenStreetMap" src="' + mapUrl + '" style="border:0;width:100%;height:100%;min-height:320px;border-radius:12px;" loading="lazy"></iframe>';

    var status = document.getElementById("status");
    if (status) {
        status.innerHTML = label + "<br>Latitude: " + safeLatitude.toFixed(5) + " | Longitude: " + safeLongitude.toFixed(5);
    }
}

function load() {
    renderMap(currentLatitude, currentLongitude, "OpenStreetMap view");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLatitude = position.coords.latitude;
            currentLongitude = position.coords.longitude;
            renderMap(currentLatitude, currentLongitude, "Your current location");
        }, function () {
            renderMap(defaultLatitude, defaultLongitude, "OpenStreetMap view");
        }, { enableHighAccuracy: true, timeout: 5000 });
    }
}

function load2(lo, la) {
    if (!Number.isFinite(lo) || !Number.isFinite(la)) {
        var status = document.getElementById("status");
        if (status) {
            status.innerHTML = "Please enter valid longitude and latitude values.";
        }
        return;
    }

    currentLongitude = lo;
    currentLatitude = la;
    renderMap(currentLatitude, currentLongitude, "Custom coordinate view");
}
