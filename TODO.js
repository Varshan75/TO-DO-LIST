function appendtaks(){
    let otask = document.getElementById("ip");
    if(otask.value == ""){
        alert("Enter a TASK");  
    }
    else{
    let itask = otask.value.trim();
    let create = document.createElement("li","br");
    create.className = "list";

    let div = document.createElement("div");
    div.className = "div";
    let buttonc = document.createElement("button");
    buttonc.className = "btc";
    buttonc.innerText = "complete";
    buttonc.onclick = function(){
        create.style.textDecoration = "line-through";
    };
    let buttond = document.createElement("button");
    buttond.className = "btd";
    buttond.innerText = "delete";
    buttond.onclick = function(){
        create.remove();
    };
    let ul = document.getElementById("task-list");
    ul.appendChild(create);
    let div1 = document.createElement("span");
    create.appendChild(div);
    div.innerText = `${itask}`;
    div.appendChild(div1);
    div1.appendChild(buttonc);
    div1.appendChild(buttond);
    otask.value = "";    
    }
}



