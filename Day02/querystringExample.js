// querystringExample.js
// 2020-10-19
// 퇴근 후 공부 마무리

// url 객체의 쿼리와 관련된 모듈
// url 모듈 자체에서 두번째 인자 값 조절로 어떻게 해결할 수 있어서, 큰 쓸모는 없을 수 있음

// 구글에 querystring 검색하니까 q=querystring&oq=querystring&aqs=chrome..69i57j0l7.1034j0j7&sourceid=chrome&ie=UTF-8 붙음

var querystring = require('querystring');

// var qStr = 'q=querystring&oq=querystring&aqs=chrome..69i57j0l7.1034j0j7&sourceid=chrome&ie=UTF-8';
var qStr = 'where=nexearch&query=querystring&sm=top_hty&fbm=1&ie=utf8';
var qObj = querystring.parse(qStr);
var qObj2 = querystring.parse(qStr, '&', '=', { maxKeys : 3 }) ;
// 구분 문자열이 다를 경우 &, = 대신 다른 문자 넣으면 됨
// 근데 어지간하면 저거 두 개 쓰니까 상관 없지 않음? 
// 아 어디 이상한 개발자는 다른 형식으로 쿼리 넣을 수도 있지 왜 애 기를 죽이고 그래요
// maxKey 3 넣어주면 값을 3개만 가져옴 / 옵션이니까 생략해도 됨

console.log('쿼리 값을 전부 가져와봅시다');
console.log(qObj); 
console.log(querystring.stringify(qObj));
console.log(querystring.stringify(qObj, 
    ' ; ' ,
    ' , ' , 
    ' -> '
    )
);

console.log('쿼리 값을 3개만 가져와봅시다');
console.log(qObj2);
console.log(querystring.stringify(qObj2));
console.log(querystring.stringify(qObj2));
console.log(querystring.stringify(qObj2, ' ; ' ,  ' -> '));

// 좋아 얘도 SEO 작업 할 때나 파싱할 때 간단하게 쓸 수 있겠다
// 하다못해 복잡한 URL 있을 때도 대충 정리는 가능할듯, JSON으로 만들어 주는 거니까

// pasrse -> 객체로 바꿔줌
// stringfy -> 문자열로 바꿔줌

// 근데 어째 이 강의 자체가 미완성인 것 같다? 그냥 리디북스에 있는 책 보실?
// util 모듈부터는 미완성이라고 표시된게 꽤 많네... 게다가 6년 전 강의이기도 하고