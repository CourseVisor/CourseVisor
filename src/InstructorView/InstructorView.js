import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './InstructorView.scss';

class InstructorView extends Component {
  constructor(props){
    super(props);
    console.log(this.props.location.pathname.split("/course/")[1]);
  }
  render(){
    return (
      <div className="InstructorView">
    
      </div>
    )
  }
}
InstructorView.propTypes = {
}

export default InstructorView;