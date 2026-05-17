function getTime(){
var Week, Weekday;
var date = new Date();
Week = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];
Weekday = date.getDay();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
document.getElementById("getTime").innerHTML = day + "/" + month + "/" + year + "/" + "\t" + hours + ":" + minutes + ":" + seconds + "\t" + Week[Weekday];
}
getTime();
setInterval("getTime()",1000);
