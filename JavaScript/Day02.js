// Day02.js

// 변수명 꼬이고 해서 그냥 새 파일 만듦

function avg(...args){
    let sum = 0;
    for(let value of args){
        sum += value;
    }
    return sum / args.length;
}

console.log(avg(1,2,3,4,5));

function avgArray(arr){
    let sum = 0;
    for(let i =0, j=arr.length; i<j; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(avgArray([2,3,4,5]));

console.log(avg.apply(null, [2,3,4,5]));

// 변수선언 어지간하면 이렇게 하자, 나중에 변수명 꼬여서 고생하기 싫으면
function avgg(){
    let arr = [5,6,7];
    console.log(avg(...arr));
}

avgg();

function avggg(...args){
    let ag = function(){
        let sum = 0;
        for (let i =0, j = args.length ; i<j ; i++){
            sum += args[i];
        }
        return sum / args.length;
    }
    console.log(ag());
}

avggg(2,2,2,2,2);

// 이 특징은 매우 강력한데, 일반적인 표현식(expression)을 사용할 수있는 어디에서나 완전한 함수 정의를 넣을 수 있도록 허용하는 것이기 때문입니다.
// 위 문구로 검색해서 계속 진행할 것