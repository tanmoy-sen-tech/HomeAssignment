function scrollToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}
function scrollTopFunction(){var o=document.body.scrollTop,n=document.documentElement.scrollTop,l=document.getElementById("scrollButton");l.style.display=300<o||300<n?"block":"none"}window.onscroll=function(){scrollTopFunction()};