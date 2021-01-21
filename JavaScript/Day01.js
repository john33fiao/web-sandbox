// Day01.js

// https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript#.ea.b0.9c.ec.9a.94
// JavaScript 재입문하기
// 210121 오전.log 파일 참고

// 현재 문서 완료 후 React로 넘어갈 예정
// https://ko.reactjs.org/docs/getting-started.html
// https://ko.reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial

var ii = 0;

while(1){
    console.log(ii++);
    if(ii==10) break;
} // true 일 때만 실행함

do{
    console.log(ii);
}while(false){
    console.log("false");
} // 무조건 한 번은 실행함

for(var i=1; i<10 ; i++){
    for(var j=1; j<10; j++){
        console.log(i*j);
    }
} // for문은 쉼표가 아니라 ; 로 구분

console.log('-----------------------');

var arr = [1, 2, 3];

for (let value of arr){
    console.log(arr[value-1]);
}

console.log('-----------------------');

var obj = "hello world";

for(let property in obj){
    console.log(obj[property]);
}

console.log('-----------------------');

var lnt = (obj.length > 10) ? "10글자 초과" : "10글자 이하";
console.log(lnt);

console.log('-----------------------');
var hr = '-----------------------';
console.log(hr);

// 객체
// JS의 객체는 자바의 해시맵과 비슷함

var obj2 = new Object();
var obj3 = {};

obj2 = {
    name: "carrot",
    "for": "Max",
    details:{
        color: "orange",
        size: 12
    } 
}
console.log(obj2.details.color);
console.log(obj2["details"]["color"]);

console.log(hr);

function Person(name, age){
    this.name = name;
    this.age = age;
} 

// 객체 정의
var you = new Person('John', 24);
obj2.name = "Simon"; // dot 표기법
console.log(obj2);

obj2["name"] = "Paul"; // bracket 표기법
console.log(obj2);

obj2.for = "Mark";
console.log(obj2); // JS로 하면 구문 오류인데 node에서는 되는듯
// ...이 아니라 ES5 부터는 그냥 됨

console.log('배열 정의----------');

var arr = new Array();
arr[0] = "dog";
arr[1] = "cat";
arr[3] = "hen";
console.log(arr.length);
console.log(arr);   // [ 'dog', 'cat', <1 empty items>, 'hen' ]
console.log(arr[2]); // undefined

arr = ["개", "고양이", "닭"];
console.log(arr.length);

for (var i=0 ; i< arr.length ; i++){
    console.log(arr[i]);
}

console.log('이터러블 객체-----------');
// 반복되는 객체라는 뜻임?

for (const currentValue of arr){ // var, let 둘 다 된다
    // console.log(currentValue + ' : ' + arr[currentValue]);
    console.log(currentValue);
}

['dog', 'cat', 'hen'].forEach(function(currentValue, index, array){
    console.log('currentValue : '+currentValue);
    console.log('index : '+index);
    console.log('array : '+array);
})

arr.push('새');
console.log(arr);

console.log(arr.toString());
arr.reverse();
console.log(arr);

console.log('함수---------');

function add(x,y){
    var total = x+y;
    return total;
}

console.log(add(3, 5));

console.log(add());
console.log(add(2, 3, 4)); // x, y 이후 값은 무시됨

function add(){
    var sum = 0;
    for (var i = 0, j = arguments.length; i<j ; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add(2,3,4,5));
console.log('평균계산 함수');

function avg(){
    var sum = 0;
    for(var i=0, j=arguments.length;i<j; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(avg(2,3,4,5));

console.log('Rest 파라미터 문법');

function avg(firstValue,...args){
    // console.log(firstValue);
    // console.log(args);
    var sum = 0;
    for (let value of args){
        sum += value;
    }
    // return sum / arr.length; // arr은 어디서 온 거임? 내장임?
    // 아 그냥 문서가 오타 난 거였음, args 써야함
    // 이렇게 하면 (2+3+4) / 4 가 되기 때문에 평균은 아님

    return (firstValue + sum) / args.length; // 이래야 평균이지요
}

console.log('평균: '+avg(2,3,4,5));

function avgArray(arr){
    var sum = 0;
    for (var i = 0, j=arr.length; i<j; i++){
        sum+= arr[i];
    }
    return sum / arr.length;
}

console.log('평균: '+avgArray([3,4,5]));

console.log('--------초기화')

var arr22 = [2,3,4];

function avgg(...args) {
    var sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / args.length ;
}

console.log('111 : '+avgg.apply(null, [1,1,1]));
console.log('apply : '+avgg.apply(null, arr22));

console.log('...avg 평균: '+avgg(...arr22));

// 어디서부터 꼬였는지 모르겠으니까 일단 다시 써보자 그냥
// 꼬인 부분 찾았다, MDN 문서에 오타있었음