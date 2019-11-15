import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import firebase from 'firebase/app';

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import {NavBarView} from './NavBarView/NavBarView.js';
import {SignInView} from './SignInView/SignInView.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let content = null;

    content = (
      // <Router>
      //   <div>
      //     <header>
      //       <NavBarView/>

      //     </header>
      //   </div>
      // </Router>
      <Router>
        <div>
          <SignInView></SignInView>
        </div>
      </Router>
    )
    return content;
  }
}


// export class NavSwitch extends Component {
//   render() {
//     let content = null;

//     content = (
//       <Switch>
//         <Route path="/signin" render={() => <SignInView></SignInView>}/>}/>
//       </Switch>
//     )

//     return content;

//   }
// }





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