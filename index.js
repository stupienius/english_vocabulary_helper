let model = 1;

let lib = ["hello","apple","angry"];
let word = document.getElementById("word");
reload();


function reload(){
    for(let i=0;i<lib.length;i++){
        console.log(lib[i]);
        word.innerHTML += lib[i]+ "<br>" ;
    }
}


