window.onload = function(){
  var cunt = document.getElementById("time");
  var btn = cunt.getElementsByTagName("a")[0];
  var timer = null;
  btn.onclick = function(){
    this.className == "" ? (timer = setInterval(updateTime, 1000),updateTime()) : (clearInterval(timer));//点击立刻执行updateTime，然后每隔1000执行一次
    this.className = this.className == '' ? "cancel" : '';//条件this.className == ''，结果"cancel" : '';

  };

function farmat(a){
  return a.toString().replace(/^(\d)$/,'0$1') //如果a是一位数字，则在前面加上0，返回该字符串。比如a 为1,则返回"01"
}
function updateTime(){
  var ospan = cunt.getElementsByTagName("span");
  var oremain = ospan[0].innerHTML.replace(/^0/,'')*60 + parseInt(ospan[1].innerHTML.replace("/^0/",''));
/*
##这段日志发现了两个span计算出的值数据类型不一
##若未转换数据类型
##则输出的oremain为一个string类型
##不是预期的number类型

  console.log("分钟转换成的秒数"+ospan[0].innerHTML.replace(/^0/,'')*60);
  console.log("分钟转换后的数据类型"+typeof(ospan[0].innerHTML.replace(/^0/,'')*60));
  console.log("秒数："+ospan[1].innerHTML.replace("/^0/",'')+"秒");
  console.log("秒数的数据类型"+typeof(ospan[1].innerHTML.replace("/^0/",'')));
  console.log(oremain);
  console.log("最后类型"+typeof(oremain));
##
##
##
##
*/
  if (oremain <= 0)
  {
    clearInterval(timer);
    return
  }
  oremain--;
  ospan[0].innerHTML = farmat(parseInt(oremain/60));
  oremain %= 60;
  ospan[1].innerHTML = farmat(parseInt(oremain));
}
}