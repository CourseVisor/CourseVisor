import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NavBarView.scss';
import logo from '../logo.png'

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';
import HomePageView from '../HomePageView/HomePageView';
import SignInView from '../SignInView/SignInView';
import AccountCreationView from '../AccountCreationView/AccountCreationView';


const SignInButton = withStyles({

  text: {
    position: "absolute",
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#FFFFFF',

    width: '90px',
    height: '30px',
    right: '15%',
    top: '20px',

    backgroundColor: '#BD36EC',
    borderRadius: '20px',
  },  
})(Button);


const SignUpButton = withStyles({

  text: {
    position: "absolute",
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#FFFFFF',

    width: '90px',
    height: '30px',
    right: '7%',

    top: '20px',

    backgroundColor: '#BD36EC',
    borderRadius: '20px',
  },  
})(Button);

const SignOutButton = withStyles({

  text: {
    position: "absolute",
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#FFFFFF',

    width: '90px',
    height: '30px',
    right: '7%',

    top: '20px',

    backgroundColor: '#BD36EC',
    borderRadius: '20px',
  },  
})(Button);

export class NavBarView extends Component {
  // constructor(props){
  //   super(props);
  // }

  handleSignOut(event) {
    this.props.signOutCallback();
  }

  render() {

    if(this.props.currentUser) {
      return (
        <nav className='navBarView'>
          <NavLink exact to='/'><img className='logo' src={logo} alt='CourseVisor logo'></img></NavLink>
          <SignOutButton onClick={() => this.handleSignOut()}>Sign Out</SignOutButton> 

        </nav>
      );
    } else {
      return(
        <nav className='navBarView'>
          {/* <NavLink exact to='/' component={HomePageView}><img className='logo' src={logo} alt='CourseVisor logo'></img></NavLink>
          <NavLink to='/signin' component={SignInView}><SignInButton>Sign In</SignInButton></NavLink>
          <NavLink to='/signup' component={AccountCreationView}><SignUpButton>Sign Up</SignUpButton></NavLink> */}
          <NavLink exact to='/'><img className='logo' src={logo} alt='CourseVisor logo'></img></NavLink>
          <NavLink to='/signin'><SignInButton>Sign In</SignInButton></NavLink>
          <NavLink to='/signup'><SignUpButton>Sign Up</SignUpButton></NavLink>
      </nav>

      )
    }
  }
}

export default NavBarView;
