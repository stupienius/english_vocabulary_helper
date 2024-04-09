let model = 1;

let word = ["hello","apple","angry"];
let lib = document.getElementById("lib");
reload();


function reload(){
    for(let i=0;i<word.length;i++){
        lib.innerHTML += `<p onclick = "wordDetail('${word[i]}')">${word[i]}</p>` ;
    }
}

console.log(lib);

function wordDetail(index) {
    console.log(index);
}

// function modelChange(a){
//     model = a;
//     console.log(a);
// }