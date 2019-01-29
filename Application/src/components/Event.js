//https://reactjs.org/docs/events.html

import React, { Component } from 'react'

export default class Event extends Component {
  render() {
    return (
      <div style={{backgroundColor: "grey", width: "300px"}}>
        
        <button id="myId" onClick={(e) => this.handleClick(this.props.id, e)}>Click</button>

      </div>
    )
  }

  handleClick = (id, e) => {
    console.log(id, e);
  }
}
