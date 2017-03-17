function showPic(whichpic){
//检查点开始
  if(!document.getElementById("placeholder")) return false;
//检查点结束
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
//检查点开始
  if(document.getElementById("description")){
    var text = whichpic.getAttribute("title") ? (whichpic.getAttribute("title")) : ("No title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
  }
//检查点结束
  return true;
}

function prepareGallery(){
//检查点开始
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
//检查点结束
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for(var i = 0;i < links.length;i++){
      links[i].onclick = function(){
      return showPic(this) ? false : true;
      }
    }
}

function addLoadEvent(func){
  var oldonload = window.onload;
  if(typeof window.onload != "function"){
    window.onload = func;
  } else{
    window.onload = function()
    {
      oldonload();
      func();
    }
  }
}

addLoadEvent(prepareGallery);