// CreateUser.js

import React from 'react';

// function CreateUser ({username, email, onChange, onCreate}){
    // 위 방식대로 하면 항상 리랜더링함
const CreateUser = ({username, email, onChange, onCreate}) => {
    // 이렇게 그냥 감싸주기만 해도 됨 > 필요한 상황에서만 리랜더링함
    return (
        <div>
            <h3>인풋필드</h3>
            <input
                name= 'username'
                placeholder='계정명'
                onChange={onChange}
                value={username}
            />
            <input
                name='email'
                placeholder='이메일'
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default CreateUser;

// 상태관리는 App.js에서 하고, input의 값과 이벤트로 등록할 함수를 인자로 넘겨받아서 사용