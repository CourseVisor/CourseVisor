import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SignInView.scss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Container from'@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';

import {NavBarView} from '../NavBarView/NavBarView.js';

import {Link} from "react-router-dom";

const LogInButton = withStyles({

  text: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
    display: 'inline-block',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#FFFFFF',

    width: '11.25rem',
    height: '2.5rem',
    top: '7rem',

    backgroundColor: '#BD36EC',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
  },

  root: {
    position: "relative",
    justifyContent: 'center',
  }
})(Button);

const SignUpButton = withStyles({

  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    display: 'inline',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'capitalize',

    color: '#FAB124',
  },
})(Button);

const LogInContainer = withStyles({
  root: {
    width: "50%",
    textAlign: 'center',
  }
})(Container);

const TextBox = withStyles({
  root: {
    border: '5px solid #F3D5FE',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',  
  },
  input: {
    backgroundColor: 'white',
  }
})(TextField);

const PurpleCheckbox = withStyles({
  root: {
    color: '#BD36EC',
    '&$checked': {
      color: '#BD36EC',
      backgroundColor: '#FFFFFF',
    },
    float: 'left',
  },
  checked: {},
})(Checkbox);

export class SignInView extends Component {
  constructor(props){
    super(props);
  }

  // this.state = {
  //   'email': 
  // }
  render(){
    return (
      <div className='SignInView'>
        <NavBarView></NavBarView>   
        <LogInContainer>
          <h1>Log In</h1>
          <div className='goldBar'></div>
          <div>
            <TextBox variant='filled' label='Username/Email' className='usernameBox' InputProps={{disableUnderline: true}}></TextBox>
          </div>
          <div>
            <TextBox variant='filled' label='Password' className='passwordBox' InputProps={{disableUnderline: true}}></TextBox>
          </div>
          <div className='checkbox'>
            <PurpleCheckbox></PurpleCheckbox>
            <p className='keepLog'>Keep me logged in</p>
          </div>
          <LogInButton>Log In</LogInButton>
          <div className='notMember'>
            <p className='question'>Not a member?</p>
            <Link to='/signup'>
              <SignUpButton>Sign up</SignUpButton>
            </Link>
          </div>
        </LogInContainer>
      </div>
    )
  }
}

export default SignInView;


// onClick={() => "location.href='/signup'"}