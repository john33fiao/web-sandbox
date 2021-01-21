// global.js
// 2020-10-28


// console 객체

// log
console.log('%d + %d = %d' , 1, 2, 1+2);
console.log('%d + %d = %d' , 1, 2, 1+2 , 4);
console.log('%d + %d = %d' , 1, 2);


// time
console.time('time');

setTimeout(function(){
    console.timeEnd('time');
}, 3000);
// 오 이렇게하면 3초동안 스레드 먹는 건가 개신난다
console.log("hello 3sec");
// 아 아니구나 그냥 3초 뒤에 저 함수 실행해서 포함한 다음에 걸린시간 체크해주네


// process 객체

// 속성
console.log("프로그램의 매개변수 정보 \n", process.argv);
console.log("컴퓨터 환경과 관련된 정보 \n", process.env);
console.log("Node.js의 버전 \n", process.version);
console.log("Node.js 프로세스에서 사용하는 모듈들의 버전 \n", process.versions);
console.log("프로세서의 아키텍쳐 \n", process.arch);
console.log("플랫폼의 정보 \n", process.platform);

// 메소드
process.memoryUsage()
process.uptime()
setTimeout(
    function(){
    process.exit();
    }, 3500);
console.log('3초 뒤에 종료합니다');


// Exports 객체

 