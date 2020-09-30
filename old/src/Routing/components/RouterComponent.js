import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Button} from 'antd'

export default class RouterComponent extends Component {

  state= {
    authenticated: false
  }

  authenticate =  () => {
    this.setState(() => ({authenticated: true}))
  }

  render() {
    const { url } = this.props.match;
    return (
      <div>
        <div style={{ color: "grey" }}><h1>This example is to show that it will return all matched routes.</h1><p></p></div>
        <p>{`a way to overcome this issue is adding the exact prop to the <Route exact>`}</p>
        <p>{`for example, add an exact="true" in the /routes rootComponent, then when you access /routes/1 it won't match and therefore won't return`}</p>

        <Link to={url + '/routes'}>/Routes</Link>
        <Link to={url + '/routes/' + Math.random()}>/Routes/randomId</Link>
        <Link to={url + '/routes/1'}>/Routes/1</Link>

        <div>
          <Route path={url + '/routes'} component={RootComponent}></Route>
          {/* <Route path={url + '/routes'} exact="true" component={RootComponent}></Route> */}
          <Route path={url + '/routes/:id'} component={IdComponent}></Route>
          <Route path={url + '/routes/1'} component={IdComponent}></Route>

          {/* {Route Guard Example} */}
          
          <Link to={url + '/auth'}>Tente accessar rota sem autenticar e depois autenticando. </Link>
          
          <Button onClick={this.authenticate}>Autenticar</Button>
          {this.state.authenticated && <Route path={url + '/auth'} component={Admin}></Route>}



        </div>
      </div>
    )
  }
}

const RootComponent = () => {
  return (
    <div>OK from root</div>
  )
}

const IdComponent = () => {
  return <div>
    id...
  </div>
}

const Admin = () => {
  return <div>admin ok</div>
}
