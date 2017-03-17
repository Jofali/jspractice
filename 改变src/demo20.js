window.onload = function(){
  var oli = document.getElementsByTagName("li");
  var oimg = document.getElementsByTagName("img");
  for(var i = 0;i < oli.length;i++)
  {
    oli[i].index = i;
    oli[i].onmouseover = function(){
      oimg[0].src = oimg[this.index].src.replace(/small/,"big");
    }
  }
}