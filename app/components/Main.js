var React = require('react');
var Nav = require('Nav');
var Main = React.createClass({
  render(){
    return(
      <div>
        <Nav/>
        <h3>Main Component</h3>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
