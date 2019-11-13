import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import firebase from 'firebase/app';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

import { NavBarView } from "./NavBarView/NavBarView.js";
import NewReviewView from "./NewReviewView/NewReviewView";
import HomePageView from "./HomePageView/HomePageView";
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// return

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let content = null;

    content = (
      <Router>
        <div>
          <header>
            <NavBarView />
            <Route exact path="/" component={HomePageView} />
            <Route path="/new-review" component={NewReviewView} />
            {/* <p>
              Hello World!
            </p> */}
          </header>
        </div>
      </Router>
    );

    return content;
  }
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }

// export default App;
