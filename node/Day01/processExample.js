// processExample.js
// 2020-10-19

console.log('컴퓨터 환경 정보 객체---------');
console.log(process.env);

console.log('node.js 버전---------------');
console.log(process.version);

console.log('node.js 연관 프로그램들의 버전 객체---------------');
console.log(process.versions);

console.log('프로세서의 아키텍쳐 / arm, ia32, x64')
console.log(process.arch);

console.log('플랫폼 / win32, linux, sunos, freebsd, darwin');
console.log(process.platform);

console.log('메모리 사용 정보 객체');
console.log(process.memoryUsage());

console.log('현재 프로그램이 실행된 시간');
console.log(process.uptime());