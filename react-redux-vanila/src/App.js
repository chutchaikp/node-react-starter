import { combineReducers, createStore } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import './App.css';

var store = {};

function App() {

  // reducer "counter"
  const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }

  // reducer "user"
  const names = (state = [], action) => {
    switch (action.type) {
      case 'INSERT_NAME':
        return [...state, action.payload];
      case 'DELETE_NAME':
        return state.filter((u) => {
          return u !== action.payload;
        });
      default:
        return state;
    }
  }

  const allReducer = combineReducers({
    counter,
    names,
  });
  store = createStore(allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <div className="App">
        <h1> Basic Redux </h1>
        <div className="column">
          <ComponentA />
        </div>
        <div className="column">
          {store && store.getState && <ComponentB />}
        </div>
      </div>
    </Provider>
  );
}

export default App;

const ComponentA = () => {
  const names = useSelector(state => state.names);

  const [localCounter, setLocalCounter] = useState(0);
  const [localName, setLocalName] = useState('A');
  return (
    <div>
      <h2>Component A</h2>
      <h3>Counter</h3>
      <p>{localCounter}</p>
      <button onClick={() => {
        store.dispatch({ type: 'INCREMENT' });
        setLocalCounter(store.getState().counter);
      }} >+</button>
      <button onClick={() => {
        store.dispatch({ type: 'DECREMENT' });
        setLocalCounter(store.getState().counter);
      }} >-</button>
      <hr />
      <h3>Names</h3>
      <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} />
      <button onClick={() => store.dispatch({ type: 'INSERT_NAME', payload: localName })}>Add</button>
      <button onClick={() => store.dispatch({ type: 'DELETE_NAME', payload: localName })}>Delete</button>

      <ul>
        {names.map((n, idx) => {
          return (<li key={idx}>{n}</li>)
        })}
      </ul>

    </div>
  );
}

const ComponentB = () => {
  const [counter, names] = useSelector(state => {
    return [state.counter, state.names]
  });

  return (
    <div>
      <h2>Component B</h2>
      <h3>Counter</h3>
      <p>{counter}</p>
      <p>{store.getState().counter}</p>
      <hr />
      <h3>Names</h3>
      <ul>
        {names.map((n, idx) => {
          return (<li key={idx}>{n}</li>)
        })}
      </ul>
    </div>
  );
}
