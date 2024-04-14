let model = 1;

class word {

}

let words = ["hello","apple","banana","tiger",
            "elephant","ant","height","good","nice",
            "great","fun","hi","content","finally","last",
            "apple","banana","tiger",
            "elephant","ant","height","good","nice",
            "great","fun","hi","content","finally",];

const lib = document.querySelector(".lib");

reload();

function changeMoled(index){
    console.log(index);
    model = index ;
    if(model === 2){
        reload();
    }else{
        lib.style.display = "none";
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
