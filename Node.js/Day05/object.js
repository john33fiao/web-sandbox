// object.js
// 2020-10-25

// 자바스크립트 OOP는 자바 OOP랑 약간 개념이 다르다
// 자바스크립트는 클래스 기반이 아니라 프로토타입 기반 언어이기 때문

// 프로토타입 하면 XD나 프로토파이 같은 거 생각하는데, 일단 접어두고 마저 갑시다

var parkJiSung = {
    name : "Park Ji Sung", 
    height : 178, 
    weight : 70, 
    position : "RW",
    team : "Queen's Park Rangers"
};

console.log(parkJiSung.team);

// 여기까지가 클래스 방식으로 객체 만든 것


// 자바스크립트 객체

// 보통 첫글자를 대문자로 쓰면 객체라는 뜻이다

var SoccerPlayer = function () {};

SoccerPlayer.prototype = {
    name : String,
    age : Number,
    height : Number,
    weight : Number,
    position : String,
    team : String
};

var park_ji_sung = new SoccerPlayer();

park_ji_sung.name = "Park Ji Sung";
park_ji_sung.age = 31;
park_ji_sung.height = 178;
park_ji_sung.weight = 70;

console.log(park_ji_sung);

// JS 에서는 클래스 개념이 존재하지 않는다
// 근데 사용법은 어째 비슷해보이는데... 


// 캡슐화
// 이건 많이 써봐서 알지? 
// 뭐 근데 은닉해놔도 바이트코드 디컴파일해서 쓰는 미친사람들도 있긴 하더라


// 집합
// 이거는 OOP 설명할 때 판때기랑 벽돌 설명하는 거랑 같음


