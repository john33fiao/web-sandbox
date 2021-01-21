// main.js
// 2020-10-27

// const { EventEmitter } = require("events");

// 비동기 이벤트

// events 모듈 사용

// 이벤트 객체 생성 - helloNode 이벤트 발생 - 전달받은 문자열을 콘솔에 출력

var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str){      // helloNode 로 문자열 전달받기 대기중
    console.log("Hello! "+ str );
});

setTimeout(function(){
    evt.emit("helloNode", "Node.js");   // helloNode 이벤트에 Node.js 문자열 전달
}, 3000);