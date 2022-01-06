let inputBar = document.getElementById("searchBar"),
    optionDiv = document.getElementById("options"),
    select =document.getElementsByClassName("select"),
    searchList = document.getElementById("searchList"),
    arrow = document.getElementById("arrow"),
    arrayList = new Array(),
    index = 0;
const optionsArray = [
    [document.getElementById("option1")],
    [document.getElementById("option2")],
    [document.getElementById("option3")],
    [document.getElementById("option4")],
    [document.getElementById("option5")],
    [document.getElementById("option6")],
    [document.getElementById("option7")],
    [document.getElementById("option8")],
    [document.getElementById("option9")],
    [document.getElementById("option10")]
];
const contentOfOptionsArray = [
          ["frontEnd","senior","html","css","javaScript"],
          ["fullStack","midweight","python","react"],
          ["frontEnd","junior","react","sass","javaScript"],
          ["frontEnd","junior","css","javaScript"],
          ["fullStack","midweight","javaScript","sass","ruby"],
          ["backEnd","junior","ruby","roR"],
          ["frontEnd","junior","html","sass","javaScript"],
          ["frontEnd","junior","vue","javaScript","sass"],
          ["fullStack","midweight","javaScript","django","python"],
          ["frontEnd","junior","react","sass","javaScript"],
        ];
