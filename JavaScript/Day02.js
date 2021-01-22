// Day02.js

// 변수명 꼬이고 해서 그냥 새 파일 만듦

function avg(...args) {
    let sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / args.length;
}

console.log(avg(1, 2, 3, 4, 5));

function avgArray(arr) {
    let sum = 0;
    for (let i = 0, j = arr.length; i < j; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(avgArray([2, 3, 4, 5]));

console.log(avg.apply(null, [2, 3, 4, 5]));

// 변수선언 어지간하면 이렇게 하자, 나중에 변수명 꼬여서 고생하기 싫으면
function avgg() {
    let arr = [5, 6, 7];
    console.log(avg(...arr));
}

avgg();

function avggg(...args) {
    let ag = function () {
        let sum = 0;
        for (let i = 0, j = args.length; i < j; i++) {
            sum += args[i];
        }
        return sum / args.length;
    }
    console.log(ag());
}

avggg(2, 2, 2, 2, 2);

// 지역 변수 숨기기
// var도 지역 변수로 사용 가능?

var a = 1;
var b = 2;

(function () {
    var b = 3;
    console.log('function 내부에서 선언한 b : ' + b);
    a += b;
})();

console.log('a : ' + a + ' / b : ' + b);

console.log('재귀함수--------');

// DOM 트리구조 다루기에 용이함?

function countChars(elm) {
    if (elm.nodeType == 3) { // 텍스트 노드인 경우?
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
    }
    return count;
}

// 거 부연설명 좀 해주고 씁시다... 너무하시네... 

// 익명 재귀함수 호출방식

var charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) {
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
})(document.body);

// 함수는 객체임, 속성 추가/변경 가능
// 함수 표현식에 제공된 이름은 함수 자체 범위에서만 유효함

console.log('사용자 정의 객체-----------');

// JS에서는 class 구문이 없고, function을 클래스로 사용함
// 프로토타입 기반 언어

function makePerson(first, last) {
    return {
        first: first,
        last: last
    }
}

function personFullName(person) {
    return person.first + ' ' + person.last;
}

function personFullNameReserved(person) {
    return person.last + ', ' + person.first;
}

var s = makePerson("John", "Seo");
personFullName(s);