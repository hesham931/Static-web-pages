const rulesBox = document.getElementById("rules"),
      bodyInner = document.body.innerHTML;
let openBox = false,
    winner;

rulesBox.addEventListener("click", () => {
    if(!openBox){
        let box = document.createElement("div");
        box.className = "rulesBox";
    
        box.innerHTML = `
        <div id = "partOneBox">
            <span style = "font-weight:bold;font-size:30px;letter-spacing:5px;">rules</span>
            <img src = "icon-close.svg" alt = "close" id = "close">
        </div>
        <div>
            <img src = "image-rules.svg" alt = "rules">
        </div>
        `;
    
        document.body.insertBefore(box, document.body.children[3]);
        document.getElementById("close").addEventListener("click", removeBox, false);
        blureEveryThing();
        openBox = true;
    }
    else{
        removeBox();
    }
}, false);
function removeBox(){
    document.body.removeChild(document.getElementsByClassName("rulesBox")[0]);
    focusEveryThing();
    openBox = false;
}
function blureEveryThing() {
    document.body.style = "background-color:hsl(212, 11%, 28%)";
    document.getElementsByClassName("header")[0].style = "opacity:0.3";
    document.getElementsByClassName("game")[0].style = "opacity:0.3";
}
function focusEveryThing() {
    document.body.style = "background-color:hsl(214, 47%, 23%)";
    document.getElementsByClassName("header")[0].style = "opacity:1";
    document.getElementsByClassName("game")[0].style = "opacity:1";
}
document.getElementById("icon1").addEventListener("click",()=>{
    console.log(document.getElementById("icon1").id);
    removeGames();
    buildResult(1);
},false);
document.getElementById("icon2").addEventListener("click",()=>{
    console.log(document.getElementById("icon2").id);
    removeGames();
    buildResult(2);
},false);
document.getElementById("icon3").addEventListener("click",()=>{
    console.log(document.getElementById("icon3").id);
    removeGames();
    buildResult(3);
},false);

function removeGames(){
    document.body.removeChild(document.getElementsByClassName("triangle")[0]);
    document.body.removeChild(document.getElementsByClassName("game")[0]);
}
function buildResult(number){
    let div = document.createElement("div"),
        alt;
    if(number == 1){alt = "paper_1";}
    else if(number == 2){alt = "rock_1";}
    else{alt = "scissors_1";}
    div.style = "margin-top:100px;display:flex;justify-content:center;";
    div.innerHTML = `
        <div style = "margin-right:300px" id = "pickByUser">
            <p style = "color:white;font-size:30px">YOU PICKED</p>
            <img src = "icon-${number}.svg" alt = "${alt}">
        </div>
        <div id = "firstResult">
            <p style = "color:white;font-size:30px">THE HOUSE PICKED</p><br><br><br>
            <span style = "background-color:hsl(214, 72%, 17%);padding: 50px;border-radius: 100px;color:hsl(214, 72%, 17%);border: solid hsl(214, 72%, 17%) 15px;">dd</span>
        </div>
    `;
    document.body.insertBefore(div,document.getElementById("rules"));
    window.setTimeout(printResult,3000);
}
function printResult(){
    let ran = 1+Math.floor((Math.random()*3)),
       content = document.getElementById("firstResult");
    const userImg = document.getElementById("pickByUser").children[1].alt;
    /* const map = new Map([
        ["icon1" , "paper"],
        ["icon2" , "rock"],
        ["icon3" , "scissors"]
    ]); */
    computerImg = document.createElement("img");

    
    if(userImg == "paper_1"){
        while(ran == 1){
            ran = 1+Math.floor((Math.random()*3));
        }
        if(ran == 2){winner = "user";}
        else{winner = "computer";}
    }
    else if(userImg == "rock_1"){
        while(ran == 2){
            ran = 1+Math.floor((Math.random()*3));
        }
        if(ran == 3){winner = "user";}
        else{winner = "computer";}
    }
    else{
        while(ran == 3){
            ran = 1+Math.floor((Math.random()*3));
        }
        if(ran == 1){winner = "user";}
        else{winner = "computer";}
    }

    
    content.innerHTML = `
        <p style = "color:white;font-size:30px">THE HOUSE PICKED</p>
        <img src = "icon-${ran}.svg" id = "icon_${ran}">
    `;


    setTimeout(showWinner,2000);
}
function showWinner(){
    "use strict";
    console.log(`from showWinner function and the winner : ${winner}`);

    let box = document.createElement("div"),
        result;


        box.className = "resultBox";

        if(winner == "user"){result = "you win";}
        else{result = "you lose";}
    
        box.innerHTML = `
        <div id = "partOneBox">
            <span style = "font-weight:bold;font-size:60px;letter-spacing:5px;text-align:center">${result}</span>
        </div>
        <div>
            <button id = "playAgain">play again</button>
        </div>
        `;
        document.body.insertBefore(box, document.body.children[3]);
        // console.log(document.getElementById("playAgain"));
        const refreshButton = document.getElementById("playAgain");
        if(winner == "user"){console.log("green");refreshButton.style = "background-color:green"}
        else{console.log("red");refreshButton.style = "background-color:red"}
        refreshButton.addEventListener("click",refresh,false);
}
function refresh(){
    window.open("https://trusting-austin-836656.netlify.app/","_self",null,false);
}
