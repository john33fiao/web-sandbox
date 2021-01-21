// dataType.js
// 2020-10-23
// 데이터 타입

// 자료형이 딱히 존재하지는 않음
// number, string, boolean -> 그냥 미리 만들어진 내장객체에 해당함


// Number

var int_data = 1;
var float_data1 = Number('1.0');
var float_data2 = new Number('4.1254');
console.log( typeof int_data) ;
console.log(typeof float_data1);
console.log(typeof float_data2);

console.log(
    (255).toString(10) // 10진법
);

console.log(
    (255).toString(16) // 16진법
);

console.log(
    (255).toString(8)  // 8진법
);

console.log(
    (255).toString(2) // 2진법
);


// String

var character1 = 'a';
var character2 = 'b';
var string1 = "Double Quotations";
var string2 = 'Single Quotations Anyway';
var string3 = new String("String Object");

console.log(typeof string1);

console.log(typeof string2);

console.log(typeof string3);

console.log(string2[4]);

console.log(string2.charAt[1]);

console.log(string1.length);

console.log(string1.toUpperCase());

console.log(string2.toLowerCase());

console.log(string2.indexOf('o'));

var x = 'x';
console.log(string3.indexOf(x));


// Boolean

var result1 = new Boolean();
var result2 = true;

console.log(result1);
console.log(typeof result1);
console.log(typeof result1.valueOf());

console.log(Boolean("test"));
console.log(Boolean(""));
console.log(Boolean({}));


// Array

var array1 = [1,2,3];
var array2 = new Array(1, 2);
array2.push(3);

var array3 = new Array(3);
console.log(array3);

console.log(typeof array1);
console.log(array1.toString());
console.log(array1.valueOf());
console.log(array1.length);
console.log(array1[1]);

array1.length = 5;
console.log(array1.length);

console.log(array1);

console.log(array2.push("new1"));
console.log(array2.push("new2"));

console.log(array2);

console.log(array3);
array3 = new Array(4,2,1,3,0);
console.log(array3.sort());