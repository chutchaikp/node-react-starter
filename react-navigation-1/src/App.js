
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import About from './pages/About'
import Nav from './common/Nav';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/post/:id" component={Post}></Route>
          <Route path="/about" component={About} ></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
