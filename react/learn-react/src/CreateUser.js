// CreateUser.js

import React from 'react';

function CreateUser ({username, email, onChange, onCreate}){
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
}

export default CreateUser;

// 상태관리는 App.js에서 하고, input의 값과 이벤트로 등록할 함수를 인자로 넘겨받아서 사용