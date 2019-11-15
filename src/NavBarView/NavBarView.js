import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NavBarView.scss';
import logo from '../logo.png'

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';


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
    // left: '1150px',
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
    // left: '1260px',
    right: '7%',

    top: '20px',

    backgroundColor: '#BD36EC',
    borderRadius: '20px',
  },  
})(Button);

export class NavBarView extends Component{

  // constructor(props){
  //   super(props);
  // }

  render() {
    // const classes = useStyles();

    return (
      <nav className='navBarView'>
        <NavLink exact to='/'><img className='logo' src={logo} alt='CourseVisor logo'></img></NavLink>
        <NavLink to='/signin'><SignInButton>Sign In</SignInButton></NavLink>
        <NavLink to='/signup'><SignUpButton>Sign Up</SignUpButton></NavLink>
      </nav>
    )
  }


}

export default NavBarView;