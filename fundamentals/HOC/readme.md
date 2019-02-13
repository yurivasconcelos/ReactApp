High order components uses the same concept as high order functions, 
this means, a function that returns another function

HOC = function that creates anotherfunction.


-----

# HIGH ORDER FUNCTIONS

So I would say that is a helper to create functions.

Sometimes, it even looks like inheratance, baseclass..but for functions.


```javascript
const multiplyBy = (n) => {
    return (numero) => {
		return numero*n;
	}
}

const multiplyBy50 = multiplyBy(50);

multiplyBy50(3); //returns 150

//So, as you can see I could create a new function from a function.


//this could be  simplified by
const multiplyByX = (n) => {return x => x * n};

const multiplyByX = (n) => x => x * n;

const multiplyByX = n => x => x * n;


//another example:

var highorderfunction = (a,b,c) => (x,y,z) => {
	console.log(a,b,c,x,y,z);
}


var myfunctionFromHighOrder = highorderfunction(1,2,3)

myfunctionFromHighOrder(99,199,299)

//output: 1 2 3 99 199 299


```


----

# HIGH ORDER COMPONENTS

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

Concretely, a higher-order component is a function that takes a component and returns a new component.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

```javascript
function logProps(InputComponent) {
  InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
    console.log('Current props: ', this.props);
    console.log('Next props: ', nextProps);
  };
  // The fact that we're returning the original input is a hint that it has
  // been mutated.
  return InputComponent;
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(InputComponent);


```


```javascript
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

```