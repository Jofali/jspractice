window.onload = function(){
  var olink = document.getElementsByTagName("link")[0];
  var contr = document.getElementById("control");
  var ocontrli = contr.getElementsByTagName("li");
  for(var i = 0;i < ocontrli.length;i++)
  {
    ocontrli[i].onclick = function(){
      for( p in ocontrli) ocontrli[p].className = "";//遍历数组操作
      this.className = "current";
      olink["href"] = this.id +".css";//利用html DOM 修改link的属性href
    }
  }
}