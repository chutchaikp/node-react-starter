import React from 'react';
import { Counter } from './features/counter/Counter';
import { Names } from './features/names/Names';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="wrapper">
          <div className="two-column-app">
            <Counter />
            <Names />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
