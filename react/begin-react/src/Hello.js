// Hello.js

import React from 'react';
// 리엑트 컴포넌트 만들기 위해 리액트 불러옴

// function Hello({props}){
// 아래는 비구조화 할당(구조 분해라고도 함)
function Hello({color, name, isSpecial}){
    return <>
        {/* <div>안녕하세요 {props.name}</div>
        <div style={{color:props.color}}>안녕하세요 {props.name}</div> */}
        <div style={{color}}>안녕하세요 {name}입니다</div>

        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            안녕하세요 isSpecial {name}입니다
        </div>
        {/* isSpecial 값이 true면 별 찍고 아니면 null 찍음 */}
        {/* JSX에서 null, false, undefined 렌더링하면 아무것도 안나타남 */}
        {/* 특정 조건에 따라 보여줌/가림 처리하는 건데, 이 상황에서는 && 연산자가 더 편할 수 있음 */}
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name} 
        </div>

    </>
    // 전달받은 properties 표시
    // 객체 형태로 전달함
}

// defaultProps로 기본값 설정
// props 지정하지 않은 경우 기본적으로 사용할 값 설정
Hello.defaultProps = {
    name : '파란색은 아닐 때도 있지만 아무튼 Default인 이름없음'
}

export default Hello;
// XML 형식의 값 반환 > JSX
// Hello 라는 컴포넌트를 내보냄 > 다른 컴포넌트에서 불러와서 사용 가능