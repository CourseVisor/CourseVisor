import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './IndividualReviewView.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarRatings from "react-star-ratings";

class IndividualReviewView extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="IndividualReviewView">
        <div className="ReviewUserDiv">
          <AccountCircleIcon style={{ color: "#42005A", fontSize: 32 }} />
          <p className="Subtitle1 ReviewUsername">{this.props.username}</p>
        </div>
        <div className="ReviewRatingDiv">
          <div className="ReviewRating">
            <p className="Subtitle1 ReviewRatingTitle">Workload</p>
            <div>
              <StarRatings
                rating={this.props.workload}
                starDimension="1rem"
                starRatedColor="#F9D51F"
                starHoverColor="#D88AF3"
                numberOfStars={5}
                name="rating"
              />
            </div>
            <p className="ReviewRatingNumber">{this.props.workload}/5</p>
          </div>
          <div className="ReviewRating">
            <p className="Subtitle1 ReviewRatingTitle">Grading</p>
            <div>
              <StarRatings
                rating={this.props.grading}
                starDimension="1rem"
                starRatedColor="#F9D51F"
                starHoverColor="#D88AF3"
                numberOfStars={5}
                name="rating"
              />
            </div>
            <p className="ReviewRatingNumber">{this.props.grading}/5</p>
          </div>
          <div className="ReviewRating">
            <div className="ReviewRatingTitle Subtitle1">Instructor</div>
            <div>
              <StarRatings
                rating={this.props.instructor}
                starDimension="1rem"
                starRatedColor="#F9D51F"
                starHoverColor="#D88AF3"
                numberOfStars={5}
                name="rating"
                className="starRating"
              />
            </div>
            <div className="ReviewRatingNumber">{this.props.instructor}/5</div>
          </div>
        </div>
        <div className="ReviewCommentDiv">
          <p className="Subtitle1">Comment</p>
          <p className="ReviewComment">{this.props.comment}</p>
        </div>
      </div>
    )
  }
}
IndividualReviewView.propTypes = {
}

export default IndividualReviewView;