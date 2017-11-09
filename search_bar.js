import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';


class SearchBar extends React.Component{
  constructor(){
    super();
    this.state={term:''};
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({term:event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }
  render(){
    return(
      <form
        onSubmit={this.onFormSubmit}
        action=""
        className="search-bar">
        <input
          placeholder="Please, enter city"
          value={this.state.term}
          onChange={this.onInputChange}
          type="text"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-info">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
