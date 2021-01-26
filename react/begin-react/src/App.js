// import logo from './logo.svg';
// 현재는 필요 없는 부분이니 일단 삭제

import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper'

function App() {
  const name = 'React';
  const style = { 
    // 인라인 style은 JSON으로 작성
    // 원래 background-color 이면 camelCase로 바꿔서 backgroundColor 처럼 적어주면 됨
    // 그냥 적응하세요
    backgroundColor : 'black',
    color : 'aqua',
    fontSize: 24, // px 단위가 default
    padding: '1rem'
  }
  return (
    <>
      <Hello
      // 열리는 태그 내부에는 이렇게도 주석 되기는 함
      // 근데 야 솔직히 이건 좀 아닌데 에헤이 드러버라
      />
      <Hello/>
      <Hello/>
      {/* 컴포넌트는 UI 조각이므로 재사용 가능함 */}
      {/* 주석 넣기 되게 복잡하네 야이씨 */}
      <div>
        안녕하세요?
      </div>
      <div style={style}>Hello {name}</div>
      {/* JS 변수 보여줄 때는 {}으로 감싸면 됨 */}
      <div className="gray-box"></div>
      <Hello name = "react"/>
      <Hello name="react" color='red'/>
      <Hello color='blue'/>


      <Wrapper>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
        {/* 지금은 콘텐츠 안보이고 그냥 사각형만 보일 것임 */}
        {/* props.children 렌더링 필요함 */}

        {/* 조건부 렌더링 */}
        <Hello name='react' color='red' isSpecial={true}/>
        {/* 특정 조건에 따라 다른 결과물 렌더링 */}
        {/* JS 값이니까 중괄호로 감싼다 */}
        <Hello color='pink'/>

        <Hello name="react" color="aqua" isSpecial/>
        {/* 이렇게 값 설정 생략하면 isSpecial={true}랑 동일한 의미임 */}

      </Wrapper>

    </>
    // 슬래시 주석 가능함
    // 뭔소리냐면, 위에는 HTML이 아니라 JS라는 뜻임
    // 하지만 놀랍게도 DIV 안에는 HTML이지

    // 그래서 몇가지 규칙이 있음
    // 1. 태그 꼭 닫아라, 안닫으면 컴파일 불가능
    // 심지어 input이나 br 쓸 때도 <br/> 이런 식으로 Self Closing 안해주면 컴파일 불가능

    // 2. 태그는 하나만 사용가능
    // div*2 이런 거 하면 안되고, div>div*2 이렇게 해야한다는 뜻임
    // 근데 솔직히 항상 div 쓰면 꼬이거든? 그럴 때는 Fragment 쓰면 됨
    // <>내용</> 이렇게
  ); 
  // 와 근데 저장할 때마다 컴파일 다시 하네?
  // 심지어 소스보기 해도 안읽힘, JS로 그 위치에 밀어넣어서 그런가?
}

export default App;