window.onload = function(){
  var oBtn = document.getElementsByTagName("button")[0];
  var oShow = document.getElementsByTagName("span")[0];
  var tota = 0;
  oBtn.onclick = function(){
      var oValue = document.getElementsByTagName("input")[0].value.split(",");
      for(var i = 0;i < oValue.length;i++){
         tota = tota + parseInt(oValue[i]);
         console.log(tota);
      }
      oShow.innerHTML = tota;
      tota = 0;
  }

}