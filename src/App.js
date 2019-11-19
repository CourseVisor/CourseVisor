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
import {SignInView} from './SignInView/SignInView.js';
import AccountCreationView from "./AccountCreationView/AccountCreationView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          {/* <SignInView></SignInView> */}
          <NavBarView />
          <Route exact path="/" component={HomePageView} />
          <Route path='/signin' component={SignInView} />
          <Route path='/signup' component={AccountCreationView} />
          <Route path="/new-review" component={NewReviewView} />
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

//             <NavBarView />
//             <Route exact path="/" component={HomePageView} />
//             <Route path="/new-review" component={NewReviewView} />
//         </div>
//       </Router>
//     );

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
