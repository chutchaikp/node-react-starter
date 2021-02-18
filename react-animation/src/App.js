
// https://thoughtbot.com/blog/transitions-and-transforms
// https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function

import { useState } from 'react';
import './App.css';

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  return (
    <div className="App">
      <div
        className="menu"
        style={{ transform: isShow ? 'translate(-300px, 0)' : '' }}
      >
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li>About</li>
        </ul>

      </div>

      <button
        onClick={() => setIsShow(!isShow)}
        className="toggle-button">
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
      </button>

      {isShow ? 'show' : 'hide'}

      <button style={{ alignSelf: 'flex-start' }} onClick={() => setIsAlert(!isAlert)} >Show alert </button>

      <div
        style={{ opacity: isAlert ? 1 : 0, transform: isAlert ? 'scale(1)' : 'scale(0.9)' }}
        className="alert">
        <h3>Animated alert message</h3>
        <div>This alert message is being trnsitioned in and out of the DOM</div>

        <button style={{ alignSelf: 'flex-end', }} href="return false" onClick={(e) => {
          e.preventDefault();
          setIsAlert(false);
        }} >close</button>
      </div>
    </div>
  );
}

export default App;
