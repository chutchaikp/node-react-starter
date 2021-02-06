import React from 'react';
import { Counter } from './features/counter/Counter';
import { Names } from './features/names/Names';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <div className="content">
        <Counter />
        <hr />
        <Names />
      </div>

    </div>
  );
}

export default App;
