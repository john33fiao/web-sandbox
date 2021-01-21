// repeat.js
// 2020-10-25
// 솔직히 양심있으니 새벽한시는 다음날로 봐야지 그치

var array = new Array();

for (var i = 0 ; i < 10 ; i++){
    array.push(i);
}

console.log(array.toString());
console.log(array);


var a = ['a','b','c','x','y','z'];
var result = '';

for (var i in a){
    result += 'index : '+ i + ' , value : '+ a[i] + '\n' ;
}

console.log(result);


// 반복문 while , do while

var i = 0;

while (i<10){
    i++;
    // console.log(i);
}

console.log(i);


var i = 0;

do {
    i++;
} while (i<10) // 이게 거짓이어도 최소 한 번은 실행
// break 역할을 담당한다고 봐도 될듯

console.log(i);