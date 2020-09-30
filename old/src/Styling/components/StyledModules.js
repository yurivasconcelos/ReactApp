import React, { Component } from 'react'
import styles from '../style_modules/mystyle.module.css'

export default class StyledModules extends Component {
  render() {
    return (
      <div className={styles.first}>
        ok?
      </div>
    )
  }
}
