var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var {getTemp} = require('openweathermap');
var Weather  = React.createClass({
  getInitialState(){
    return {location: 'Saigon', temp: 30}
  },
  show(location){
    var that = this;
    getTemp(location).then(function(temp){
      that.setState({location: location, temp: temp});
    }).catch(function(err){
      alert(err)
    })
  },
  render(){
    var {location, temp} = this.state;
    return(
      <div>
        <WeatherForm onSearch={this.show}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports =Weather
