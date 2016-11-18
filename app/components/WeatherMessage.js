var React = require('react');
var WeatherMessage = React.createClass({
  render(){
    var location = this.props.location;
    var temp = this.props.temp;
    return(
      <div>
        <h3>{location} is now {temp}</h3>
      </div>
    );
  }
});

module.exports =WeatherMessage;
