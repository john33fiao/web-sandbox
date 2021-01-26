// import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react'
import Counter from './Counter'
import InputSample from './InputSample'
import UserListVer1 from './UserListVer1';
import UserList from './UserList';
import UserListVer2 from './UserListVer2';

function App() {
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

  const nextId = useRef(4);

  // useRef() 사용할 때 파라미터 넣어주면 이게 .current 의 default값이 됨
  // 이 값을 기준으로 .currnet 수정/조회하면 됨

  const onCreate = () => {
    // 나중에 구현 > 배열에 항목 추가하는 로직

    nextId.current +=1;
  }

  return (
    <>
      <Counter/>
      <hr/>
      {/* 얘는 그냥 내가 임시로 넣었다, 구분 좀 하자고요 */}
      <InputSample isSpecial={true}/>
      <hr/>
      <UserListVer1/>
      <hr/>
      <UserList/>
      <hr/>
      <UserListVer2 users = {users}/>
    </>
  );
}

export default App;
