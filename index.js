let model = 1;

let word = ["hello","apple","angry"];
let lib = document.getElementById("lib");
reload();


function reload(){
    for(let i=0;i<word.length;i++){
        lib.innerHTML += "<p>"+word[i]+"</p>" ;
    }
}


