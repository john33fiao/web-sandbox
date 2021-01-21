// cunstructor.js
// 2020-10-25

// 생성자 함수
// 객체를 생성할 때 최초로 호출되는 함수

function SoccerPlayer(){
    this.position = "Foward";
}
var VanPersie = new SoccerPlayer();
console.log(VanPersie.position);

function SoccerPlayer(name, position){
    this.name = name;
    this.position = position;
    this.whatIsYourName = function(){
        return "My name is "+ this.name;
    };
    this.whatIsYourPosition = function (){
        return "My position is " + this.position;
    };
}

var player = new SoccerPlayer("Park Ji Sung", "Wing Forward");

console.log(player.whatIsYourName());
console.log(player.whatIsYourPosition());

player.constructor;

var player2 = new player.constructor("Koo Ja Cheol");
console.log(player2.name);


// constructor 속성
// 객체 생성하면 일단 포함하는 속성
// 어떤 객체를 참조했는지에 대한 정보 

console.log(player instanceof SoccerPlayer);

console.log(player instanceof Object);


// 내장형 객체
// Object , Number , Array , String , Boolean , Function
// RegExp : 정규식
// Math : 수학
// Date : 날짜/시간
// Error : 에러처리