// import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import InputSample from './InputSample'
import UserListVer1 from './UserListVer1';
import UserList from './UserList';

function App() {
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
    </>
  );
}

export default App;
