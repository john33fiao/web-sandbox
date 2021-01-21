// groomLesson.js
// 2020-10-23
// 구름 에듀 홈페이지에 있는 강의로 다시 시작합니다. 
// 좀 강의 시작을 했으면 마무리를 지어주세요... 기초를 몇 번째 하는 거야 정말


// JS 기본 문법

// 형변환

var i = 1;
var ch = "a";
console.log(i+ch);
ch = 1;
console.log(i+ch);


// 프로토타입 기반 OOP

var person = {name : "John Seo", age : 24}
// JSON 형식으로 객체 생성
console.log(person);

person.height = 187;
// JSON 객체에 추가 속성 부여
console.log(person);


// 실행 시 평가

// eval() 함수?
// 문자열을 코드로 인식해주는 함수
// 이거 인젝션 취약점 될 것 같은데? 

eval("var a=1, b=2;");
console.log(a, b);


//고차 함수

// 함수 자체를 인자로 가지거나, 함수를 반환하는 함수
// 아 그래 모듈을 변수안에 넣는 거 좀 신기하긴 하지

var ho_func = function (param_func) {param_func(); };
ho_func(function () {console.log("hello"); }) ;