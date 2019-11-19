import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AccountCreationView.scss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Container from'@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';

import {Link} from "react-router-dom";

import {NavBarView} from '../NavBarView/NavBarView.js';

const AccountCreationContainer = withStyles({
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

    position: 'relative',
    height: 'auto',
  },
  input: {
    backgroundColor: 'white',
  }
})(TextField);

const SignUpButton = withStyles({

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
    top: '10rem',

    backgroundColor: '#BD36EC',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
  },

  root: {
    position: "relative",
    justifyContent: 'center',
  }
})(Button);

const LogInButton = withStyles({

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

export class AccountCreationView extends Component {

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     'email':undefined,
  //     'password':undefined,
  //     'userName':undefined,
  //   }
  // }

  render(){
    return (
      <div className="accountCreationView">
        <NavBarView></NavBarView>
        <AccountCreationContainer>
          <div className='header'>
            <span className='title'>Sign up for </span>
            <span className='name'>CourseVisor</span>
          </div>
          <div className='goldBar'></div>
          <TextBox variant='filled' label='Create a username' className='createUsernameBox' InputProps={{disableUnderline: true}}></TextBox>
          <TextBox variant='filled' label='Email' className='emailBox' InputProps={{disableUnderline: true}}></TextBox>
          <TextBox variant='filled' label='Password' className='createPasswordBox' InputProps={{disableUnderline: true}}></TextBox>
          <TextBox variant='filled' label='Confirm Password' className='confirmPasswordBox' InputProps={{disableUnderline: true}}></TextBox>
          
          <SignUpButton>Sign Up</SignUpButton>
          <div className='alreadyMember'>
            <p className='question'>Already a member?</p>
            <Link to='/signin'>
              <LogInButton>Log In</LogInButton>
            </Link>
          </div>


        </AccountCreationContainer>
      </div>
    )
  }
}
AccountCreationView.propTypes = {
}

export default AccountCreationView;