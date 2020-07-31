var getjson = localStorage.getItem('メモ');
var obj = JSON.parse(getjson);

for (var k in obj){
    const parent = document.querySelector('#parent')
    const child = document.createElement("div");
    child.className = "child";
    child.classList.add('memotitle');
    child.textContent = k ;
    child.addEventListener('click',()=>{
        console.log("o-no")
        const parent = document.querySelector('#father')
        const child = document.createElement("div");
        child.id = "memo";
        child.classList.add('memo');
        var e = document.getElementById ('memo');
        e.value = obj[k];
        parent.appendChild(child);
        document.getElementById('memo').contentEditable = true;
    })
    parent.appendChild(child);
}

function createMemo(){
    confirm("新しく作りますか？")
}

function save(){
    confirm("セーブします")
}

document.getElementById("memo").contentEditable = true;

function reset(){
    var yorn = confirm("リセットしますか？")
    if (yorn == true){
        localStorage.removeItem("メモ")
        var array = [];
        var obj = {
            "example" : "ここにコメントを書いてください",
        };
        array.push(obj);
        var setjson = JSON.stringify(obj);
        localStorage.setItem('メモ', setjson);
        location.reload();
    }
}

var setjson = JSON.stringify(obj);
localStorage.setItem('メモ', setjson);

console.log(obj)