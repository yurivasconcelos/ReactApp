import React, { Component } from 'react'
import '../styles/testingsass.scss';

import { Button } from 'antd';

export default class StyledWidthSass extends Component {

  state = {
    isGreen: false,
    classes: ['black', '']
  }

  changeColorA = () => {
    this.setState((prevState) => ({ isGreen: !prevState.isGreen }))
  }

  addBorder = () => {
    console.log('add')

    this.setState((prevState) => ({
      classes: [...prevState.classes, "border"]
    }))

    console.log(this.state.classes.join(' '));
  }

  render() {

    return (
      <React.Fragment>
        <div className="testingsass">
          Check if sass is working. this element has the testingsass class assigned to it.
        </div>

        <div className={this.state.isGreen ? "green" : "white"}>
          <Button onClick={this.changeColorA}> change to green via state and conditional</Button>
        </div>

        <div className={this.state.classes.join(' ')}>
          <p style={{color: "white"}}>append classes </p>
          <Button onClick={this.addBorder}>add border</Button>
        </div>


      </React.Fragment>
    )
  }


}
