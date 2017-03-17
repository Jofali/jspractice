window.onload = function(){
  var odemo = document.getElementById("demo9");
  var oli = odemo.getElementsByTagName("li");
  for(var i = 0;i < oli.length;i++){
      oli[i].onclick = function(){
        alert(this.innerHTML);
      }
  }
}