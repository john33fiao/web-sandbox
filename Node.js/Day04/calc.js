// calc.js
// 2020-10-23
// 연산자

// 사칙연산, ++/--

var a = 1;
var b = 2;
var c = 3, d= 10;

a= b+1;
console.log(a);

a = b-1;
console.log(a);

a = b*d;
console.log(a);

a = a/10;
console.log(a);

a++;
console.log(a);

a--;
console.log(a);

var str1 = "hello";
var str2 = "world";
var str3 = null;


// 문자열 연산자

str3 = str1 + " ";
console.log(str3);

str3 = str3 + str2 ;
console.log(str3);


// 할당 연산자

// +=, -=. *=, /=

var a = 1, b=2, c=3, d=4;

a += 1;
console.log("a += 1 : "+a);

b -= 1;
console.log("b -= 1 : "+b);

c*= 2;
console.log("c *= 2 : "+c);

d /= 2;
console.log("d /= 2 : "+d);


// 비교 연산자
// boolean 으로 반환
// < > <= >=

var a=2, b=1, c=6, d=8;

console.log(a>b);
// true

console.log(b>=c);
// false

console.log(c<=10);
// true

console.log(d<10);
// true


console.log("---------------------------")

// 논리 연산자
// == , != , && , || , !
// 같음 , 다름 , and , or , not

var a = 2, b = 1 , c = 6;

console.log( a==1 );
// false

console.log(b!=c);
// true

console.log( true && false);
// false

console.log( false || true);
// true

console.log (!false);
// true


console.log("---------------------------")

// 조건 연산자
// (조건) ? A : B
// 야 굳이 if-else 안써도 되는 거임? 개신기한데?

a=2; 
b =1;

(a > b)? (console.log("a is bigger than b")) : (console.log("a is smaller than b"));

(true) ? console.log("참입니다") : console.log("거짓입니다")
// 괄호 안감싸도, 심지어 ; 없어도 일단 실행은 해버리네... js 쩐닼ㅋㅋㅋ