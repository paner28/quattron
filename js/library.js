"user script";
{
    var yotugo = [1,10,19,82,148,187,208,325,346,565,943,1300,1564,1573,1606,1891,1942,2101,2227,2530,3172,3484,4378,5134,5533,6298,6721,6949,7222,7726,7969,8104,8272,8881,9784,9913,11653, 11929, 13546, 14416, 15727, 16684, 17116, 18763, 19486, 19573, 21736, 22534, 24799, 25786, 26668, 26881, 28474, 28528, 29431, 29587, 29947, 32614, 33442, 34639, 34798, 35425, 36121, 37525, 38869, 38956, 39226, 39481, 39754, 39775, 42724, 44257, 44434, 45253, 46345, 46516, 46747, 49561, 53644, 53677, 54916, 55921, 56341, 57265, 58591, 59482, 59767, 62224, 62662, 63232, 63346, 63379, 65416, 65749, 66358, 66466, 66643, 68125, 69172, 71515, 73447, 73636, 73939, 76819, 79579, 82216, 82372, 82972, 83371, 84598, 85492, 85573, 85795, 87526, 88147, 88987, 94666, 95497, 95854, 95947, 9834];

    const parent = document.querySelector('#parent')
    var getjson = localStorage.getItem('図鑑');
    var obj = JSON.parse(getjson);

    for(let i = 1; i < 122; i++){

        const child = document.createElement("div");
        child.className = "child";
        child.classList.add('box');
        child.textContent = "No." + i  ;

        const grandchild = document.createElement("div");
        const No = "No" + i;
        grandchild.classList.add('inner');
        if(obj[No]==1){
            grandchild.textContent = yotugo[i-1] ;
        }else{
            grandchild.textContent = "? ? ?" ;
        }

        child.addEventListener('click',()=>{
            // console.log(obj[No])
            if(obj[No]!=1){
                obj[No]="1"
                var setjson = JSON.stringify(obj);
                localStorage.setItem('図鑑', setjson);
                console.log(obj)
            }
        },{once:true})
        parent.appendChild(child);
        child.appendChild(grandchild);
    }

    function reset(){
        alert("本当にリセットしますか？")
        var array = [];
        var obj = {
        'No1': '0',
        'No2': '0',
        'No3': '0',
        'No4': '0',
        'No5': '0',
        'No6': '0',
        'No7': '0',
        'No8': '0',
        'No9': '0',
        'No10': '0',
        'No11': '0',
        'No12': '0',
        'No13': '0',
        'No14': '0',
        'No15': '0',
        'No16': '0',
        'No17': '0',
        'No18': '0',
        'No19': '0',
        'No20': '0',
        'No21': '0',
        'No22': '0',
        'No23': '0',
        'No24': '0',
        'No25': '0',
        'No26': '0',
        'No27': '0',
        'No28': '0',
        'No29': '0',
        'No30': '0',
        'No31': '0',
        'No32': '0',
        'No33': '0',
        'No34': '0',
        'No35': '0',
        'No36': '0',
        'No37': '0',
        'No38': '0',
        'No39': '0',
        'No40': '0',
        'No41': '0',
        'No42': '0',
        'No43': '0',
        'No44': '0',
        'No45': '0',
        'No46': '0',
        'No47': '0',
        'No48': '0',
        'No49': '0',
        'No50': '0',
        'No51': '0',
        'No52': '0',
        'No53': '0',
        'No54': '0',
        'No55': '0',
        'No56': '0',
        'No57': '0',
        'No58': '0',
        'No59': '0',
        'No60': '0',
        'No61': '0',
        'No62': '0',
        'No63': '0',
        'No64': '0',
        'No65': '0',
        'No66': '0',
        'No67': '0',
        'No68': '0',
        'No69': '0',
        };
        array.push(obj);
    
        var setjson = JSON.stringify(obj);
        localStorage.setItem('図鑑', setjson);
        location.reload();
    }

    var getjson = localStorage.getItem('図鑑');
    var obj = JSON.parse(getjson);

    console.log(obj)
}