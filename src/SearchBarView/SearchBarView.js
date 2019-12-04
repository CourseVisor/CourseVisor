import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchBarView.scss';
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
//Enter course prefix and code to search for a course

const styles4SearchBar = {
  resize:{
    fontSize:50
  },
}
const TextBox = withStyles({
  root: {
    width: "45%",
    border: "2px solid #F3D5FE",
    // overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  input: {
    backgroundColor: "white"
  },
})(TextField);

class SearchBarView extends Component {
  constructor(props){
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
  render(){
    return (
      <div className="SearchBarView">
        <form onSubmit={this.searchFor}>
            <div>
              <TextBox
                name="seartchingFor"
                variant="filled"
                label="Enter Course Prefix and Code"
                className="searchQuery"
                defaultValue={this.props.defaultViewSearch}
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
    )
  }
}
SearchBarView.propTypes = {
}

export default SearchBarView;