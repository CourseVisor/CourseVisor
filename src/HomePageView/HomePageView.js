import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SubmitButtonView from "../SubmitButtonView/SubmitButtonView.js";
import "./HomePageView.scss";
import { Link } from "react-router-dom";

class HomePageView extends Component {
  constructor(props) {
    super(props);
  }

  updateQuery = event => {
    this.setState({ query: event.target.value });
  };
  searchFor = event => {
    event.preventDefault();
    if (this.state.query != "") {
      window.open("/results/"+this.state.query,"_self")
    } else {
      document.getElementById("SearchErrorMessage").style.display = "block"
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
            <p id="SearchErrorMessage" class="SearchErrorMessage">Please provide a class to search.</p>
          </form>
        </div>
        <div id="or-text" className="or-text">-- or --</div>
        <Link to="/new-review">
          <SubmitButtonView />
        </Link>
      </div>
    );
  }
}
HomePageView.propTypes = {};

export default HomePageView;
