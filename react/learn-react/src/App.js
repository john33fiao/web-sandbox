// import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from 'react'
import Counter from './Counter'
import InputSample from './InputSample'
import UserListVer1 from './UserListVer1';
import UserList from './UserList';
import UserListVer2 from './UserListVer2';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email:''
  });

  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  // const users = [
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  // useRef() 사용할 때 파라미터 넣어주면 이게 .current 의 default값이 됨
  // 이 값을 기준으로 .currnet 수정/조회하면 됨

  const onCreate = () => {
    // 배열에 항목 추가하는 로직

    const user = {
      id: nextId.current,
      username,
      email
    };

    // setUsers([...users, user]);
    // 불변성 지키는 상태로 새 항목 추가하는 첫 번째 방법, spread 연산자 사용

    setUsers(users.concat(user));
    // 불변성 지키는 두 번째 방법, concat()
    // 새로운 원소가 추가된 새로운 배열 생성

    setInputs({
      username: '',
      email: ''
    });

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
      <hr/>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserListVer2 users={users}/>
      {/* 값 초기화는 잘 되는 것 확인함 */}
      {/* users도 useState로 컴포넌트의 상태로 관리해봅시다 */}
    </>
  );
}

export default App;
