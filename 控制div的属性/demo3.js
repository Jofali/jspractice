window.onload = function(){
  var demo = document.getElementById("demo3");
  var demoInput = demo.getElementsByTagName("input");
  var demodiv = demo.getElementsByTagName("div")[0];
  var demoCss =["width","height","background","display","display"];
  var demoCssval = ["300px","300px","blue","none","block"];
  for(var i = 0;i < demoInput.length;i++)
  {
          demoInput[i].index = i;//input的自定义属性，每个input的该属性被赋予了不同值
          demoInput[i].onclick = function(){
/********************************************************************************/
//            &&的短路利用，引出，javascript 运算符与(&&)或(||)的返回值问题     //
//            if (a==b) {                                                       //
//            test();//当a和b相同时，执行test();                                //
//             }                                                                //
//             (a == b) && test();//同上                                        //
/********************************************************************************/
            this.index == demoInput.length - 1 && (demodiv.style.cssText = "");
            divclick(this.index);
          }
  }
  function divclick(a){
       demodiv.style[demoCss[a]] = demoCssval[a];

  }
}