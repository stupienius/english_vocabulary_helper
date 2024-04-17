let model = 1;

class word {
    constructor(name,PoS,ch,eg){
        this.name = name;
        this.PoS = PoS;
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
const wel = document.querySelector(".welcome");
const qui = document.querySelector(".quize");
const add = document.querySelector(".add");

function changeMoled(index){
    wel.style.display = "none";
    model = index ;
    if(model === 1){
        qui.style.display = "none";
        lib.style.display = "none";
    }else if(model === 2){
        reload();
        qui.style.display = "none";
        add.style.display = "none";
    }else if(model === 3){
        lib.style.display = "none";
        add.style.display = "none";
    }
}

function reload(){
    lib.innerHTML = "";
    for(let i=0;i<words.length;i++){
        lib.innerHTML += `<p onclick="detail(${words[i]})">${words[i]}</p>`;
    }
    lib.style.display = "block";
}


                                             

function print(a){
    console.log("hello"+a);
}
