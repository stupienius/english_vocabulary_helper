let model;

class word {
    constructor(name,ch,eg){
        this.name = name;
        this.ch = ch;
        this.eg = eg;
    }
}

let words = ["hello","apple","banana","tiger",
            "elephant","ant","height","good","nice",
            "great","fun","hi","content","finally","last",
            "apple","banana","tiger",
            "elephant","ant","height","good","nice",
            "great","fun","hi","content","finally","last"];

const lib = document.querySelector(".lib");
const list = document.querySelector(".list");

const wel = document.querySelector(".welcome");
const qui = document.querySelector(".quize");

const add = document.querySelector(".add");
const w = document.getElementById("w");
const ch = document.getElementById("ch");
const eg = document.getElementById("eg");


add.addEventListener("submit",function(){
    w.value = "";
    ch.value ="";
    eg.value ="";

});


function changeMoled(index){
    wel.style.display = "none";
    model = index ;
    if(model === 1){
        qui.style.display = "none";
        lib.style.display = "none";
        add.style.display = "block";
    }else if(model === 2){
        qui.style.display = "none";
        add.style.display = "none";
        reload();
    }else if(model === 3){
        lib.style.display = "none";
        add.style.display = "none";
        test();
    }
}

function reload(){
    list.innerHTML = "";
    for(let i=0;i<words.length;i++){
        list.innerHTML += `<p onclick="detail('${words[i]}')">${words[i]}</p>`;
    }
    console.log(list);
    lib.style.display = "block";
}

function detail(index){
    lib.style.display = "none";
    add.style.display = "none";
    qui.style.display = "none";
    console.log(index);
}

function test(){
    qui.style.display = "block";
    let index = Math.floor(Math.random()*words.length);
    console.log(index);
}
