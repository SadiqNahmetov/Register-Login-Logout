$(function (){
  
    let scrollSection = document.getElementById("scrol-area")
     
    window.onscroll = function () {scrollFunction()};
  
    function scrollFunction(){
      if (document.body.scrollTop > 155 || document.documentElement.scrollTop > 155) {
        scrollSection.style.top = "0";    
     } else {
        scrollSection.style.top = "-77px";
        scrollSection.classList.remove("visibl");
     }
    }
  
  
  });