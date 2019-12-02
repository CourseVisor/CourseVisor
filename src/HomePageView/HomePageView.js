import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import SubmitButtonView from "../submitButtonView/SubmitButtonView.js";
import "./HomePageView.scss";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const styles4SearchBar = {
  resize:{
    fontSize:50
  },
}
const TextBox = withStyles({
  root: {
    width: "45%",
    marginTop: "1rem",
    border: "5px solid #F3D5FE",
    // overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  input: {
    backgroundColor: "white"
  },
  
})(TextField);

class HomePageView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  updateQuery = event => {
    this.setState({ query: event.target.value });
  };
  searchFor = event => {
    event.preventDefault();
    if (this.state.query != "") {
      window.open("/results/"+this.state.query,"_self")
    }
  }

  render() {
    return (
      <div className="HomePageView">
        <h1 className="search-text">
          Search for a <span className="course">course</span> review
        </h1>
        <div className="searchView">
          <form onSubmit={this.searchFor}>
            <div>
              <TextBox
                name="seartchingFor"
                variant="filled"
                label="Enter Course Prefix and Code (ex. INFO 442)"
                className="searchQuery"
                InputProps={{ disableUnderline: true }}
                onChange={this.updateQuery}
                
              ></TextBox>
            </div>
            <SearchIcon onClick={this.searchFor} fontSize="large" color="disabled" component={svgProps => {
                return (
                  <svg {...svgProps}>
                    <defs>
                      <linearGradient id="gradient1">
                        <stop offset="0%" stopColor={"#DADADA"} />
                      </linearGradient>
                    </defs>
                    {React.cloneElement(svgProps.children[0], {
                      fill: 'url(#gradient1)',
                    })}
                  </svg>
                );
              }}
            />
          </form>
        </div>
        <div className="or-text">-- or --</div>
        <Link to="/new-review">
          <SubmitButtonView />
        </Link>
      </div>
    );
  }
}
HomePageView.propTypes = {};

export default HomePageView;