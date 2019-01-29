import React, { Component } from 'react';
import JSXComponent from './JSXComponent';
import ClassBased from './ClassBased'
import Stateless from './Stateless'
import Props from './Props'
import RenderChildren from './RenderChildren';
import StateComponent from './StateComponent';
import Event from './Event';
import EventParent from './EventParent';
import Forms from './Forms'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassBased/>
        <Stateless/>
        <JSXComponent/>
        <Props firstName="Prop"/>
        <RenderChildren><p>children</p></RenderChildren>
        <StateComponent/>
        <Event id="1"/>
        <EventParent/>
        <Forms/>
      </div>
    );
  }
}

export default App;
