// closure.js
// 2020-10-26

// 외부 함수 실행 끝나면 내부에서 외부 함수의 변수에 접근 불가
// 근데 외부함수 소멸되도 함수의 변수에 접근 가능한 구조 = 클로저

var num = 1;
function foo(){
    var num = 2;

    function bar (){ // 클로저 함수
        console.log(num);
    }
    return bar;
}

var baz = foo();
baz();


function fac(arg){
    var num = function(){
        return arg; // arg++ 값을 참조해서 가져온다
    }
    arg++;
    return num;
}
// 아니 거 예제 함수/변수명을 f, m, n 으로 하면 써놓고도 안보이잖아요 너무하시네 진짜
// 왜 되나 한참 고민했다 아오

var mFunc = fac(123);
console.log(mFunc());


// for 문 예제

console.log("----------------------------------");

function faa (){
    console.log("익명함수 faa 실행했어요");
    var arr = [];   // 배열 arr 선언
    var inte;       // 변수 inte 선언
    console.log("변수 선언 완료했습니다");

    for(inte = 0; inte<3 ; inte++){ // inte는 0~3으로
        console.log("for문 함수 위쪽");
        arr[inte] = function (){    // arr[0] = 0
            console.log("for문 안에 있는 함수");
            console.log("inte : "+ inte );      // 굳이 배열까지 안넣으셨어도 되는 것 아니었습니까
            return inte;
        }
    }
    console.log("faa 함수 종료");
    return arr;     // arr 배열 반환
}

console.log("bai 변수 선언");
var bai = faa();    // bai 변수는 arr 배열을 반환하는 함수


console.log("faa() : " + faa()); // [ [Function], [Function], [Function] ]
console.log("faa()[0] : " + faa()[0] ); // [Function]
console.log("bai : " +  bai ); // [ [Function], [Function], [Function] ]

console.log("bai[0] : " + bai[0]() );    // 3 = 최종 inte 값
console.log("bai[1] : " + bai[1]() );    // 3
console.log("bai[2] : " + bai[2]() );    // 3
// arr[0]이 아니라, 이미 for문 실행 끝나고 값을 가져오기 때문 -> arr[3]
// var inte = 3

// 여기서부터 슬슬 이해 진짜로 안가는뎁쇼;;; 

console.log("--------------------------");

function fb(){  // 익명함수 fb
    console.log("익명함수 fb 실행했어요");
    var ab = [];    // 
    var ib;

    for (ib = 0 ; ib < 3 ; ib++){
        ab[ib] = (function(x){
            return function(){
                return x;
            }
        })(ib);
    }
    return ab;
}

var bb = fb();  

console.log( bb[0]() );
console.log( bb[1]() );
console.log( bb[2]() );

// 여기까지 해서 자바스크립트 기본은 끝
// 솔직히 클로저 개념은 한 20%정도밖에 이해 못 한 것 같다