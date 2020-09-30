//https://reactjs.org/docs/events.html

import React, { Component } from 'react';
import EventChild from './EventChild';


export default class EventParent extends Component {
  render() {
    return (
      <div style={{backgroundColor: "grey", width: "300px"}}>
        
        <EventChild parentClick={this.handleClick}></EventChild>

      </div>
    )
  }
  handleClick = (e, id) => {
    console.log('hi from parent', id, e);
  }
}
