// InputSample.js

import React, {useState} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs; // 비구조화 할당으로 값 추출

    const onChange = (e) => {
        const {value, name} = e.target; // e.target에서 name과 value 추출
        setInputs({
            ...inputs, // 기존의 input 객체 복사
            // spread 문법, 객체의 내용을 모두 펼쳐서 기존 객체 복사
            // 불변성 지키는 것
            // 리액트에서 상태가 업데이트됐음을 감지, 리랜더링 진행
            // 기존 상태 직접 수정하면 값 바꿔도 리랜더링 안함
            // 불변성 지켜야지 컴포넌트 성능 최적화 가능
            [name]: value // name키 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        })

    };

    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name}/>
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
                {/* 이름 (닉네임) */}
                {/* 리액트에서 객체 수정 시 inputs[name] = value; 이거 하지 마라 */}
                {/* 그냥 새로운 객체 만들어서 변화주고 이걸 상태로 사용해야함 */}
            </div>
        </div>
    );
    // input 여러개일 때는 useState랑 onChange 여러개 만들어서 구현 가능
    // 근데 별로 좋은 방법이 아님
    // input에 name 설정하고 이벤트 발생 시 값 참조
    // useState는 문자열이 아니라 객체 형태의 상태로 관리
}

export default InputSample;