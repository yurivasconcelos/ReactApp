import React, { Component } from 'react';


import JSXComponent from './components/JSXComponent';
import ClassBased from './components/ClassBased'
import Stateless from './components/Stateless'
import Props from './components/Props'
import RenderChildren from './components/RenderChildren';
import StateComponent from './components/StateComponent';
import Event from './components/Event';
import EventParent from './components/EventParent';
import Forms from './Forms/Forms';
import PropTypesComponent from './components/PropTypes';
import RefComponent from './components/RefComponent';
import MouseTracker from './components/MouseTrackerComponent';
import Styling from './Styling/Styling';
import RouterComponent from './Routing/components/RouterComponent';
import HighOrderComponent from './components/HighOrderComponent'
import HighOrderUseBorder from './components/HighOrderUseBorder';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'antd'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/classBased" component={ClassBased} />
          <Route path="/stateless" component={Stateless} />
          <Route path="/jsxcomponent" component={JSXComponent} />
          <Route path="/props" component={Props} />
          <Route path="/children" component={RenderChildren} />
          <Route path="/refs" component={RefComponent} />
          <Route path="/PropTypesComponent" component={PropTypesComponent} />
          <Route path="/StateComponent" component={StateComponent} />
          <Route path="/Routing" component={RouterComponent} />
          <Route path="/Event" component={Event} />
          <Route path="/EventParent" component={EventParent} />
          <Route path="/styling" component={Styling} />
          <Route path="forms" component={Forms} />
          <Route path="/HOC" component={HighOrderComponent} />
          <Route path="/HOC_B" component={HighOrderUseBorder} />
          <Route path="/MouseTracker" component={MouseTracker} />
        </div>
      </Router>
    );
  }
}


const Home = () => {
  return (
    <React.Fragment>
      <Link to="/classBased"><Button>Class Based Component</Button></Link> <br />
      <Link to="/stateless"><Button>Stateless Component</Button></Link> <br />
      <Link to="/jsxcomponent"><Button>JSX Component</Button></Link> <br />
      <Link to="/props"><Button>Passing Props</Button></Link> <br />
      <Link to="/PropTypesComponent"><Button>Using Proptypes</Button></Link> <br />
      <Link to="/children"><Button>Render Children</Button></Link> <br />
      <Link to="/refs"><Button>Using Ref</Button></Link> <br />
      <Link to="/StateComponent"><Button>Using State</Button></Link> <br />
      <Link to="/Routing"><Button>Routing</Button></Link> <br />
      <Link to="/Event"><Button>Event</Button></Link> <br />
      <Link to="/EventParent"><Button>Calling the parent event</Button></Link> <br />
      <Link to="/styling"><Button>Styling</Button></Link> <br />
      <Link to="/forms"><Button>Forms</Button></Link> <br />
      <Link to="/HOC"><Button>High Order Component</Button></Link> <br />
      <Link to="/HOC_B"><Button>High Order Component 2</Button></Link> <br />
      <Link to="/mousetracker"><Button>Mouse Tracker</Button></Link> <br />
    </React.Fragment>
    )
}

export default App;

