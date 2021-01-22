// Day03.js

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
console.log(personFullName(s)); // John Seo
console.log(personFullNameReserved(s));

// 위와 같이 하면 전역 네임스페이스 너무 많이 차지함

function makePerson(first, last){
    return {
        first : first,
        last : last,
        fullName: function(){
            return this.first + ' ' + this.last;
        },
        personFullNameReserved : function(){
            return this.last + ', ' + this.first;
        }
    };
}

var s = makePerson("John", "Seo");
console.log(s.fullName());
console.log(s.personFullNameReserved());

// this는 함수 안쪽에서 사용되면서 현재 객체 참조
// 내가 호출한 바로 그 함수를 지정
// 객체에서 . 표기나 bracket 표기법 사용한 경우 해당 객체는 this
// 호출 시 . 표기 미사용 시 this는 전역 객체 참조

// console.log(fullName()); 
// undefined

function Person(first, last){
    this.first = first;
    this.last = last;
    this.fullName = function(){
        return this.first + ' ' + this.last;
    };
    this.personFullNameReserved = function(){
        return this.last + ', ' + this.first;
    }
}
var s = new Person('John', 'Seo');

// console.log(s.fullName()); // 타입에러 난다
// 여전히 fullName() 단독 호출할 수 있는 상태임
// 매번 내부에서 2개의 함수 객체 생성 필요함 -> 얘를 객체간에 공유할 수 있음!

function personFullName(){
    return this.first + ' ' + this.last;
}
function personFullNameReserved (){
    return this.last + ', ' + this.first;
}
function Person(first, last){
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.personFullNameReserved = personFullNameReserved;
}
// 메서드 한 번 만들고, 컨스트럭터 내에서 해당 메소드 참조함

function Person(first, last){
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function(){
    return this.first + ' ' + this.last;
}
Person.prototype.personFullNameReserved = function(){
    return this.last + ', ' + this.last;
}
// Person.prototype > 모든 Person 인스턴스 간에 공유되는 객체

// Person 객체 내에 설정되지 않은 속성 접근 시, 
// Person.prototype 에 그 속성 존재하는지 확인
// 이는 this 객체를 통해 모든 인스턴스 간에 사용 가능함
// -> 이미 존재하는 객체에 메소드를 실시간 추가 가능

var s  = new Person("John", "Seo");
// s.firstNameCaps(); 
// 이러면 타입에러 난다

Person.prototype.firstNameCaps = function (){
    return this.first.toUpperCase()
};

console.log(s.firstNameCaps()); // JOHN

var s = 'John';
// s.reserved(); 
// 타입에러 난다니까

String.prototype.reserved = function (){
    var r  = "";
    for(var i = this.length -1 ; i>=0; i--){
        r+= this[i];
    }
    return r;
}

console.log(s.reserved()); // nhoJ

console.log("문자열 상수에서도 동작한대요".reserved()); // 요대한작동 도서에수상 열자문
// String 객체에 추가했기 때문

// Object.prototype -> toString() 메소드 포함
// 객체를 문자열로 나타내려 할 때 호출됨

// 그러면, 디버그 해봅시다

var s = new Person("Simon", "Willison");
console.log(s.toString()); // [object object]

Person.prototype.toString = function(){
    return '<Person : ' + this.fullName() + '>';
}
console.log(s.toString());

// 참고: avg.apply()의 첫번째 매개변수는 null 이었음
// 첫번째 인자는 this로 간주되는 객체임

// new 구현
function trivialNew(constructor, ...args){ // ...args > "rest arguments"
    var o = {}; // 빈 객체 생성
    constructor.apply(o, args);
    return o;
}

var bill = trivialNew(Person, "willam", "Orange");
var bill = new Person("willam", "Orange");
// 위와 아래는 "거의" 동일함

function lastNameCaps(){
    return this.last.toUpperCase();
}
var s = new Person("Jeong-eun","Seo");
lastNameCaps.call(s);
// 위 구문은 아래와 같음
s.lastNameCaps = lastNameCaps;
console.log(s.lastNameCaps());