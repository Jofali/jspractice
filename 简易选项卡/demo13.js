window.onload = function(){
  var oTab = document.getElementById("tab").getElementsByTagName("li");
  var oCard = document.getElementById("list").getElementsByTagName("div");
  for(var i = 0;i < oTab.length;i++)
  {
    oTab[i].index = i;
    oTab[i].onmouseover = function(){
      for(var j = 0;j < oTab.length;j++){
        oTab[j].className = "";
        oCard[j].className = "list";
      }
      this.className = "bgc";
      oCard[this.index].className = "dis list";
    }
  }
}