var pageHeight = window.innerHeight;

document.querySelector("nav").style = "height:"+pageHeight+"px";

document.getElementById("resource1").onclick = function(){
    window.scrollTo({
        left:0,
        top:document.getElementById("top"),
        bottom:document.getElementById("top"),
        behavior:"smooth"
    });
};