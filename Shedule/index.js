const formInput = document.querySelector("form"),
      list = document.getElementsByClassName("list")[0],
      des = document.getElementById("des"),
      select = document.getElementById("selectGroup"),
      res = document.getElementById("response");
let   i = 0,
      closedList = new Array(),
      mapOfItems = new Map();



window.addEventListener("load" , () => {
    if(localStorage.length != 0){
        const keys = Object.keys(localStorage);
        for(let key of keys){
            mapOfItems.set(key , JSON.parse(localStorage.getItem(key)));
        }
        for(let [key,element] of mapOfItems.entries()){
            if(key != "closedList"){
                const{id,des,select,res} = element;
                buildIssue(des,select,res,id);
            }
        }
        /************************************************************************* */
        let items = document.getElementsByClassName("listBody"),
            list = JSON.parse(localStorage.getItem("closedList"));
        for(let i=0;i<items.length;i++){
            if(list.indexOf(items[i].children[0].children[0].innerHTML) != -1){
                items[i].children[0].innerHTML += `
                <span style="background-color:green;color:white;padding:20px;border-radius: 15px;float: right;">clossed</span>
                `;
                items[i].removeChild(items[i].children[1]);
                disable(items[i]);
            }
        }
        /************************************************************************* */
    }
},false);



formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    if(des.value == "" && res.value == ""){
        alert("fill the fields please!");
        des.style = "border:solid red 10px";
        res.style = "border:solid red 10px";
    }
    else if(des.value == "" || res.value == ""){
        if(des.value == ""){
            alert("fill the description field please!");
            des.style = "border:solid red 10px";
        }
        else if(res.value == ""){
            alert("fill the responsible field please!");
            res.style = "border:solid red 10px";
        }else{
            des.style = "border:none";
            res.style = "border:none";
            buildIssue(des.value,select.value,res.value);
            clearFileds();
        }
    }
    else{
        let id = 1;
        id = Math.floor(id + (Math.random()*1000));
        

        des.style = "border:none";
        document.getElementById("response").style = "border:none";
        localStorage.setItem(`item${id}` , JSON.stringify({
            "id":id,
            "des":des.value,
            "select":select.value,
            "res":res.value
        }));
        buildIssue(des.value,select.value,res.value,id);
        clearFileds();
    }
},false);




function clearFileds(){
    des.value = "";
    res.value = "";
}




function buildIssue(des,select,res,id){
    const mainDiv = document.createElement("div");

    mainDiv.className = "listBody";
          mainDiv.innerHTML = `
            <p id = "headerOfList">
                issue id :&nbsp;&nbsp;&nbsp; <span id="id">${id}</span>
            </p>
            <span style = "background-color:red;border-radius:30px;padding:10px;color:white">open</span>
            <br><br><br>
            <p id = "textIssue">${des}</p>
            <p id = "info">
                <span id = "sev"><i class="far fa-clock"></i>&nbsp;${select}</span>&nbsp;&nbsp;&nbsp;
                <span id = "person"><i class="fas fa-user-check"></i>&nbsp;${res}</span>
            </p>
            <button class = "closeButton" style="background-color:orange;border:solid orange 10px;">close</button>
            <button class = "deleteButton" style="background-color: red;border:solid red 10px;">delete</button>
          `;
          document.getElementById("autharized").before(mainDiv);
          document.getElementsByClassName("closeButton")[i].addEventListener("click" , enableCloseList,false);
        //   document.getElementsByClassName("closeButton")[i].addEventListener("mouseenter", disable ,false);
          document.getElementsByClassName("deleteButton")[i].addEventListener("click",deleteItem,false);
          i++;
}






function enableCloseList(){
    const k = this.parentElement;
    if(k.children[1].innerHTML == "open"){
        k.children[0].innerHTML += `
        <span style="background-color:green;color:white;padding:20px;border-radius: 15px;float: right;">clossed</span>
        `;
        if(closedList[0] == null){
            console.log("from if");
            closedList.push(k.children[0].children[0].innerHTML);
            console.log(closedList);
        }
        else{
            console.log("from else");
            let currentList = new Array();
            currentList = JSON.parse(localStorage.getItem("closedList"));
            currentList.push(k.children[0].children[0].innerHTML);
            console.log(currentList);
            closedList = currentList;
        }
        
        
        localStorage.setItem("closedList",JSON.stringify(closedList));
        k.removeChild(k.children[1]);
        disable(k);
    }
}

function disable(e) {
    e.children[6].style = "cursor: not-allowed;";
    e.children[6].style.animation = "none";
}


function deleteItem(){
    console.log(this.parentElement.children[0].children[0].innerHTML);
    console.log(localStorage.removeItem(`item${this.parentElement.children[0].children[0].innerHTML}`));
    document.body.removeChild(this.parentElement);
    i--;
}
/*
three is a problem occuer when reload more and more with clossed label
 */