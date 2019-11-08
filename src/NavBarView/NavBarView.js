import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NavBarView.scss';

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

import Button from '@material-ui/core/Button';


import { createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
// }));

const theme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        position: 'absolute',
        left: '14.17%',
        right: '14.17%',
        top: '27.5%',
        bottom: '25%',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '14px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'capitalize',

        color: '#FFFFFF',
      },

      // root: {
      //   position: 'relative',
      // }
    },
  },
});


const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
    fontFamily: 'Roboto',
    fontWeight: 'bold',

    position: 'absolute',
    width: '90px',
    height: '30px',
    left: '1150px',
    top: '20px',

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
        <ThemeProvider theme={theme}>
          <Button className='signIn'>Sign In</Button>
          <Button className='signUp'>Sign Up</Button>
        </ThemeProvider>

        {/* <StyledButton>Styled Button</StyledButton> */}
      </nav>
    )
  }


}

export default NavBarView;