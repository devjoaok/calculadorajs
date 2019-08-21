import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         a: 0,
         b: 0,
         o: null,
         r: 0,
         aIsActive: true
      }
   }

   handleClick(i) {
      const operation = i.target.innerHTML;
      var value = operation * 1;

      if (isNaN(value)) {
         //; Selected a operation
         switch (operation) {
            case '+':
               break;
            case '-':
               break;
            case '*':
               break;
            case '/':
               break;
            case ',':
               break;
            case '+/-':
               break;
            case '<-':
               break;
            case 'c':
               break;
            case 'ce':
               break;
            case '=':
               break;
         }
      } else { 
         //; Selected a number
         if (this.state.aIsActive) {

         } else {

         }
      }
   }

   render () {
      return (
      <div className="App">
         <div>
            <Input 
               onKeyUp={(i) => console.log(i)}
            />
         </div>
         <div className="padding-top">
            <Board 
               onClick={(i) => this.handleClick(i)}
            />
         </div>
      </div>
      )
   }
}

class Board extends React.Component {
   renderSquare(i) {
      return (<Square 
         value={i}
         onClick={(i) => this.props.onClick(i)}
      />);
   }

   render() {
      return (
      <div>
            <div className="board-row">
            {this.renderSquare('ce')}
            {this.renderSquare('c')}
            {this.renderSquare('<-')}
            {this.renderSquare('/')}
            </div>
            <div className="board-row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare('x')}
            </div>
            <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare('-')}
            </div>
            <div className="board-row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare('+')}
            </div>
            <div className="board-row">
            {this.renderSquare('+/-')}
            {this.renderSquare(0)}
            {this.renderSquare(',')}
            {this.renderSquare('=')}
            </div>
      </div>
      );
   }
   }

class Input extends React.Component {
   constructor (props) {
      super(props);
   }

   render () {
      return (
         <input type="number" onKeyUp={this.props.onKeyUp}/>
      )
   };
}

function Square (props) {
   return (
      <button className="square" onClick={props.onClick}>
      {props.value}
      </button>
   );
}

ReactDOM.render(
      <App />, 
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
