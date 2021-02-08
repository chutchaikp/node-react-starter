import React, { Fragment, useEffect, useState } from 'react';
import { combineReducers, createStore, } from 'redux';
import { Provider, useSelector } from 'react-redux';
import axios from 'axios';

import Header from './Header'
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
        const res = state.filter((u) => {
          return u.selected === false
        });
        return res;
      case 'UPDATE_NAME':
        debugger;
        // Why return state diference from return state.slice()
        // return state - ui no rerender
        // return state.slice() - ui render 
        return state.slice();
      case 'LOAD_NAMES':
        const data = action.payload.map((n) => {
          return { value: n.name, selected: false, }
        });
        return [...state, ...data];
      case 'CLEAR_NAMES':
        return [];
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
      <>
        <Header />

        <div className="container">
          <div className="wrapper">
            <div className="two-column-app">
              <CounterComponent />
              <NamesComponent />
            </div>
          </div>
        </div>

      </>
    </Provider>
  );
}

export default App;

const CounterComponent = () => {
  const counter = useSelector(state => state.counter);

  return (
    <div>

      <h3 className="title">Counter</h3>
      <p className="counter">{counter}</p>
      <button className="counter-button" onClick={() => store.dispatch({ type: 'INCREMENT' })} >+</button>
      <button className="counter-button" onClick={() => store.dispatch({ type: 'DECREMENT' })} >-</button>

    </div>

  );
}

const NamesComponent = () => {
  const names = useSelector(state => state.names);
  const [localName, setLocalName] = useState({ value: 'A', selected: false });
  return (
    <div className="names-container">
      <h3>Names</h3>

      <input className="names-input" type="text" value={localName.value} onChange={(e) => setLocalName({ value: e.target.value, selected: false })} />

      <button className="names-button" onClick={() => store.dispatch({ type: 'INSERT_NAME', payload: localName })}>Add</button>
      <button className="names-button" onClick={() => store.dispatch({ type: 'CLEAR_NAMES' })}>Clear</button>
      <button className="names-button" onClick={async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        store.dispatch({ type: 'LOAD_NAMES', payload: data });
      }}>Load Async</button>
      <button className="names-button" onClick={() => store.dispatch({ type: 'DELETE_NAME', payload: localName })}>Delete</button>

      {names instanceof Array && names.length > 0 && (
        <button className="names-button" onClick={() => {
          names.map((n) => n.selected = true);
          store.dispatch({ type: 'UPDATE_NAME' });
        }}>Check all</button>
      )}

      <ul>
        {names.map((n, idx) => {
          return (
            <li key={idx}>
              <input type="checkbox"
                checked={n.selected || false}
                onChange={(e) => {
                  n.selected = e.target.checked;
                  store.dispatch({ type: 'UPDATE_NAME', payload: { name: n, idx } });
                }}
              />
              {n.value}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
