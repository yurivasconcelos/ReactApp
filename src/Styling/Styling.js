import React from 'react'
import { Route, Link } from 'react-router-dom'

import StyleFromOutside from './StyleFromOutside'
import StyledComponent from './StyledComponent'
import StyledWidthSass from './StyledWidthSass'

import { Button } from 'antd'


export default class Styling extends React.Component {
  render() {
    console.log('rendered');
    return (
      <div>
        Hi There..
        <Link to='/styling/outside'>
          <Button>Style from outside</Button>
        </Link>
        <Link to='/styling/sass'>
          <Button>Style using Sass</Button>
        </Link>
        <Link to='/styling/styledComponent'>
        <Button> Styled Component</Button>
        </Link>


        <Route path="/styling/outside" component={StyleFromOutside}></Route>
        <Route path="/styling/styledcomponent" component={StyledComponent}></Route>
        <Route path="/styling/sass" component={StyledWidthSass}></Route>
      </div>
    )
  }
}