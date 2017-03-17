window.onload = function(){
  var oa1 = document.getElementsByTagName("input")[0];
  var oa2 = document.getElementById("formula");
  var obutton = document.getElementsByTagName("a");
  var i = 0;
  for(i = 0;i < obutton.length;i++)
  {
    // obutton[i].onfoucs = function(){
    //   this.blur()
    // }
    obutton[i].onclick = function(){
      switch(this.innerHTML)
      {
        case "%":
          count("%")
          break;
        case "/":
          count("/")
          break;
        case "*":
          count("*")
          break;
        case "+":
          count("+")
          break;
        case "-":
          count("-")
          break;
        case ".":
          if(oa1.value.search(/[\.\%\*\-\+\/]/) != -1){
            console.log("0.0");
            break;
          }
          else{
            console.log("1.1");
            oa1.value += ".";
            break;
          }
          break;
        case "=":
          oa2.value += oa1.value;
          oa1.value = eval(oa2.value.replace(/\%\-\*\+\//,''));
        /*
        *
        *
         */
        break;
        case "c":
          oa1.value = 0;
          oa2.value = "";
          break;
        default:
          oa1.value = (oa1.value+this.innerHTML).replace(/^[0\%\/\*\-\+](\d)/,"$1");
      }
    }
  }
  function count(a){
    var qq = oa1.value + a;
    oa2.value += qq;
    oa1.value = "0";
  }
}