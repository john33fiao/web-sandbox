// New Start
// ES2015+

if (true){
    var x = 3;
}
console.log(x);

if(true){
    const y = 3;
}

// console.log(y); // 타입 에러 발생

// 템플릿 문자열

var num1 = 1, 
num2 = 2,
result = 3;

var string1 = num1 +` 더하기 `+ num2 + `는 \'` + result + `\'`;
console.log(string1);

console.log(string2 = `${num1} 더하기 ${num2}는 '${result}'`);
