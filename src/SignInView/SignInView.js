import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SignInView.scss';



import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Container from'@material-ui/core/Container';

import {withStyles} from '@material-ui/core/styles';


import {NavBarView} from '../NavBarView/NavBarView.js';


const LogInButton = withStyles({

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

    width: '11.25rem',
    height: '2.5rem',
    left: '630px',
    top: '552px',


    backgroundColor: '#BD36EC',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
  },  
})(Button);

const LogInContainer = withStyles({
  root: {
    width: "50%",
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
            <PurpleCheckbox labelStyle={{color: 'white'}}
  iconStyle={{fill: 'white'}}></PurpleCheckbox>Keep me logged in
          </div>
          <LogInButton>Log In</LogInButton>
        </LogInContainer>
      </div>
    )
  }
}

export default SignInView;