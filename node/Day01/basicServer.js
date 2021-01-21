// basicServer.js
// 2020-10-19

// node.js의 http 모듈을 변수 http로 추출
var http = require('http');

// http 모듈의 createServer 함수 호출하여 서버 생성


http.createServer(function (req, res) {
  // req : request. 웹 요청 매개변수
  // res : response. 웹 응답 매개변수

  res.writeHead(200, {'Content-Type': 'text/html'});
  // writeHead : 응답 헤더 작성
  // 200 : 응답 성공
  // text/html : html 문서

  res.end('hello world');

}).listen(1337, '127.0.0.1');
// listen : 매개변수로 포트와 호스트 지정

console.log('Server running at http://127.0.0.1/');
// 연결 성공을 콘솔에 기록