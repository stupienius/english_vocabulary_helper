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


console.log(lib);

function wordDetail() {
    console.log("index");
}

function changeModel(a) {
    currentModel = a;
    console.log(a);
}