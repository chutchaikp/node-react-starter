import React, { useEffect, useState } from 'react';
import { combineReducers, createStore, } from 'redux';
import { Provider, useSelector } from 'react-redux';
import './App.css';
import axios from 'axios';

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
      case 'LOAD_NAMES':
        const data = action.payload.map((n) => n.name);
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

      <div className="container">
        <div className="header">
          {store && store.getState && <Header />}
        </div>

        <div className="content">
          <AppContent />
        </div>

      </div>
    </Provider>
  );
}

export default App;


const AppContent = () => {
  const [counter, names] = useSelector(state => {
    return [state.counter, state.names]
  });

  const [localName, setLocalName] = useState('A');
  return (
    <div>

      <h3>Counter</h3>
      <p>{counter}</p>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })} >+</button>
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })} >-</button>
      <hr />
      <h3>Names</h3>
      <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} />
      <button onClick={() => store.dispatch({ type: 'INSERT_NAME', payload: localName })}>Add</button>
      <button onClick={() => store.dispatch({ type: 'DELETE_NAME', payload: localName })}>Delete</button>

      <button onClick={() => store.dispatch({ type: 'CLEAR_NAMES' })}>Clear</button>

      {/* Do Async  */}
      <button className="asyncButton" onClick={async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        store.dispatch({ type: 'LOAD_NAMES', payload: data });
      }}>Load Async</button>

      <ul>
        {names.map((n, idx) => {
          return (<li key={idx}>{n}</li>)
        })}
      </ul>

    </div>
  );
}

const Header = () => {
  const [counter, names] = useSelector(state => {
    return [state.counter, state.names]
  });

  return (
    <div className="header-wrapper">
      <h2>Header</h2>
      <div>
        <p>Counter {counter}</p>
        <p>Names {names.length}</p>
      </div>

      {/* <p>{store.getState().counter}</p>       */}
      {/* <ul>
        {names.map((n, idx) => {
          return (<li key={idx}>{n}</li>)
        })}
      </ul> */}
    </div>
  );
}
