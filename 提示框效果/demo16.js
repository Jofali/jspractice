window.onload = function(){
  var
   oli = document.getElementsByTagName("li"),
   oimg = document.getElementsByTagName("img");
   for(var i = 0;i < oli.length;i ++)
   {
      oli[i].index = i;
      oli[i].onmouseover = function(){
          oimg[this.index].style.display = "block";
   }
     oli[i].onmouseout = function(){
          oimg[this.index].style.display = "none";
      }
   }
 }