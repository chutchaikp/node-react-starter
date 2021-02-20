
// https://thoughtbot.com/blog/transitions-and-transforms
// https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function

// button style
// 

import { useState, } from 'react';
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

      <div className="toggle-button" onClick={() => setIsShow(!isShow)}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>

      {isShow ? 'show' : 'hide'}

      <div>
        <button
          className="button"
          onClick={() => setIsAlert(!isAlert)} >Show alert </button>


      </div>

      <div>

        <button className="button">My Button</button>
        <a href="void(0)" onClick={(e) => {
          e.preventDefault();
          setIsAlert(!isAlert);
          return false;
        }}>My Link</a>
        <a href="void(0)" onClick={(e) => {
          e.preventDefault();
          setIsAlert(!isAlert);
          return false;
        }}>My Link</a>

        Lorem ipsum dolor sit amet consectetur adipisicing
        <a href="void(0)" onClick={(e) => {
          e.preventDefault();
          setIsAlert(!isAlert);
          return false;
        }}>adipisicing</a>
elit. Animi, magni.


      </div>

      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nam.</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed? Tempora quia corrupti nisi. Sunt iure praesentium deserunt architecto animi, doloribus velit voluptatum ipsa maxime ullam officiis veritatis, porro nemo minima quo. Possimus ipsum in, totam veritatis ullam, vel quis rerum deleniti fuga omnis aut facere voluptate reprehenderit magnam! Quia eum iure, soluta eaque quisquam nemo odit. Odio nostrum numquam, ex, possimus nesciunt alias dicta praesentium ad maxime eaque ipsum impedit dolorem illum minima, aperiam doloribus quibusdam quas omnis laboriosam. Ex quasi officiis, maiores iste quo ab ipsam distinctio voluptatibus veniam earum repudiandae sint reiciendis perferendis provident mollitia illo suscipit.
      </div>

      <div
        style={{ opacity: isAlert ? 1 : 0, transform: isAlert ? 'scale(1)' : 'scale(0.9)' }}
        className="alert">
        <h3>Animated alert message</h3>
        <div>This alert message is being trnsitioned in and out of the DOM</div>

        <button className="button-close"
          onClick={(e) => setIsAlert(false)} >
          ❌
        </button>


      </div>
    </div>
  );
}

export default App;
