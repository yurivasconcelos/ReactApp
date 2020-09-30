import React from 'react'
import { Route, Link } from 'react-router-dom'

import StyleFromOutside from './components/StyledInline'
import StyledComponent from './components/StyledComponent'
import StyledWidthSass from './components/StyledWidthSass'
import StyledModules from './components/StyledModules'
import StyledModulesSass from './components/StyledModulesSass'

import { Button } from 'antd'


export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/styling/outside'>
            <Button>Style from outside</Button>
          </Link>
          <Link to='/styling/sass'>
            <Button>Style using Sass</Button>
          </Link>
          <Link to='/styling/styledComponent'>
            <Button> Styled Component</Button>
          </Link>
          <Link to='/styling/stylingModules'>
            <Button> Styled Modules</Button>
          </Link>

          <Link to='/styling/stylingModulesSass'>
            <Button> Styled Modules Sass</Button>
          </Link>

          
        </div>
        <br /><br /><br /><br />


        <Route path="/styling/outside" component={StyleFromOutside}></Route>
        <Route path="/styling/styledcomponent" component={StyledComponent}></Route>
        <Route path="/styling/sass" component={StyledWidthSass}></Route>
        <Route path="/styling/stylingModules" component={StyledModules}></Route>
        <Route path="/styling/stylingModulesSass" component={StyledModulesSass}></Route>
      </div>
    )
  }
}