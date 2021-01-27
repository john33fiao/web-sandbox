// UserListVer2.js

// useRef 는 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리 목적으로도 사용
// useRef로 변수 관리하면 값 바뀌어도 컴포넌트 리렌더링 안함
// 리액트 컴포넌트는 상태 바꾸는 함수 호출 뒤 업데이트된 상태 조회
// useRef로 관리하면 설정 후 바로 조회

// setTimeout, setInterval로 만든 id
// 외부 라이브러리로 만든 인스턴스
// scroll 위치

// 지금까지는 컴포넌트 내부에서 배열 직접 선언해서 사용함
// 이번에는 App에서 선언한 뒤 UserList(UserListVer2)에게 props로 전달

import React from 'react';

function User({user, onRemove}){
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserListVer2 ({users, onRemove}){
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default UserListVer2;