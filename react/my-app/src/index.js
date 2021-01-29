import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// class Square extends React.Component {
//     // 버튼 렌더링

//     constructor(props){
//         super(props);
//         // JS 클래스에서 하위 클래스 생성자 정의하는 경우 항상 super 호출 필요
//         // 모든 리액트 컴포넌트 클래스는 생성자 가지는 경우 super(props) 호출 구문부터 작성해야함

//         this.state = {
//             value : null,
//         };

//     }
//     // 상태를 기억하기 위해 state 사용
//     // this.state 는 컴포넌트에 대해 비공개
//     // 현재 값을 this.state에 저장하고 Square를 클릭하는 경우 변경
    
//   render() {
//     return (
//       <button 
//       className="square" 
//       onClick={
//         // function() {alert('click');}
        
//         // () => alert(this.props.value)
//         // this 동작 쉽게 이해하도록 화살표 함수 적용
//         // onClick prop으로 함수를 전달 > 클릭 시에만 함수 호출
//         // () => // 왼쪽에 쟤 생략하면 렌더링 할 때마다 alert() 호출함
        
//         // 버튼 onClick 경우 Square 다시 렌더링 필요하다고 리액트에게 알림
//         // setState 호출하면 컴포넌트 내부의 자식 컴포넌트 함께 업데이트
//         // () => this.setState({value : 'X'})}
        
//         () => this.props.onClick()}
//         // Squard 클릭하면 함수 호출
//       >
//         {/* {this.state.value} */}
//         {/* 값 표시 */}

//         {this.props.value}
//         {/* 상태가 아니라 인자 전달 */}
//       </button>
//     );
//   }
// }

// 함수 컴포넌트로 변경
function Square(props){
  return(
    <button
      className="square"
      onClick={props.onClick}
      // () 괄호가 사라졌음을 확인가능
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
    // 사각형 9개 렌더링

    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            xIsNext:true,
        };
    }
    // 자식으로부터 데이터를 모으거나, 자식 컴포넌트간에 통신
    // 부모 컴포넌트에 공유 state 정의
    // 부모에서 props를 사용해서 자식 컴포넌트에 state 전달 및 동기화
    
    handleClick(i){
      const squares = this.state.squares.slice();
      // 기존 배열을 수정하지 않고 사본을 생성하여 수정함 > 불변성!
      // 이전 버전 이력을 유지하고 재사용
      // 변화 감지 > 복잡도 낮춤
      // 리액트에서 렌더링 시기 결정
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      // 'X';
      this.setState({
        squares : squares,
        xIsNext : !this.state.xIsNext, // 네 턴이야
      });
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
        value = {this.state.squares[i]} 
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
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    // const status = 'Next player: X';
    // const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

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

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i< lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}