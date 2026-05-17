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
