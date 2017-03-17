window.onload = function(){
  var oil = document.getElementsByTagName("li");
  console.log(oil);
  for(var i = 0;i < oil.length;i++){
      oil[i].onmouseover = function(){
        this.className = "change";
      }
      oil[i].onmouseout = function(){
        this.className = "";
      }

  }

}