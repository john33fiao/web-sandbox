// event.js
// 2020-11-03

// 아직 포기 안했다


// 이벤트 생성

console.log('이벤트 모듈 불러옴');
var EventEmitter = require('events');

console.log('이벤트 생성');
var custom_event = new EventEmitter();

custom_event.on('call', function(){
    console.log('이벤트 콜');
});

console.log('이벤트 발생시킴');
custom_event.emit('call');


// 이벤트 제거

console.log('이벤트 삭제함');
custom_event.removeAllListeners();

console.log('이벤트 다시 발생 시도');
custom_event.emit('call');