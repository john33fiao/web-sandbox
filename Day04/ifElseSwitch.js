// ifElseSwitch.js
// 2020-10-24
// 25일 오전 12:36 이니까 24일이라고 하자

// 조건문


// if, else

var a = 3;
var result = '';

if (a > 2){
    result = 'a is greater than 2';
}else if (a == 2){
    result = 'a is 2';
}else{
    result = 'a is smaller than 2';
}

console.log(result);


// switch

a = 1;
result = '';

switch (a){
    case 1: // 여기 자료형 조심할 것 - 자동 형변환 안해주더라
        result = 'Number 1';
    break;
    case 2:
        result = 'Number 2';
    break;
    default:
       // result = "I Don't know what number";
       console.log(a);
    break;
}

console.log(result);
