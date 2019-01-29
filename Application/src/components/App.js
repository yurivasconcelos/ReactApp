import React, { Component } from 'react';
import ClassBased from './ClassBased'
import Stateless from './Stateless'
import Props from './Props'
import RenderChildren from './RenderChildren';
import StateComponent from './StateComponent';
import Event from './Event';
import EventParent from './EventParent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassBased/>
        <Stateless/>
        <Props firstName="Prop"/>
        <RenderChildren><p>children</p></RenderChildren>
        <StateComponent></StateComponent>
        <Event id="1"></Event>
        <EventParent/>
      </div>
    );
  }
}

export default App;
