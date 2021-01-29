import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Square extends React.Component {
    // 버튼 렌더링

    constructor(props){
        super(props);
        // JS 클래스에서 하위 클래스 생성자 정의하는 경우 항상 super 호출 필요
        // 모든 리액트 컴포넌트 클래스는 생성자 가지는 경우 super(props) 호출 구문부터 작성해야함

        this.state = {
            value : null,
        };

    }
    // 상태를 기억하기 위해 state 사용
    // this.state 는 컴포넌트에 대해 비공개
    // 현재 값을 this.state에 저장하고 Square를 클릭하는 경우 변경
    
  render() {
    return (
      <button 
      className="square" 
      onClick={
        // function() {alert('click');}
        
        // () => alert(this.props.value)
        // this 동작 쉽게 이해하도록 화살표 함수 적용
        // onClick prop으로 함수를 전달 > 클릭 시에만 함수 호출
        // () => // 왼쪽에 쟤 생략하면 렌더링 할 때마다 alert() 호출함
        
        // 버튼 onClick 경우 Square 다시 렌더링 필요하다고 리액트에게 알림
        // setState 호출하면 컴포넌트 내부의 자식 컴포넌트 함께 업데이트
        // () => this.setState({value : 'X'})}
        
        () => this.props.onClick()}
        // Squard 클릭하면 함수 호출
      >
        {/* {this.state.value} */}
        {/* 값 표시 */}

        {this.props.value}
        {/* 상태가 아니라 인자 전달 */}
      </button>
    );
  }
}

class Board extends React.Component {
    // 사각형 9개 렌더링

    constructor(props){
        super(props);
        this.state = {
            squars : Array(9).fill(null),
        };
    }
    // 자식으로부터 데이터를 모으거나, 자식 컴포넌트간에 통신
    // 부모 컴포넌트에 공유 state 정의
    // 부모에서 props를 사용해서 자식 컴포넌트에 state 전달 및 동기화
    
    handleClick(i){
      const squares = this.state.squars.slice();
      // 기존 배열을 수정하지 않고 사본을 생성하여 수정함 > 불변성!
      squares[i] = 'X';
      this.setState({squares : squares});
    }
    // 지금까지와 동일하게 클릭하면 X 채워짐
    // state가 각 Square 컴포넌트가 아니라 Board 컴포넌트에 채워짐
    // 모든 사각형의 상태를 유지하여 이후 승자 판결 가능해짐
    // Square 컴포넌트는 이제 제어 가능함
    
  renderSquare(i) {
    return (    
        <Square 
        // value ={i}
        // 버튼에 value prop 전달
        value = {this.state.squars[i]} 
        // 각 Square에게 현재 값 전달
        
        onClick={() => this.handleClick(i)}
        // 리액트에 클릭 이벤트 설정하라고 전달
        // 버튼 클릭하면 render() 함수에 정의된 onClick 이벤트 핸들러 호출
        // 이벤트 핸들러는 this.props.onClick() 호출
        // Board에서 Square로 위에 있는 프로퍼티 전달했으므로 this.handleClick(i)호출
        // handleClick 정의 안했으므로 코드 깨지는 것이 정상임

        />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
