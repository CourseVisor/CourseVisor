import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchBarView.css';

class SearchBarView extends Component {
  constructor(props){
    super(props);
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