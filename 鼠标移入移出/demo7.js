window.onload = function(){
  var odiv = document.getElementById("mydiv");
  odiv.onmouseover = function(){
    odiv.className = "food";
  };
  odiv.onmouseout = function(){
    odiv.className = "";
  };
  var opwd = document.getElementById("pwd");
  var otips = document.getElementById("tips");
  opwd.onmouseover = function(){
    otips.style["display"] = "block";
  };
  opwd.onmouseout = function(){
    otips.style["display"] = "none";
  };
  var osect = document.getElementById("select");
  var oclose = document.getElementById("close");
  var obaidu = document.getElementById("baidu");
  var oBtn = baidu.getElementsByTagName("input")[0];
  var oli = osect.getElementsByTagName("li");
  for(var i = 0;i < oli.length;i++){
    oli[i].onmouseover = function(){
      this.style.background = "#d9e1f6";
    };
    oli[i].onmouseout = function(){
      this.style.background = "";
    }
  };
  oBtn.onclick = function(){
    osect.style.display = osect.style.display == "block" ? "none" : "block";
  };
  oclose.onclick = function(){
    osect.style.display = "none";
  }
}