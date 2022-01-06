/* global console,alret,prompt*/
window.addEventListener('scroll',() => {
    const scrolled = window.scrollY;
    console.log(scrolled);
    if(scrolled > 50){
        document.getElementById("nav").style="background-color: rgb(26, 22, 22);animation-name: background-color;animation-delay: 0s;animation-duration: 3s;animation-iteration-count: 1;";

    }
    else{
        document.getElementById("nav").style="background-color: transparent;";
    }
    if(scrolled > 160)
        document.getElementById("body_middle").style="animation-name: A;animation-delay: 0s;animation-duration: 5s;animation-iteration-count: 1;";
    if(scrolled > 630)
        document.getElementById("end").style="animation-name: B;animation-delay: 0s;animation-duration: 5s;animation-iteration-count: 1;";
    if(scrolled > 1800)
        document.getElementById("information").style="animation-name: C;animation-delay: 0s;animation-duration: 5s;animation-iteration-count: 1;";
    });
