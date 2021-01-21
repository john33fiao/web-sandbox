// hellonode1.js
// 2020-10-27

// 기본 자바스크립트 부분 종료, 노드 시작
// 생각보다 오래걸렸다

var server = require('http');
var count = 0;

server.createServer(function(req, res) {                    // 서버 만들자
    res.writeHead(200, { 'Content-Type' : 'text/plain' });  // 200값 반환했고
    res.end("hello node.js! \n");                           // 요러한 텍스트 찍어줬음
    count++;
    console.log(count);                                     // 접속 발생할 때마다 카운트 하는데, 왜 두 번씩 찍히지? 콩까니?
}).listen(3000, 'localhost');                               // localhost, 3000번 포트로 들어오는 거 듣는다

console.log('Server is running at http://localhost:3000/');

var fs = require ("fs");

fs.readFile('./hello.txt', encoding = 'utf-8', function(err, data){
    if (err){
        throw err;
    }
    console.log(data + " Note.js!");
});