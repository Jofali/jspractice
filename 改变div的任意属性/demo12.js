window.onload = function(){
  var oInput = document.getElementsByTagName("input");
  var odiv = document.getElementById("mydiv");
  oInput[2].onclick = function(){
    var oattr1 = oInput[0].value;
    var oattr2 = oInput[1].value;
    odiv.style[oattr1] = oattr2;
  }
}