arrow.addEventListener("click" , getTop , false);
inputBar.addEventListener("mouseover" , showOptions , false);
inputBar.addEventListener("mouseleave" , removeText , false);
inputBar.addEventListener("keyup" , putText , false);
function getTop(){
    window.scrollTo({
        top: document.getElementById("topOfPage"),
        left: 0,
        behavior: 'smooth'
      });
};
function putText(){
    inputBar.innerHTML = "Fetch what you want from the list below please , thank you for using \'Programming Jobs\'.";
}
function removeText(){
    inputBar.innerHTML = "Choose your donation area to find the best job opportunity.";
}
function showOptions(){
    "use strict";
    inputBar.innerHTML = "Fetch what you want from the list below , thank you for using \'Programming Jobs\'.";
    optionDiv.classList.remove("display");
    optionDiv.classList.remove("optionHide");
}
/************************************************* */
for(var i = 0 ; i < 16 ; i++){
    select[i].addEventListener("click" , setOption , false);
}
function setOption(){
    let p = document.createElement("p"),
        img = document.createElement("img"),
        text = document.createTextNode("");

    img.src = "icon-remove.svg";
    img.alt = "removeIcon";

    switch(this.textContent){
        case "html":text.textContent = "html";img.id = "htmlIcon";p.id = "htmlP";arrayList[index] = "html";break;
        case "css":text.textContent = "css";img.id = "cssIcon";p.id = "cssP";arrayList[index] = "css";break;
        case "javaScript":text.textContent = "javaScript";img.id = "javaScriptIcon";p.id = "jsP";arrayList[index] = "javaScript";break;
        case "fullStack":text.textContent = "fullStack";img.id = "fsIcon";p.id = "fsP";arrayList[index] = "fullStack";break;
        case "frontEnd":text.textContent = "frontEnd";img.id = "feIcon";p.id = "feP";arrayList[index] = "frontEnd";break;
        case "backEnd":text.textContent = "backEnd";img.id = "beIcon";p.id = "beP";arrayList[index] = "backEnd";break;
        case "senior":text.textContent = "senior";img.id = "senIcon";p.id = "senP";arrayList[index] = "senior";break;
        case "junior":text.textContent = "junior";img.id = "jenIcon";p.id = "jenP";arrayList[index] = "junior";break;
        case "midweight":text.textContent = "midweight";img.id = "miIcon";p.id = "miP";arrayList[index] = "midweight";break;
        case "python":text.textContent = "python";img.id = "pIcon";p.id = "pP";arrayList[index] = "python";break;
        case "react":text.textContent = "react";img.id = "rIcon";p.id = "rP";arrayList[index] = "react";break;
        case "sass":text.textContent = "sass";img.id = "sIcon";p.id = "sP";arrayList[index] = "sass";break;
        case "ruby":text.textContent = "ruby";img.id = "ruIcon";p.id = "ruP";arrayList[index] = "ruby";break;
        case "roR":text.textContent = "roR";img.id = "roIcon";p.id = "roP";arrayList[index] = "roR";break;
        case "vue":text.textContent = "vue";img.id = "vuIcon";p.id = "vuP";arrayList[index] = "vue";break;
        case "django":text.textContent = "django";img.id = "dIcon";p.id = "dP";arrayList[index] = "django";break;
    }
    img.addEventListener("click" , deleteSelect , false);
    p.appendChild(text);
    p.appendChild(img);
    if(document.getElementById(p.id)){
        alert("You already choose this field from the list !!");
    }
    else{
        searchList.appendChild(p);
        index++;
        enableSearch(text.textContent);
    }
    optionDiv.classList.add("optionHide");
};
function enableSearch(element){
    for(let i = 0 ; i < 10 ; i++){
        if(contentOfOptionsArray[i].indexOf(element) === -1)
            optionsArray[i][0].style.display = "none";
    }
}
function disEnableSearch(element){
    if(window.innerWidth <= 991){
        for(let i = 0 ; i < 10 ; i++){
            if(contentOfOptionsArray[i].indexOf(element) === -1)
                optionsArray[i][0].style.display = "block";
        }
    }
    else{
        for(let i = 0 ; i < 10 ; i++){
            if(contentOfOptionsArray[i].indexOf(element) === -1)
                optionsArray[i][0].style.display = "flex";
        }
    }
    for(let i = 0 ; i < arrayList.length ; i++){
        enableSearch(arrayList[i]);
    }
}
/********************************************************************* */
function deleteSelect(){
    if(confirm("Do you want to delete this field from your list??")){
         index--;
        switch(this.id){
            case "htmlIcon":searchList.removeChild(document.getElementById("htmlP"));arrayList.splice(arrayList.indexOf("html"),1);disEnableSearch("html");break;
            case "cssIcon":searchList.removeChild(document.getElementById("cssP"));arrayList.splice(arrayList.indexOf("css"),1);disEnableSearch("css");break;
            case "javaScriptIcon":searchList.removeChild(document.getElementById("jsP"));arrayList.splice(arrayList.indexOf("javaScript"),1);disEnableSearch("javaScript");break;
            case "fsIcon":searchList.removeChild(document.getElementById("fsP"));arrayList.splice(arrayList.indexOf("fullStack"),1);disEnableSearch("fullStack");break;
            case "feIcon":searchList.removeChild(document.getElementById("feP"));arrayList.splice(arrayList.indexOf("frontEnd"),1);disEnableSearch("frontEnd");break;
            case "beIcon":searchList.removeChild(document.getElementById("beP"));arrayList.splice(arrayList.indexOf("backEnd"),1);disEnableSearch("backEnd");break;
            case "senIcon":searchList.removeChild(document.getElementById("senP"));arrayList.splice(arrayList.indexOf("senior"),1);disEnableSearch("senior");break;
            case "jenIcon":searchList.removeChild(document.getElementById("jenP"));arrayList.splice(arrayList.indexOf("junior"),1);disEnableSearch("junior");break;
            case "miIcon":searchList.removeChild(document.getElementById("miP"));arrayList.splice(arrayList.indexOf("midweight"),1);disEnableSearch("midweight");break;
            case "pIcon":searchList.removeChild(document.getElementById("pP"));arrayList.splice(arrayList.indexOf("python"),1);disEnableSearch("python");break;
            case "rIcon":searchList.removeChild(document.getElementById("rP"));arrayList.splice(arrayList.indexOf("react"),1);disEnableSearch("react");break;
            case "sIcon":searchList.removeChild(document.getElementById("sP"));arrayList.splice(arrayList.indexOf("sass"),1);disEnableSearch("sass");break;
            case "ruIcon":searchList.removeChild(document.getElementById("ruP"));arrayList.splice(arrayList.indexOf("ruby"),1);disEnableSearch("ruby");break;
            case "roIcon":searchList.removeChild(document.getElementById("roP"));arrayList.splice(arrayList.indexOf("roR"),1);disEnableSearch("roR");break;
            case "vuIcon":searchList.removeChild(document.getElementById("vuP"));arrayList.splice(arrayList.indexOf("vue"),1);disEnableSearch("vue");break;
            case "dIcon":searchList.removeChild(document.getElementById("dP"));arrayList.splice(arrayList.indexOf("django"),1);disEnableSearch("django");break;
        }
    }
}
window.addEventListener("scroll",scrolledAnimation,false);
function scrolledAnimation(){
    let scrolled = window.scrollY;
    if(scrolled > 500){
        arrow.classList.add("arrowOption");
    }
    else{
        arrow.style = "visibility: hidden";
        arrow.classList.remove("arrowOption");
    }

    option1.classList.add("animation");
    if(window.innerWidth <= 991){
        option2.classList.add("animation");
        setInterval(()=>{
            for(var i = 2 ; i < optionsArray.length ; i++){
                optionsArray[i][0].classList.add("animation");
            }
        },5000);
    }
    else{
        setInterval(()=>{
            for(var i = 1 ; i < optionsArray.length ; i++){
                optionsArray[i][0].classList.add("animation");
            }
        },2000);
    }
     if(scrolled === 0){
        for(var i = 0 ; i < optionsArray.length ; i++){
            optionsArray[i][0].classList.remove("animation");
        }
    }
}
