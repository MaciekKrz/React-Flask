import React, { Component, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import reducer from './helperss/reducers.js';


function Counter({initialCount}) {  
  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>

        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Counter initialCount={0} />
        </div>
      </div>
    );
  }
}

export default App;


