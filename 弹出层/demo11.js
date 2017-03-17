window,onload = function(){
  var oBtn = document.getElementsByTagName("button")[0];
  var close = document.getElementById("close");
  var oBg = document.getElementById("bg");
  oBtn.onclick = function(){
    oBg.style.display = "block";
  }
  close.onclick = function(){
    oBg.style.display = "none";
  }
}