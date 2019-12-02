import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './IndividualReviewView.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';

class IndividualReviewView extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="IndividualReviewView">
        <div className="ReviewUser">
          <AccountCircleIcon />
          <div className="ReviewUserUsername">this.props.username</div>
        </div>
        this.props.username
        this.props.username
        this.props.username
        this.props.username
      </div>
    )
  }
}
IndividualReviewView.propTypes = {
}

export default IndividualReviewView;