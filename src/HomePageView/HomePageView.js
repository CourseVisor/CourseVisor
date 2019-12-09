import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import SubmitButtonView from "../SubmitButtonView/SubmitButtonView.js";
import "./HomePageView.scss";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

const styles4SearchBar = {
  resize: {
    fontSize: 50
  },
}
const TextBox = withStyles({
  root: {
    width: "45%",
    marginTop: "1rem",
    border: "solid #F3D5FE",
    // overflow: "hidden",
    borderRadius: 3,
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
      query: "",
      error: false
    };
  }

  updateQuery = event => {
    if (event.target.value.length >= 20) {
      document.getElementById("SearchErrorMessage").innerHTML = "Search cannot exceed 20 characters";
      document.getElementById("SearchErrorMessage").style.display = "block";
    }
    this.setState({ query: event.target.value.replace(" ", "%20") });
  };
  searchFor = event => {
    event.preventDefault();
    if (this.state.query != "") {
      window.open("/results/" + this.state.query, "_self")
    } else {
      document.getElementById("SearchErrorMessage").innerHTML = "Please provide a class to search.";
      document.getElementById("SearchErrorMessage").style.display = "block"
    }
  }

  render() {
    const route = this.props.currentUser ? "/new-review" : "/signin";
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
                inputProps={{
                  maxLength: 20,
                }}
              ></TextBox>
            </div>
            <SearchIcon onClick={this.searchFor} fontSize="large" color="disabled" component={svgProps => {
              return (
                <svg {...svgProps}>
                  <defs>
                    <linearGradient id="gradient1">
                      <stop offset="0%" stopColor={"#BD36EC"} />
                    </linearGradient>
                  </defs>
                  {React.cloneElement(svgProps.children[0], {
                    fill: 'url(#gradient1)',
                  })}
                </svg>
              );
            }}
            />
            <p id="SearchErrorMessage" class="SearchErrorMessage"></p>
          </form>
        </div>
        <div id="or-text" className="or-text">-- or --</div>
        <Link to={route}>
          <SubmitButtonView />
        </Link>
      </div>
    );
  }
}
HomePageView.propTypes = {};

export default HomePageView;