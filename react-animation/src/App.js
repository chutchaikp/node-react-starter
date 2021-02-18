
// https://thoughtbot.com/blog/transitions-and-transforms

import { useState } from 'react';
import './App.css';

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
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
    </div>
  );
}

export default App;

// const ToggleMenu = () => {
//   return (
//     <button class="toggle-button">
//       <div class="toggle-button__line"></div>
//       <div class="toggle-button__line"></div>
//       <div class="toggle-button__line"></div>
//     </button>
//   );
// }
