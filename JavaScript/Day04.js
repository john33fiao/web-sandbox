// Day04.js
// 근데 솔직히 매일 하나씩 만드는 거 아닌데 Day로 써도 되나 모르겠네
// 뭐 어쩌라고 내맘이지

// 내장 함수

// 중첩 함수는 부모 함수 범위의 변수에 접근 가능하므로 중요함

function parentFunc(){
    var a = 1;

    function nestFunc(){
        var b = 4; // 얘는 부모함수가 접근 못함
        return a+b;
    }
    return nestFunc(); // 5
}

console.log(parentFunc());

// 부모함수 내에서는 변수 공유 가능
// 그래 이게 맞다니까

console.log('클로져----------');
// 닫힌 주머니

// 퀴즈, 다음 함수는 뭘까요?
// 주석으로 답해봅시다

function makeAdder(a){  // a를 받아서 function(b)를 반환하는 메소드
    return function(b){ // b를 받아서 a+b를 반환하는 메소드
        console.log('a: '+a + ' / b: '+b);
        return a+b;
    };
}
var add5 = makeAdder(5);    // add5 라는 함수 객체 생성, a=5 갖고있음
var add20 = makeAdder(20); 
console.log(add5(6));   // 5+6 ?
console.log(add20(7));  // 20+7 ?

// 왜 b에다가 지맘대로 값을 넣어버림?

console.log(makeAdder(10)(100));
// 어라 이건 또 된다? 
// makeAdder(10)의 리턴이 function(b)라서, b에 5를 넣었다고 이해해도 되나?

