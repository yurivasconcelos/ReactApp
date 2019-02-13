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
import HighOrderComponent from './components/HighOrderComponent'
import HighOrderUseBorder from './components/HighOrderUseBorder';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'antd/dist/antd.css'

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

