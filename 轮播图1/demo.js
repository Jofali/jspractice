window.onload = function(){
  var wraper = document.getElementById("slide");
  var otri = wraper.getElementsByTagName("div")[0];
  var ospan = otri.getElementsByTagName("span");
  var units = wraper.getElementsByTagName("ul")[0];
  var oli = units.getElementsByTagName("li");
  var timer = play = null;
  var left = os = k = 0;
  var j = 1;
  trigger();
  autoplay();
  touch();
  overTri();
  var de = document.getElementsByTagName("img");
  for (var i = 0; i < de.length; i++) {
      de[i].setAttribute("title","height");
  };



   function overTri(){
     var sa = 0;
     for (var i = 0;i < ospan.length;i++) {
      ospan[i].index = i;
      ospan[i].onmouseover = function(){
        triStyle(this.index);
        clearInterval(play);
        clearInterval(timer);
        sa = 20*this.index;
        move(sa);
       }
       ospan[i].onmouseout = function(){
        autoplay(undefined);
       }
     };

   }

  function trigger(){
    for(var i = 0;i < oli.length - 1;i++){
      var thistri = document.createElement("span");
      thistri.innerHTML = i+1;
      otri.appendChild(thistri);
      ospan[0].style.color = "#fff";
      ospan[0].style.background = "#1a68cb";
    }
  }

  function triStyle(e){
    if(e !== undefined) j = e;
    for(var i = 0;i < ospan.length;i++){
      ospan[i].style.color = "#1a68cb";
      ospan[i].style.background = "#fff";
    };
    if(j == ospan.length) j = 0;
    ospan[j].style.color = "#fff";
    ospan[j].style.background = "#1a68cb";
    j++;
  }

  function touch(){
    units.onmouseover = function(){
      clearInterval(play);
    }
    units.onmouseout = function(){
      autoplay();
    }
  }

  function autoplay(speed){
    play = setInterval(function(){
    clearInterval(timer);
    if(speed !== undefined) os = speed;
    os === 60 ? os = 0 : os += 20;
    triStyle();
    move(os);
    },3000);
  }
  function play(){

  }
  function move(eq){
    timer = setInterval(function(){
      left = Math.floor(oli[1].style.left);
    if(left < eq) {
      xunhuan(left-1);
  }else{
    if(left > eq) {
      xunhuan(left+1);
    } else{
      if(left = eq)
      {
        left = eq;
      }else{
      if(left === 80) {
        oli[i].style.left = 0;
      }
           }
          }
        }
    },30);
  }

  function xunhuan(speed){
    for(var i = 0; i < oli.length;i++)
      {
        oli[i].style.left = speed + "%";}
    }
}