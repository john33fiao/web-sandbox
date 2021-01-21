console.log('-----------------------');

var express = require('express');
var app = express();
var client_id = 'SuOspqXWG1OIg7vaXrbv';
var client_secret = '_DrSVXTFE9';
var fs = require('fs');
var txt = '텍스트';
app.get('/search/blog', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query); // json 결과

   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
       var obj = JSON.parse(body);
       txt = '키워드 : '+ req.query.query + ', 검색개수 : '+ obj.total + '\n';
       fs.appendFile('keywords.txt', txt, 'utf8', 
       function(){console.log('키워드 : ', req.query.query, ', 검색개수 : ', obj.total);});
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/search/blog?query={키워드} app listening on port 3000!');
 });