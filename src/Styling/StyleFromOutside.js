import React, { Component } from 'react'
import {styleFromOutside} from './styles/fromOutside';

export default class StyleFromOutside extends Component {
  render() {
    return (
      <div style={styleFromOutside}>
        styled from outside.
      </div>
    )
  }
}