
# Styling 

`Styling can be done by many different ways:`

&nbsp;

## Inline
----
```html
<div style={{backgroundColor:"black", width:"300px"}}>
```

## From variable
```html
<div style={stylesvariable}>
```

```javascript
const stylesvariable = {
    backgroundColor:"black", 
    width:"300px"
}
```
----
## From outside
```javascript
import myfile from './styles/myfile/

<div styles={myfile}></div>

```
----

## Styled Components


```
npm install styled-components
yarn add styled-components
```

styled-components utilises tagged template literals to style your components.

It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.


```javascript 
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
```


----

## Using pre-processor sass

```javascript
$ npm install node-sass --save
or
$ yarn add node-sass
```

add a styles folder
```javascript
style/mysassfile.scss
```

import it from your app.js:
```
import '../styles/mysassfile.scss';
```
