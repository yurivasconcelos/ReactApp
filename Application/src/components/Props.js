import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
      <div style={styles}>
        {this.props.firstName}
      </div>
    )
  }
}

const styles = {
    backgroundColor: "grey",
    width: "300px"
}