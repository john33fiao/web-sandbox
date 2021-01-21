// inheritance.js
// 2020-10-25

// 상속
// 생물 > 동물 > 포유류 > 사자
// 원투데이 하는 거 아니잖아

function Man(){
    this.name = "Anonymous";
    this.gender = "Man";
    this.Run = function (){
        return this.name + " is running!";
    }
    this.Sleep = function (){
        return this.name + " is sleeping!";
    }
}


// 오버라이딩

// 어라 잠깐, ES2015 부터는 클래스 선언 된다? 뭐임??

function SoccerPlayer (){
    this.base = new Man();
    this.name = "Anonymous Soccer Player";
    this.Run = function (){
        return this.base.Run();
    }
    this.Pass = function (){
        return this.name + " is passing to other player!";
    }
}

SoccerPlayer.prototype = new Man();
var player = new SoccerPlayer ();

console.log(player.name);

console.log(player.gender);

console.log(player.Run());

console.log(player.Pass());

console.log(player.Sleep());