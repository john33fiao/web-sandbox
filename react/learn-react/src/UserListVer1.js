// UserListVer1.js

import React from 'react';

function UserListVer1(){
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
            <div>
                <b>{users[0].username}</b>
                <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>({users[1].email})</span>
            </div>
        </div>
    );
    // 재사용 할 건데 이렇게 입력하면 돼요 안돼요?
    // 근데 정 필요하면 재사용 해야지
    // 아니 일단 거 자동화 한 번 배워봅시다, 위에꺼 주석처리하세요



}

export default UserListVer1;