// for 문 예제

console.log("----------------------------------");

function faa (){
    var arr = [];
    var inte;

    for(inte = 0; inte<3 ; inte++){ 
        arr[inte] = function (){    
            return inte;
        }
    }
    return arr;
}

var baa = faa();
console.log("faa() : " , faa()); // faa() : [ [Function], [Function], [Function] ]

// 왜 여기서 콘솔에 코드 자체가 찍히나요?

