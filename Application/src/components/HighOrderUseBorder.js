import React, { Component } from 'react'
import withHighOrderMakeBorderRed from './HighOrderComponentMakeBorderRed';


export default class HighOrderUseBorder extends Component {
  render() {
    return (
      <div>
        <NewComponent></NewComponent>
      </div>
    )
  }
}


const ThisComponent = () => {
  return (
    <div>transformed via HOC</div>
  )
}

const NewComponent = withHighOrderMakeBorderRed(ThisComponent)