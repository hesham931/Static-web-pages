/* global console,alret,prompt*/
window.addEventListener('scroll',() => {
    const scrolled = window.scrollY;
    console.log(scrolled);
    if(scrolled >= 100){
        document.getElementById("header").style="background-color:#045089;animation-name: header_fixed;animation-duration: 2s;animation-delay: 0s;";
        document.getElementById("logo").style="color:white";
        for(var i = 1;i<=4;i++)
        document.getElementById("nav"+i).style="color:white";
        var active = document.getElementsByClassName("active");
        for(var i = 0 ; i < 4 ; i++){
            if(active[i].className.indexOf("border") > -1)
            break;
        active[i].className += " border";
    }
        }
        else{
        document.getElementById("header").style="background-color:transparent;";
        document.getElementById("logo").style="color:black";
        for(var i = 1;i<=4;i++)
        document.getElementById("nav"+i).style="color:black";
        for(var i = 0 ; i < 4 ; i++)
        document.getElementsByClassName("active")[i].className = "nav-link active";
        }
    if(scrolled >= 250)
    document.getElementById("images").style="animation: watch_images 0.5s ease-out 0s 1 normal forwards;";
    if(scrolled >=700)
    document.getElementById("arrow").style="display: inline;";
    else
    document.getElementById("arrow").style="display: none;";
    if(scrolled >= 1467){
        document.getElementById("i1").style="animation: i1 2s linear 0s 1 alternate forwards;position: relative;";
        document.getElementById("i2").style="animation: i2 2s linear 0s 1 alternate forwards;position: relative;";
        document.getElementById("i3").style="animation: i3 2s linear 0s 1 alternate forwards;position: relative;";
    }
    if(scrolled >= 3000)
    document.getElementById("powerfull_health_tool").style="animation: watch_images 0.5s ease-out 0s 1 normal forwards;";
    });