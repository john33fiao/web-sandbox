// Day05.js

// 메모리 누출(누수?)

// JS에도 가비지컬렉터 있기는 함
// 브라우저가 다 알아서 해 주실 거야ㅠㅠ

// IE의 경우 자기 자신을 참조(순환 참조)하는 경우 발생

function leakMemory(){
    var el = document.getElementById('el');
    var o = {'el' : el};
    el.o = o;
}

// 위와 같이 쓰면, el과 o에 의해 사용된 메모리 반환 불가능함

// 참조 여러개 하면(그래요 스파게티 그거) 쉽게 발생함
// 클로저는 메모리 누출 일으키기 쉬움

function addHandler(){
    var el = document.getElementById('el');
    el.onclick = function (){
        this.style.backgroundColor = 'red';
    }
}
// 클릭하면 붉게 만드는 엘레멘트 설정, 근데 이거 메모리 누출도 일으킴
// JS객체(내부 함수)랑 원시 객체(el) 사이에 순환 참조

// 해결방법은 아래와 같음

function addHandler(){
    var el  = document.getElementById('el');
    el.onclick = function (){
        this.style.backgroundColor = 'red';
    }
    el = null ;  // 이렇게 쉽게 된다고???
}

// 다른 클로져 추가해도 됨

function addHandler (){
    var clickHandler = function(){
        this.style.backgroundColor = 'red'; 
    }
    (function(){ // 실행되고 바로 사라지는 내부함수
        var el = document.getElementById('el');
        el.onclick = clickHandler; // clickHandler 한테 내용 숨김
    })();
}

// window.onload 이벤트 발생하는동안 순환참조 끊어도 됨
// 많은 이벤트 라이브러리가 그렇게 동작함

// 대신 그러면 파폭1.5에서 bfcache 비활성화되니까 
// unload listener 등록하면 안됨

// 끝
// 이제 리액트 시작합시다