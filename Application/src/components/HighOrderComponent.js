//read ../fundamentals/HOC/readme.md in this project.

import React, { Component } from 'react'

export default class HighOrderComponent extends Component {
  render() {
    return (
      <div>
        <NewComponent></NewComponent>
      </div>
    )
  }
}

const ComponentToBeWrapped = () => {
  return (
    <div>
      <p>New Component</p>
    </div>
  )
}

const TheWrapperComponent = (Component) => {
  return class extends React.Component{
    render(){
      return (
        <div>
          <p>new wrapped</p>
          <Component/>
        </div>
      )
    }
  }

}

const NewComponent = TheWrapperComponent(ComponentToBeWrapped);
