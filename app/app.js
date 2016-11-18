var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Examples = require('Examples');
var About = require('About');
var Weather = require('Weather');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={Weather}/>
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
  </Route>
</Router>,
  document.getElementById('root')
);
