var React = require('react');
var WeatherForm = React.createClass({
  search(){
    var location = this.refs.location.value;
    this.props.onSearch(location);
    this.refs.location.value = "";
  },
  render(){
    return(
      <div>
        <input type="text" ref="location" placeholder="Enter your city"/>
        <button onClick={this.search}>Get Weather</button>
      </div>
    );
  }
});

module.exports = WeatherForm;
