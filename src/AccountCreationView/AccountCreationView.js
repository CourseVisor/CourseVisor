import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AccountCreationView.css';

class AccountCreationView extends Component {

  constructor(props){
    super(props);

    this.state = {
      'email':undefined,
      'password':undefined,
      'userName':undefined,
    }
  }
  render(){
    return (
      <div className="AccountCreationView">
    
      </div>
    )
  }
}
AccountCreationView.propTypes = {
}

export default AccountCreationView;