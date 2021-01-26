// Counter.js

import React, { useState } from 'react'
// {useState} 자동으로 넣어주네? 역시 갓 VSCode

function Counter(){
    const [number, setNumber] = useState(0);
    // 상태의 기본값을 파라미터로 넣어서 호출해줌 > 배열 반환
    // number = 현재 상태 / setNumber = Setter

    const onIncrease = () => {
        // setNumber(number +1 );
        setNumber(prevNumber => prevNumber +1);
        console.log('+1');
    }
    const onDecrease = () => {
        // setNumber(number -1);
        setNumber(prevNumber => prevNumber -1);
        // 값을 업데이트하는 함수를 파라미터로 넣음
        // 컴포넌트 최적화 시 사용함 > 지금 당장은 어떤 기제인지 몰라도 된다고함
        console.log('-1');
    }

    // 원래는 아래처럼 해야하는데, 비구조화 할당으로 각 원소 추출한 것임
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    return (
        <div>
            <h1>{number}</h1>
            {/* 파라미터로 전달받은 값을 최신 상태로 설정함(Setter) */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/* <button onClick={onDecrease()}>-1</button> */}
            {/* 이렇게 하면 렌더링 시점에서 함수를 호출해버림 */}

            {/* 리액트 useState > 동적인 값 끼얹기 > 컴포넌트에서 상태 관리 */}

            {/* 기존 값을 새로운 파라미터가 아니라 함수 등록 방식으로 값 업데이트 */}




        </div>
    )
}

export default Counter;