let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtl = document.createElement("button");
    delBtl.innerText = "Delete";
    delBtl.classList.add("Delete")

    item.appendChild(delBtl);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value ="";
});


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let ListItem = event.target.parentElement;
        ListItem.remove();
        console.log("Deleted !");
    }
});

