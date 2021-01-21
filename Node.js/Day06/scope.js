// scope.js
// 2020-10-26

// 야옹


// 스코프와 호이스팅

// 스코프와 클로저는 연결된 개념이다

// scope = 범위 -> 유효 범위!

// 자바스크립트는 함수function 레벨 스코프를 사용한다
// 함수 내에서만 유효하고 밖에서는 참조가 불가능하다

// 단, const, let 쓰면 블록 레벨 스코프도 가능하다 - 중괄호 밖으로 안나온다


// 전역 스코프 Global scope / 지역 스코프 Local scope

var global_scope = 'global';

var local_function = function (){
    var local_scope = 'goorm'; // 지역 스코프
    console.log(global_scope); // 전역 스코프 사용
    console.log(local_scope); // 지역 스코프 사용 / 함수 내에서는 당연히 사용가능
}

// console.log(local_scope); // 이러면 당연히 에러 발생

console.log(local_function.local_scope); // 이러면 실행은 되는데 없는 값이니까 당연히 undefined 뜨지

// 근데 어지간하면 전역에 변수 선언하지 마라, 다른 사람이 쓴 코드랑 충돌한다


// 유효 범위 체인 scope chain

// 안에서는 밖에 있는 거 참조 되는데, 밖에서는 안에 있는 거 못쓴다

var a = 1;

function outer(){
    var b = 2;
    console.log(a);

    function inner(){
        var c = 3;
        console.log(b);
        console.log(a);
    }

    inner();
}
outer();

console.log(a);    // 이건 된다
// console.log(b); // 여기서 에러난다
// console.log(c); // 여기도 에러난다


// 정적 범위 Lexical scope

// 어휘 범위?
// 함수를 어디서 호출했는지가 아니라, 어떤 스코프에 선언했는지에 따라 결정된다
// 그래 솔직히 아직도 이해안감

var text = 'global';

function foo (){
    console.log("foo 함수를 실행중인데, 여기서는 전역 변수를 가져올 거에요. 그런데, 전역 변수라고 해도 되나요?");
    console.log("아마 global 이라고 출력될 거에요 : " + text);
    console.log("일단 function foo()에서 찾고, 여기 없으면 전역에서 가져오니까 그래요");
}

function bar (){
    var text = 'bar';
    console.log("이번에는 bar 라고 출력될 거에요 : "+ text);
    console.log("bar 함수 안에 있어서 그래요");
    foo();
}

console.log("foo 함수 밖에 있어요");
bar();


// 호이스팅

// 끌어올리기

// 함수 안에서 변수 선언하면 어디 위치에 있든 지금 함수 위치로 가져온다
// 전역변수가 나중에 선언돼도 일단 함수에서 쓰도록 해준다...로 이해해도 되나?


function foo1(){
    console.log('foo a1 : '+a1);
    var a1 = 100;
    console.log('foo 100 a1 : ' + a1);
}

foo1();

// 선언은 가져오는데 값은 안가져온다

foo2(); // 이건 정상적으로 실행되는데, 함수는 일단 변수가 아니라서...

function foo2(){
    console.log("foo2 실행");
}

// foo3(); // 이건 에러난다 
// 변수 값은 못가져온댔잖니

var foo3 = function(){
    console.log("foo3 실행");
}

foo3(); // 이건 당연히 됨

// 결론 : 변수에 함수 넣을 거면 최상단에 선언해라