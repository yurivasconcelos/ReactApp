//https://reactjs.org/docs/events.html

import React, { Component } from 'react'

export default class EventChild extends Component {
  
  render() {
    return (
      <div style={{backgroundColor: "grey", width: "300px"}}>
        
        <button id="myId" onClick={(e) => this.props.parentClick(e, "2")}>Click</button>

      </div>
    )
  }
  
}
