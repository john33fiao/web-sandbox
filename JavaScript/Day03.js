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

console.log(fullName());