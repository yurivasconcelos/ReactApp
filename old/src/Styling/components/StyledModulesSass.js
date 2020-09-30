import React, { Component } from 'react'

import styles from '../style_modules_sass/mystyle.module.scss'
import { Button } from 'antd'

export default class StyledModuleSass extends Component {
  state = {
    bgcolor: styles.first,
    classes: [styles.first]
  }
  changeColorToRed = () => {
    this.setState(() => ({
      bgcolor: styles.red
    }))
  }

  addBorder = () => {
    this.setState((prevState) => ({
      classes: [...prevState.classes, styles.border]
    }))
    console.log(this.state);
  }

  render() {
    console.log(styles);
    return (
      <React.Fragment>
        <div className={styles.first}>
          hello world?
        </div>

        <div className={this.state.bgcolor}>
          <Button onClick={this.changeColorToRed}>Change Color</Button>
        </div>

        <div className={this.state.classes.join(' ')}>
          <Button onClick={this.addBorder}>Add Border</Button>
        </div>

      </React.Fragment>
    )
  }



}
