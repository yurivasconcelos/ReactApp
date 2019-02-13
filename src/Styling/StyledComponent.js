import React, { Component } from 'react'
import styled from 'styled-components'

export default class StyledComponent extends Component {

  render() {
    return (
      <MyDiv>
            abc123
      </MyDiv>
    )
  }
}

const MyDiv = styled.div`
    background-color: red;
    width: 200px;
`

//this will transform the <MyDiv> to a  normal div. 