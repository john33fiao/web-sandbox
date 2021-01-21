// inherit.js
// 2020-11-03

// 노드에서의 상속

function Foo(){
    console.log('Foo 함수');    // Foo 함수이기는 한데, 메서드는 없음
}

Foo.prototype = {
    bar : function(){
        console.log('Foo_bar 실행');    // Foo 함수에서 bar 메서드를 정의함
    }                                   // 야 근데 이거 아무리 봐도 제이슨 형식으로 보이지 않냐
    , bos : function(){                 // 쉼표 찍는 것 보니까 맞는 것 같은데
        console.log('Foo_bos 실행');
    }
};

function Bar (){
    console.log('Bar 함수');
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.baz = function(){
    console.log('Bar_baz 실행');
}

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();
Foo.prototype.bos();
Bar.prototype.bos();


var util = require('util');

function Bar1 (){

}

util.inherits(Bar1, Foo);

Bar.prototype.baz = function(){
    console.log('bar_baz 실행');
}

Foo.prototype.bar();
Foo.prototype.bos();
Bar1.prototype.bar();
Bar1.prototype.bos();