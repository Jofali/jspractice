window.onload = function(){
  var oinput = document.getElementsByTagName("input");
  var obutton = document.getElementsByTagName("button")[0];
  obutton.onclick = function(){
    falert();
  }
  function falert(){
    var a = "你第一栏输入的是"+oinput[0].value+";第二栏输入的是"+oinput[1].value;
    alert(a);
  }
}