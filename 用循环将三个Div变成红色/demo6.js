window.onload = function(){
  var oBtn = document.getElementsByTagName("button")[0];
  var mydiv = document.getElementById("mydiv");
  var oBox = mydiv.getElementsByTagName("div");
  oBtn.onclick = function(){
    for( p in oBox)
    {
      if(oBox[p].style){
        oBox[p].style["background-color"] = "red";
        console.log(oBox[p].style);
      }

    }
  }
}