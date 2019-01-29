import React, { Component } from 'react'

export default class RefComponent extends Component {

  myRef = React.createRef();

  render() {
    return (
      <div>
        <p ref={myRef}>Refs</p>
        <button onClick={this.handleClick}>log ref</button>
      </div>
    )
  }

  handleClick = () => {
      console.log(this.refs.myRef);
  }
}
