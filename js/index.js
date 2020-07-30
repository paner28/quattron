"user script";
{
    var yotugo = [1,10,19,82,148,187,208,325,346,565,943,1300,1564,1573,1606,1891,1942,2101,2227,2530,3172,3484,4378,5134,5533,6298,6721,6949,7222,7726,7969,8104,8272,8881,9784,9913,11653, 11929, 13546, 14416, 15727, 16684, 17116, 18763, 19486, 19573, 21736, 22534, 24799, 25786, 26668, 26881, 28474, 28528, 29431, 29587, 29947, 32614, 33442, 34639, 34798, 35425, 36121, 37525, 38869, 38956, 39226, 39481, 39754, 39775, 42724, 44257, 44434, 45253, 46345, 46516, 46747, 49561, 53644, 53677, 54916, 55921, 56341, 57265, 58591, 59482, 59767, 62224, 62662, 63232, 63346, 63379, 65416, 65749, 66358, 66466, 66643, 68125, 69172, 71515, 73447, 73636, 73939, 76819, 79579, 82216, 82372, 82972, 83371, 84598, 85492, 85573, 85795, 87526, 88147, 88987, 94666, 95497, 95854, 95947, 9834];

    document.getElementById('number').focus();
    const button = document.getElementById("button");

    function judge(){
        const number = Number(document.getElementById("number").value);
        if (primeNumber(number*10+1) && primeNumber(number*10+3) && primeNumber(number*10+7) && primeNumber(number*10+9)){
            alert(number + "aは4つ子素数です")
            var getjson = localStorage.getItem('図鑑');
            var obj = JSON.parse(getjson);
            if (yotugo.indexOf(number)!=-1){
                obj["No" + String(yotugo.indexOf(number)+1)]="1"
                var setjson = JSON.stringify(obj);
                localStorage.setItem('図鑑', setjson);
                console.log("ok")
            }
        }else{
            alert("4つ子素数ではありません")
        }
        document.getElementById('number').focus();
        document.getElementById('number').value = '';
    };

    function primeNumber (num) {
        if(num === 2) {
            return true;
        } else {
            for(i = 2; i < num; i++) {
                if(num % i === 0) {
                    return false;
                    break;
                }
                if(i + 1 === num) {
                    return true;
                }
            }
        }
    }

}