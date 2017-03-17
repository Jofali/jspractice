window.onload = function(){
  var oInput = document.getElementsByTagName("input");
  var oLabel = document.getElementsByTagName("label");
  var oRecheck = document.getElementById("recheck");
  var checkAll = function(){
    for(var i = 1,n = 0;i < oInput.length;i++)
        {
          oInput[i].checked && n++
        }
    oInput[0].checked = oInput.length-1 == n;
    oLabel[0].innerHTML = oInput[0].checked ? "全不选" : "全选";
      };

    oInput[0].onclick = function(){
      for(var i = 1;i < oInput.length;i++)
      {
        oInput[i].checked = this.checked;
      }
      checkAll();
    };

    oRecheck.onclick = function(){
      for(var i = 1;i < oInput.length;i++)
      {
      oInput[i].checked = !oInput[i].checked;
      }
      checkAll();
    };

    for(var i = 1;i < oInput.length;i++)
    {
      oInput[i].onclick = function(){
        checkAll();
      }
    };
}