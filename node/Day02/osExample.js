// osExample.js
// 2020-10-19 퇴근 후 공부

// 시스템 정보를 가져올 수 있는 모듈
// 실행 환경에 따서 결과 값이 다르게 나올 수 있다

var os = require('os');

console.log('임시 저장 폴더의 위치');
console.log(os.tmpdir());

console.log('CPU의 엔디안, 바이트를 컴퓨터가 정렬하는 방법, BE/LE')
console.log(os.endianness);

console.log('호스트 이름(컴퓨터 이름)');
console.log(os.hostname);

console.log('운영체제 플랫폼');
console.log(os.type());

console.log('운영체제 아키텍쳐');
console.log(os.arch());

console.log('운영체제 버전');
console.log(os.release());

console.log('운영체제가 실행된 시간');
console.log(os.uptime());

console.log('로드 에버리지 정보를 담은 배열');
console.log('로드 에버리지라고 하지 말고, 그냥 시스템 평균 부하량이라고 했으면... 아 똑같이 이해 안갔을듯');
console.log(os.loadavg());

console.log('시스템의 총 메모리 / 가용 메모리');
console.log('시스템의 총 메모리 : '+ os.totalmem());
console.log('시스템의 가용 메모리 : ' + os.freemem());

console.log('cpu의 정보를 담은 객체' + os.cpus());

console.log('네트워크 인터페이스 정보를 담은 배열');
console.log(os.networkInterfaces());

console.log('운영체제의 개행 문자');
console.log(os.EOL);
