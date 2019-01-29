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
