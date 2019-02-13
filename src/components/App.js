import React, { Component } from 'react';
import JSXComponent from './JSXComponent';
import ClassBased from './ClassBased'
import Stateless from './Stateless'
import Props from './Props'
import RenderChildren from './RenderChildren';
import StateComponent from './StateComponent';
import Event from './Event';
import EventParent from './EventParent';
import Forms from '../Forms/Forms';
import PropTypesComponent from './PropTypes';
import RefComponent from './RefComponent';
import MouseTracker from './MouseTrackerComponent';
import Styling from '../Styling/Styling';
import HighOrderComponent from './HighOrderComponent'
import HighOrderUseBorder from './HighOrderUseBorder';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/classBased" component={ClassBased} />
          <Route path="/stateless" component={Stateless} />
          <Route path="/jsxcomponent" component={JSXComponent} />
          <Route path="/props" component={Props} />
          <Route path="/children" component={RenderChildren} /> 
          <Route path="/refs" component={RefComponent} />
          <Route path="/PropTypesComponent" component={PropTypesComponent} />
          <Route path="/StateComponent" component={StateComponent} />
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

export default App;

