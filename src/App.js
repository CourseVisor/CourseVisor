import React, { Component } from "react";
import "./App.css";
import firebase from "firebase/app";

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import { NavBarView } from "./NavBarView/NavBarView.js";
import NewReviewView from "./NewReviewView/NewReviewView";
import HomePageView from "./HomePageView/HomePageView";
import { SignInView } from "./SignInView/SignInView.js";
import AccountCreationView from "./AccountCreationView/AccountCreationView";
<<<<<<< HEAD
import CourseSearchView from "./CourseSearchView/CourseSearchView";
=======
import OverAllRatingView from "./OverAllRatingView/OverAllRatingView";
>>>>>>> master

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authUnRegFunc = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("logged in");
        console.log(user);
        this.setState({
          user: user
        });
      } else {
        console.log("logged out");
        this.setState({
          user: null
        });
      }
    });
    // this.userRef = firebase.database().ref("user");
    // this.userRef.on("value", (snap) => {
    //   let theUser = snap.val();
    //   this.setState({ name: theUser });
    // });
  }

  componentWillUnmount() {
    this.authUnRegFunc = null;
  }

  // handleSignIn(email, password) {
  //   this.setState({errorMessage:null}); //clear old errors

  //   console.log(email);
  //   console.log(password);

  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       console.log(err);
  //       this.setState({errorMessage:err.message});
  //     })
  // }

  // handleSignOut() {
  //   this.setState({errorMessage:null}); //clear old errors

  //   firebase.auth().signOut()
  //     .catch((err) => {
  //       console.log(err)
  //       this.setState({errorMessage:err.message});
  //     })
  // }

  render() {
    return (
      <Router>
        <NavBarView currentUser={this.state.user} />
        <Route exact path="/" component={HomePageView} />
        <Route path="/signin" component={SignInView} />
        <Route path="/signup" component={AccountCreationView} />
        <Route path="/new-review" component={() => <NewReviewView currentUser={this.state.user} />} />
        <Route path="/results/:query" component={CourseSearchView} />
        <Route path="/overall-review" component={OverAllRatingView} />
      </Router>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <NavBarView />
//       <Router basename={process.env.PUBLIC_URL}>
//         <Route exact path="/" component={HomePageView} />
//         <Route path="/new-review" component={NewReviewView} />
//       </Router>
//     </div>
//   );
// }

// return

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
