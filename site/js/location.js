
//默认地理位置设置为上海市浦东新区
var x=121.48789949,y=31.24916171;
window.onload = load()

var btn = document.getElementById("refresh");

btn.onclick=function(){
    load();
    alert("refreshed!");
}

var btn2 = document.getElementById("submit");

btn2.onclick = function (){
    var lo = document.getElementById("lo").value
    var la = document.getElementById("la").value
    load2(lo,la)
}


function load(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        document.getElementById("status").innerHTML = "Application of HTML5 Geolocation";

        var map = new BMap.Map("container");
        var point = new BMap.Point(x,y);
        map.centerAndZoom(point,12);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            }
        else {
            alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true})
        return;
    }
    alert("Geolocation is not supported by your browser！");
};

function load2(lo,la){
    document.getElementById("status").innerHTML = "HTML5 Geolocation!";

    var map = new BMap.Map("container");
    var point = new BMap.Point(lo,la);
    map.centerAndZoom(point,12);

}

function showPosition(position){
    x=position.coords.latitude;
    y=position.coords.longitude;
}
