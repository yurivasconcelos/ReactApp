import React, { Component } from 'react'

export default class StyleInline extends Component {
  render() {
    return (
      <div style={styleVariable.root}>
        <p style={{color: "white"}}> Styled inline and from variable</p>
      </div>
    )
  }
}

const styleVariable  = {
    root: {
      background: "black"
    }
}

