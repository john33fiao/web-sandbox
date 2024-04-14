console.log('-----------------------');

var express = require('express'); // 설치한 express module을 불러와서 변수 express에 담음
var app = express(); // express를 실행하여 app object 초기화
var client_id = 'SuOspqXWG1OIg7vaXrbv'; // 발급받은 client_id
var client_secret = '_DrSVXTFE9'; // 발급받은 client_secret
var fs = require('fs'); // 파일 시스템 모듈
var txt = '텍스트'; // 텍스트 변수
app.get('/search/blog', function (req, res) { // get 방식으로 /search/blog 경로에 request가 오는 경우
   var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query); // json 결과

   var request = require('request');  // request 모듈을 변수에 담음
   var options = {  // request 모듈을 이용한 request 요청
       url: api_url,  // 요청할 url
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret} // 헤더에 client_id와 client_secret을 담아 요청
    };
   request.get(options, function (error, response, body) {  //  get 방식으로 요청
     if (!error && response.statusCode == 200) {  //  요청이 성공하면
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'}); //  헤더에 json 형식으로 인코딩
       res.end(body); //  body를 response로 전달
       var obj = JSON.parse(body);  //  body를 json 형식으로 파싱
       txt = '키워드 : '+ req.query.query + ', 검색개수 : '+ obj.total + '\n';  //  텍스트 변수에 키워드와 검색개수를 담음
       fs.appendFile('keywords.txt', txt, 'utf8',   // 파일에 텍스트를 추가
       function(){console.log('키워드 : ', req.query.query, ', 검색개수 : ', obj.total);}); // 콘솔에 텍스트 출력
     } else {   // 요청이 실패하면
       res.status(response.statusCode).end(); // response에 상태코드를 담아 전달
       console.log('error = ' + response.statusCode); // 콘솔에 에러 출력
     }
   });
 });
 app.listen(3000, function () { // 3000번 포트로 서버를 열고
   console.log('http://127.0.0.1:3000/search/blog?query={키워드} app listening on port 3000!'); // 콘솔에 메시지 출력
 });