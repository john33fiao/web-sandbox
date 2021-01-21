// function
// 2020-10-25
// 이거까지만 하고 자자, 내일은 늦잠 잘 거임 제발

// 반환값 하나만 되기는 하는데, 여러개 하려면 배열이나 객체 반환해라

function sum (a,b){
    var c = a + b;
    return c;
}

console.log(sum(1,2));

var add = sum;
console.log(typeof add);

console.log(add(1,2));

var student = {
    name : 'John'
    , age : 20
}

console.log(student.name);

delete student.name; // 객체 속성은 삭제가능

console.log(student.name); // undefined

delete student; // 객체 삭제는 불가

delete not_exist; // 애초에 없는 거라서 삭제불가 / undefined

console.log(student.age); // 제대로 찍혀 나옴 (객체는 살아있으므로)


// 익명 함수

// 자바스크립트에서는 함수가 객체로서 취급된다
// 일회용 함수를 위해 사용된다
// 함수 표현식, 콜백, 즉시 실행할 경우 사용된다

var f = function (a) { // 변수 f 에 함수 선언
    return "이것은 익명함수입니다";
};

console.log(f()); // 변수 f를 콘솔에 표시하면, 해당 함수의 리턴값 표시


// 콜백 함수

// 특정 이벤트가 발생하면 호출되는 함수
// 함수의 인자로 함수 자체를 넘겨주면 안되나? 라는 고민을 해보자굽쇼?

function one(){
    return 1;
}

var two = function () {
    return 2;
}
function invoke_and_add (a,b){
    return a() + b();
}

console.log(invoke_and_add(one, two));


function one (){
    return 1;
}
function invoke_and_add(a,b){
    return a() + b();
}
console.log(invoke_and_add(one, function(){
    return 2;
}));