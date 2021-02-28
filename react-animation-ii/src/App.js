
// https://codesandbox.io/s/dawn-monad-ulrgc?file=/styles.css

import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  return (
    <div className="App">

      <ul>
        {todo.map((td, index) => {
          return (
            <li key={index}>
              <button className="button-close" onClick={() => {
                const newTodo = todo.filter((t, idx) => {
                  if (idx === index) {
                    return false;
                  }
                  return true;
                });
                setTodo(newTodo);
              }} >
                ❌
              </button>
              {td}
            </li>
          );
        })}
      </ul>

      <div style={{ display: 'inline-flex', }}>

        <input type="text" value={text}
          placeholder="Enter your TODO"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              setTodo(prev => {
                return [...prev, text]
              });
              setText('');
            }
          }}
          onChange={(e) => setText(e.target.value)} ></input>
        {/* <button className="button"
          onClick={(e) => {
            e.preventDefault();
            setTodo(prev => {
              return [...prev, text]
            });
            setText('');
          }}>Add</button> */}

      </div>


    </div>
  );
}

export default App;
