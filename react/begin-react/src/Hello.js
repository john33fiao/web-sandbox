// Hello.js

import React from 'react';
// 리엑트 컴포넌트 만들기 위해 리액트 불러옴

// function Hello({props}){
// 아래는 비구조화 할당(구조 분해라고도 함)
function Hello({color, name}){
    return <>
        {/* <div>안녕하세요 {props.name}</div>
        <div style={{color:props.color}}>안녕하세요 {props.name}</div> */}
        <div style={{color}}>안녕하세요 {name}입니다</div>
    </>
    // 전달받은 properties 표시
    // 객체 형태로 전달함
}

// defaultProps로 기본값 설정
// props 지정하지 않은 경우 기본적으로 사용할 값 설정
Hello.defaultProps = {
    name : '파란색으로 보이는 이름없음'
}

export default Hello;
// XML 형식의 값 반환 > JSX
// Hello 라는 컴포넌트를 내보냄 > 다른 컴포넌트에서 불러와서 사용 가능