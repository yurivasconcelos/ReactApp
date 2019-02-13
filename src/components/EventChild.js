//https://reactjs.org/docs/events.html

import React, { Component } from 'react'

export default class EventChild extends Component {
  
  render() {
    return (
      <div style={{backgroundColor: "lightgrey", width: "300px"}}>
      <p>Event child / parent</p>
        
        <button id="myId" onClick={(e) => this.props.parentClick(e, "2")}>Click</button>

      </div>
    )
  }
  
}
