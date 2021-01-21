// bar.js
// 2020-10-19

// 망, 함 변수 중에서 이번에는 '함' 부분인듯
// 헛소리입니다 무시하세요

var square = require('./square.js');            // square 함수는 square.js 파일을 필요로 합니다
// ES6 문법으로 하면
// import square from './square.js';
// square.js 파일에서 square 모듈을 가져온다

// square 변수에 square.js 파일에 있는 함수를 지정
// 변수가 바로 함수로 사용됨
// 함수 뿐 아니라 속성도 지정할 수 있음 - getter/setter 대체 목적으로 이용 가능해보임

var mySquare = square(2);                       // mySquare 변수에 square(2); 함수 실행한 값을 지정합니다
console.log('폭이 2인 정사각형의 넓이는 ' + mySquare.area() + '입니다.');   // 계산값 표출
// 아 잠깐, 여기서 area는 이미 return 안에 JSON 객체로 들어가있어서 사용이 가능한 건가? 
// 일단 지금 당장은 넘어가자, 질문할 사람이 음슴
// 나중에 생코에 올려야겠다