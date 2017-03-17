window.onload = function(){
  var omydiv = document.getElementById("mydiv");
  var odiv = omydiv.getElementsByTagName("div")[0];
  var oul = omydiv.getElementsByTagName("ul")[0];
  odiv.onclick = function(){
    oul.style.display = oul.style.display == "block" ? "none" : "block";
    this.className = this.className == "" ? "bgp" : "";
  }
}