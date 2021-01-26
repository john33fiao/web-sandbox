// InputSample.js

import React, { useState } from 'react';

function InputSample (){
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    // e.target : 이벤트가 발생한 DOM인 input DOM을 가리킴
    // e.target.value 조회 > input에 입력한 값
    // useState를 통해 관리

    const onReset = () => {
        setText('');
    };

    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;