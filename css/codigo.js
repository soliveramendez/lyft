window.onscroll=function(){scrollFunction()};

function scrollFunction(){

  if(document.body.scrolltop>30||documentElement.scrollTop> 30) {
    document.getElementById("navbar").style.background="white";
    document.getElementById("hidden").style.background="visible";
    document.getElementById("logo").style.background="asset/images/logo-pink.png";

      var x =document.getElementById("navbar1");
      var y =x.document.getElementByIdTagName("a");
      for(var i=0; i< y.length;i++){
      y[i].syle.color ="gray"
      }

  } else {
    document.getElementById("navbar").style.background="transparent";
    document.getElementById("hidden").style.background="hidden";
    document.getElementById("logo").style.background="asset/images/logo-white.png";

    var x =document.getElementById("navbar1");
    var y =x.document.getElementByIdTagName("a");
    for(var i=0; i< y.length;i++){
    y[i].syle.color ="#f2f2f2";

  }
