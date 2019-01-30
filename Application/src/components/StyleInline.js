import React, { Component } from 'react'

export default class StyleInline extends Component {
  render() {
    return (
      <div style={{color: "green", width: "300px"}}>
        <h1>Styling</h1>

        <div style={styles}>
            styling from const styles..
        </div>
      </div>
    )
  }
}


const styles = {
    backgroundColor: "grey",
    width: "300px"
}