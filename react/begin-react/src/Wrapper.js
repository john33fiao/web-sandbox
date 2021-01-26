// Wrapper.js

// 컴포넌트 태그 사이에 넣은 값을 조회하려 할 때
// props.children 을 조회하면 됨


import React from 'react';

function Wrapper({children}){
    const style ={
        border: '2px solid black',
        padding : '16px'
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}
// 컴포넌트 정의 완료

export default Wrapper;