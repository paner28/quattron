document.getElementById("memo").contentEditable = true;  

function reset(){
    alert("リセットしますか？")
    var array = [];
    var obj = {
        "1" : "",
    };
    array.push(obj);
    var setjson = JSON.stringify(obj);
    localStorage.setItem('メモ', setjson);
    location.reload();
}

var getjson = localStorage.getItem('メモ');
var obj = JSON.parse(getjson);

obj[1] = document.getElementById("memo").value;
var setjson = JSON.stringify(obj);
localStorage.setItem('メモ', setjson);

console.log(obj)