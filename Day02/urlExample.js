// urlExample.js
// 2020-10-19
// 퇴근 후 공부

// url 정보를 객체로 가져와 분석하거나, 문자열로 바꿔주는 기능
// 이거 SSL 구성할 때나, 하다못해 SEO 작업할 때 사용할 수 있겠다
// 뭐 정 아니면 크롤링-파싱할 때 쓰지 뭐
// 어차피 파이썬 쓰겠지만, node 빼먹으면 섭하잖니

// url.parse(urlStr, [parseQueryString], [SlashesDonoteHost])
// 일단 제목이라 옮겨적긴 헀는데 뭐임?
// slashesDenoteHost는 기본값이 false이기는 하대
// 어쩌라는 걸까요

var url = require('url');
// url 모듈을 가져와서 url 변수에 넣어둠

console.log(url.parse('https//naver.com'));
console.log(url.parse('http://john33fiao.ipdisk.co.kr:88'));

console.log('장난 그만 치고------------------------------------------------');
var parsedObject = url.parse(
    'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
);
console.log(parsedObject); // url 객체 정보 출력

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?query=string',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
//   }
// 야 이건 좀 개쩐다, 이거 진짜 쓸모 많겠다야

console.log(url.format(parsedObject)); // url 객체를 문자열로 출력