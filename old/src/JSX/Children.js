import React, { Component } from 'react'

export default class RenderChildren extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


//https://reactjs.org/docs/react-api.html#reactchildrenmap
//React.Children provides utilities for dealing with the this.props.children opaque data structure.


