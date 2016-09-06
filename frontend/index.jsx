const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const App = require('./components/app');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
)
document.addEventListener('DOMContentLoaded', ()=>{
  ReactDOM.render(router, document.getElementById('content'));
})
