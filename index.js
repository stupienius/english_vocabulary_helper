let currentModel = 1;

console.log("hello");

let word = ["hello", "apple", "angry"];
let lib = document.getElementById("lib");

reload();

function reload() {
    lib.innerHTML = "";
    for (let i = 0; i < word.length; i++) {
        lib.innerHTML += `<p onclick="wordDetail()">${word[i]}</p>`;
    }
}


                                             

function print(a){
    console.log("hellow"+a);
}

function changeModel(a) {
    currentModel = a;
    console.log(a);
}