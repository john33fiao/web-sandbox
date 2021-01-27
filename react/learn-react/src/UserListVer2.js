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

import React, {useEffect} from 'react';

// function User({user, onRemove, onToggle}){
const User = React.memo(function User({user, onRemove, onToggle}){
    useEffect(
        () => {
            console.log('컴포넌트가 화면에 나타남');
            console.log(user);
            return () => {
                console.log('컴포넌트가 화면에서 사라짐');
                console.log(user);
            };
        }, [user]
        // deps 안에 특정 값 넣음
        // 마운트/수정 시 호출됨
        // 언마운트/수정 직전 호출됨

        // 이 안에서 사용하는 상태나 인자가 있으면 deps에 넣어야함
        // 그것이 규칙이기 때문입니다
        // 안넣으면 최신 인자/상태를 가리키지 못하게 됨

        // () => {
        //     console.log(user);
        // }
        // deps 인자 생략
        // 컴포넌트 리랜더링 할 때마다 호출됨
        // 성능상 매우 나쁜 방법임
    );
    // 컴포넌트가 마운트(처음 나타남)/언마운트(사라짐)/업데이트(특정 인지 바뀜) 시 특정 작업 처리
    // useEffect(함수, 의존값 배열 deps)
    // deps 배열 비우면 컴포넌트 마운트 시에만 useEffect에 등록한 함수 호출
    
    // useEffect에서 반환하는 함수 > cleanup()
    // useEffect에 대한 뒷정리
    // deps가 비어있는 경우 컴포넌트 사라질 때 cleanup 함수 호출

    // 마운트 시 하는 작업
    // props 값을 로컬로 설정
    // 외부 API 요청(REST 같은 거)
    // 라이브러리 사용
    // setInterval, setTimeout 같은 작업 예약

    // 언마운트 시 하는 작업
    // setInterval, setTimeout 같은 작업 clear
    // 라이브러리 인스턴스 제거

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    // 마우스 올렸을 때 커서 변경
                    color: user.active ? 'green' : 'black'
                }}
                // active 값에 따라 녹색/검은색 설정
                onClick = {
                    () => onToggle(user.id)
                }
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserListVer2 ({users, onRemove, onToggle}){
    return (
        <div>
            {users.map(user => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserListVer2;