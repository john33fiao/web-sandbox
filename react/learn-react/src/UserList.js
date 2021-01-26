// UserList.js

import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ];
    return (
        <div>
            <h3>코드 재사용 방식으로 적용</h3>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
            <h3>map() 배열 적용</h3>
            {users.map(user=>(
                // <User user={user}/>
                // 자동으로 배열 내 모든 원소를 렌더링함
                
                // 대신 key props 설정 안해서 콘솔에는 에러 찍힐 거임
                // 아래와 같이 쓰면 됨
                <User user={user} key={user.id}/>

                // 그리고 고유 id 없는 상황에서는, map() 함수에서 설정하는 콜백함수 파라미터 index를 key로 사용
            ))}
            <h3>콜백함수 index 사용</h3>
            {users.map((user, index)=> (
                <User user={user} key={index}/>
                // key 없으면 일단 자동으로 index 가져다 쓰고, 콘솔에 에러뿜뿜함
                // 배열이 효율적 렌더링 안되니까 그런대요

                // key 없으면, 기존 값을 모두 교체(수정)해서 한 칸씩 밀어내기 표시함(모두 리렌더링)
                // 있으면, 기존 값을 그냥 쭉 밀고 DOM으로 삽입함(하나만 렌더링)
            ))}
        </div>
    );
    // 얘도 고정배열은 상관없는데, 동적 배열은 렌더링 못함

    // 동적 배열은 JS 내장함수인 map()을 사용함
    // 배열 안에 있는 각 원소를 변환하여 새로운 배열을 생성
    // 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환하여 사용


}

export default UserList;