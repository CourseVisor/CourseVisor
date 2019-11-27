import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OverAllRatingView.scss';
import StarRatings from "react-star-ratings";
import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  TextField,
  Tooltip,
  IconButton,
  Grid,
  Button
} from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

class OverAllRatingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      instructor: "",
      workloadRating: this.props.workload,
      gradingRating: this.props.grading,
      instructorRating: this.props.instructor,
      validate: null
    };
  }


  

  render() {
    return (
      <div className='OverAllRatingView'>
        <Container className="rating-container">
          <div id='overallRatCont'>
            <div id='leftLine'></div>
            <h5 id='overallBanner'>Overall Ratings</h5>
            <div id='rightLine'></div>
          </div>

          
          <div className='gradingContainer'>

            <div className='oneCriteria'>
              <div className='gradingTitle'>
                <p className='gradingTitles'>Workload</p>
                <Tooltip title="The workload of this course is rated from 1 star to 5 stars. 1 represents the most work and 5 represents minimal work">
                  <IconButton aria-label="help">
                    <HelpOutlineOutlinedIcon/>
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <p>{this.state.workloadRating} / 5</p>
              </div>
              <StarRatings
                      rating={this.state.workloadRating}
                      starDimension="2rem"
                      starRatedColor="#7800A2"
                      starHoverColor="#D88AF3"
                      // changeRating={this.changeWorkloadRating}
                      numberOfStars={5}
                      name="rating"
                    />
            </div>

            <div className='oneCriteria'>
              <div className='gradingTitle'>
                <p className='gradingTitles'>Grading</p>
                <Tooltip title="The grading of this course is rated from 1 star to 5 stars. 1 represents strict grading and 5 represents lenient grading">
                  <IconButton aria-label="help">
                    <HelpOutlineOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <p>{this.state.gradingRating} / 5</p>
              </div>
              <StarRatings
                      rating={this.state.gradingRating}
                      starDimension="2rem"
                      starRatedColor="#7800A2"
                      starHoverColor="#D88AF3"
                      // changeRating={this.changeWorkloadRating}
                      numberOfStars={5}
                      name="rating"
                    />
            </div>

            <div className='oneCriteria'>
              <div className='gradingTitle'>
                <p className='gradingTitles'>Instructor</p>
                <Tooltip title="The instructor of this course is rated from 1 star to 5 stars. 1 represents ineffective and 5 represents effective">
                  <IconButton aria-label="help">
                    <HelpOutlineOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <p>{this.state.instructorRating} / 5</p>
              </div>
              <StarRatings
                      rating={this.state.instructorRating}
                      starDimension="2rem"
                      starRatedColor="#7800A2"
                      starHoverColor="#D88AF3"
                      // changeRating={this.changeWorkloadRating}
                      numberOfStars={5}
                      name="rating"
                    />
            </div>



          </div>
        </Container>
      </div>


    )
  }
}


OverAllRatingView.propTypes = {
}

export default OverAllRatingView;