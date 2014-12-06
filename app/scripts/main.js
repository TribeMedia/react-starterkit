var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Home = require('./pages/home.jsx');
var Info = require('./pages/info.jsx');
var NotFound = require('./pages/notFound.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="info" handler={Info}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});