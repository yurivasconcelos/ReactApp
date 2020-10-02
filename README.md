## React

Easy start: 

```
Create the app with babel, all configured, etc - 

npx create-react-app my-app
npx create-react-app my-app --template typescript

cd my-app
npm start
```

In React you have two ways of defining components.

Writing a class and extending from Component
Writing a function and returning JSX

```javascript
import React, { useState, useContext, createContext } from "react";
```

https://reactjs.org/docs/hello-world.html

## how to declare a functional component

In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

obs: they can now have lifecycle methods, state, etc via hooks

```javascript
export const Fc = () => {
  return <div />;
};

//or - note the return ()

export const Fc = () => {
    return (
        <div>
            <p>first component</p>
        </div>
    )
}
```

## how to declare a functional component with props
```javascript
export const FCp = (props: any) => {
  return <div>{props}</div>;
};
```

## using event handlers in functional components
```javascript
export const Fcpevents = () => {
  const handleBtnClick = () => {
    console.log("clicked");
  };
  return <button onClick={handleBtnClick}></button>;
};
```

## condition rendering:

```javascript
import React from "react";

export const Main = () => {
  return (
    <div>
      <p>{false && 'hey'}</p>
      <p>{1==1 && 'hey x'}</p>
    </div>
  );
};

```

## condition rendering example 2
```javascript
import React from "react";

const ishttp = window.location.href == "yuri";

export const Main = () => {
  return (
    <div>
      {ishttp && <NewComponent/>}
    </div>
  );
};

const NewComponent = () => <div></div>
```

## lists rendering:

```javascript
import React, { useState, useEffect } from "react";

export const Main = () => {
  return (
    <div>
      <ul>
      {[1,2,3].map(x=> <li>{x}</li>)}
      </ul>
    </div>
  );
};
```

```javascript
import React, { useState, useEffect } from "react";

export const Main = () => {
  return (
    <div>
      <p>{false && 'hey'}</p>
      <p>{1==1 && 'hey x'}</p>
    </div>
  );
};
```


## using functions outside your component is possible.
`
```javascript
//just a normal function anywhere
const handleOutside = () => {
  console.log("ouside");
};

//component
export const FcpOutside = () => {
  return <div onClick={handleOutside}></div>;
};
```


## use state in functional components (wasn't possible before, but now with hooks is possible.)
https://reactjs.org/docs/hooks-intro.html - have alook at useState

```javascript
// they were even called stateless components before... now just function components.

export const FcwState = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });

  const handleChangeAgeViaButton = () => {
    setPerson({ name: "yuri", age: 30 });
  };

  return (
    <div>
      <button onClick={handleChangeAgeViaButton}>
        Change age via state {person.name} {person.age}
      </button>
    </div>
  );
};
```

## How to declare a class componen


```javascript
export class CComp extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for</h1>
      </div>
    );
  }
}
```

## how to declare a class component with props

```javascript
export class CCompp extends React.Component<{ nome: string }> {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.nome}</h1>
      </div>
    );
  }
}

//note: React.Component< {MY PROPS VALUES DEFINITION} >
```

## How to declare a class component with state and props
```javascript
class CCState extends React.Component<{name:string}> {
  constructor(props: {name:string} ) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.name}
      </button>
    );
  }
}
```

## How to set state in a class component

```javascript
class CCStateSet extends React.Component<{name:string}> {
  constructor(props: {name:string} ) {
    super(props);
    this.state = {
      value: null,
    };
  }
  newState = {name:"novo"}

  render() {
    return (
      <button className="square" onClick={() => this.setState(this.newState)}>
        {this.props.name}
      </button>
    );
  }
}
```

## Full State and events in Class components
please read https://fettblog.eu/this-in-javascript-and-typescript/
to understand the .bind() in javascript
```javascript

```


## passing events as props, so the child can do an operation in the main (top level component)

```javascript
export const Main = () => {
  const handleClickFromSub = () => {
    console.log("handled");
  };
  return (
    <div>
      <p>this is main component</p>
      <Sub decideOnClick={handleClickFromSub} />
    </div>
  );
};

export const Sub = (props: { decideOnClick: any }) => {
  return (
    <div>
      <p>This is my sub component</p>
      <button onClick={props.decideOnClick}>Console</button>
    </div>
  );
};
```

## Passing events as props
setting the state in the main function and then re-render the sub component, as we are passing the state as prop

passing events as props, so the child can do an operation in the main (top level component)

```javascript
export const MainC = () => {
  const [mycolor, setColor] = useState({color: "green"})

  const handleClickFromSub = () => {
    console.log("handled");
    setColor({color:"red"});
  };

  return (
    <div>
      <p>this is main component</p>
      <SubC decideOnClick={handleClickFromSub} color={mycolor.color} />
    </div>
  );
};

export const SubC = (props: { decideOnClick: any; color: string }) => {
  return (
    <div>
      <p>This is my sub component</p>
      <button onClick={props.decideOnClick}>Console</button>
      <button style={{backgroundColor: props.color}}>AAAAA</button>
    </div>
  );
};
```

## using context
context is used to pass props to the sub-sub-sub components, without having to pass to each of the components.
- using hooks -> useContext

```javascript
const UserContext = createContext({ name: "" });

export const Main1 = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: "PROP FROM MAIN" }}>
        <div>
          <p style={{ backgroundColor: "lightgrey" }}>
            This is my main component
          </p>
        </div>
        <Sub1 />
      </UserContext.Provider>
    </div>
  );
};

export const Sub1 = () => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <p>This is my sub component</p>
      <Sub2 />
    </div>
  );
};

export const Sub2 = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <p>This is my sub component 2</p>
      <Sub3 />
    </div>
  );
};

export const Sub3 = () => {
  const myContext = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "pink" }}>
      <p>This is my sub component 3 using the value from the MAIN</p>
      <p>CONTEXT {myContext.name}</p>
    </div>
  );
};
```

## using context part 2
context is used to pass props to the sub-sub-sub components, without having to pass to each of the components.
- using hooks -> useContext
- using state + context all together

```javascript
const User2Context = createContext({ name: "creating context" });

export const Main2C = () => {
  const [user, setUser] = useState({ name: "unnamed" });
  const handleOnClick = () => {
    setUser({ name: "yuri" });
  };
  return (
    <div>
      <User2Context.Provider value={{ name: user.name}}>
        <div>
          <p style={{ backgroundColor: "lightgrey" }}>
            This is my main component
          </p>
          <button onClick={handleOnClick}>CLICK ME TO SET THE COLOR IN THE SUB COMPONENT PROVIDER/CONTEXT</button>
        </div>
        <Sub1C />
      </User2Context.Provider>
    </div>
  );
};

export const Sub1C = () => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <p>This is my sub component</p>
      <Sub2C />
    </div>
  );
};

export const Sub2C = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <p>This is my sub component 2</p>
      <Sub3C />
    </div>
  );
};

export const Sub3C = () => {
  const myContext = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "pink" }}>
      <p>This is my sub component 3 using the value from the MAIN</p>
      <p>CONTEXT {myContext.name}</p>
    </div>
  );
};
```

## IMPORTING AND EXPORTING IN REACT/ES6 (EASY)

Imagine these exports form a file called 'Test.tsx'

```javascript
export const A = () => {};
export const C = "constant"

//OR
const F = () => {};
const G = "constant"

export {F, G}
```

Would import:
```javascript
  import * as T from "./Test";
  import {A,C, F, G} from "./Test";
```

Imagine that you have:
Imagine these exports form a file called 'Test.tsx'

```javascript
 export const A = () => {};
 export const C = "constant"
 const D = () => {}
 export default D;
```javascript

you then import as:

```javascript
import D, {A,C} from "./Test";
```


 you can also do:
 ```javascript
 import * as T from "./Test";
 ```
then access using T.A(), T.B()..  for some reason the default one is called T.default, even though the name in the exported class is D


## Default props

```javascript
DefaultProps is a relic from class-based React where you were able to set default values to your props. With function components, this is now basic JavaScript as you can see here. Still, you might get into some situations where setting defaultProps (or other static properties) is still necessary.

Since version 3.1, TypeScript has a mechanism to understand defaultProps and can set default values based on the values you set. However, React.FC types defaultProps, and thus breaks the connection to use them as default values. So this one breaks:

export const Greeting:FC<GreetingProps> = ({ name }) => {
  // name is string!
  return <h1>Hello {name}</h1>
};

Greeting.defaultProps = {
  name: "World"
};

const App = () => <>
  {/* Big boom 💥*/}
  <Greeting />
</>


```

How to set defaultValues in the class components
```javascript
class CatComponent extends React.Component {
    constructor(props) {}
    static defaultProps = {
        catName: "Sandy",
        eyeColor: "deepblue",
        age: "120"        
    }
    render() {
        return <div>{this.props.catName} Cat, Eye Color: {this.props.eyeColor }, Age: {this.props.age}</div>
    }
}
```



## Composition and children:
Basically you can pass a component to a compoment and then access it using the props.children
https://reactjs.org/docs/composition-vs-inheritance.html

```javascript
export const Main = () => {
  const elSub2 = Sub2();

  return (
    <div>
      <Sub>
        <Sub2 />
      </Sub>
    </div>
  );
};

export const Sub = (props: any) => {
  return (
    <div>
      <p>this is sub</p>
      {props.children}
    </div>
  );
};


export const Sub2 = () => {
  return <div style={{backgroundColor:"grey"}}>SUB 2</div>;
};
```


## Converting a Function to a Class
You can convert a function component like Clock to a class in five steps:

Create an ES6 class, with the same name, that extends React.Component.
Add a single empty method to it called render().
Move the body of the function into the render() method.
Replace props with this.props in the render() body.
Delete the remaining empty function declaration.

#  lifecycle methods
https://programmingwithmosh.com/javascript/react-lifecycle-methods/
https://reactjs.org/docs/react-component.html

Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component


Recap
React component lifecycle has three categories – Mounting, Updating and Unmounting.
The render() is the most used lifecycle method.
It is a pure function.
You cannot set state in render()

The componentDidMount() happens as soon as your component is mounted.
You can set state here but with caution.
The componentDidUpdate() happens as soon as the updating happens.
You can set state here but with caution.

The componentWillUnmount() happens just before the component unmounts and is destroyed.
This is a good place to cleanup all the data.
You cannot set state here.

The shouldComponentUpdate() can be used rarely.
It can be called if you need to tell React not to re-render for a certain state or prop change.
This needs to be used with caution only for certain performance optimizations.

The two new lifecycle methods are getDerivedStateFromProps() and getSnapshotBeforeUpdate().
They need to be used only occasionally.
Not many examples are out there for these two methods and they are still being discussed and will have more references in the future.

functional components : https://reactjs.org/docs/hooks-effect.html

![image](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)


## render()
The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React.

As the name suggests it handles the rendering of your component to the UI. It happens during the mounting and updating of your component.

Below is an example of a simple render() in React.

```javascript
class Hello extends Component{
   render(){
      return <div>Hello {this.props.name}</div>
   }
}
```

## componentDidMount()
Now your component has been mounted and ready, that’s when the next React lifecycle method componentDidMount() comes in play.

componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.

Unlike the render() method, componentDidMount() allows the use of setState(). Calling the setState() here will update state and cause another rendering but it will happen before the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering.

## componentDidUpdate()
This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.

You can call setState() in this lifecycle, but keep in mind that you will need to wrap it in a condition to check for state or prop changes from previous state. Incorrect usage of setState() can lead to an infinite loop.

## componentWillUnmount()
As the name suggests this lifecycle method is called just before the component is unmounted and destroyed. If there are any cleanup actions that you would need to do, this would be the right spot.


## Functional components and lifecycle methods
https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-function-component#:~:text=The%20property%20of%20function%20components,to%20use%20the%20lifecycle%20function.&text=Function%20components%20are%20useful%20when,the%20need%20of%20extra%20logic.

```javascript

import React, { useState, useEffect } from 'react';

export function Main() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```


## FORMS

https://reactjs.org/docs/forms.html

In HTML, form elements such as input, textarea, and select typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

```javascript
import React, { useState, useEffect } from 'react';
export class Main extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event:any) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

```
## Using React.FC<PropType>({destructprop}) 

```javascript
import React, { FC } from "react";

type GreetingProps = {
  name: string;
}

const Greeting:FC<GreetingProps> = ({ name }) => {
  // name is string!
  return <h1>Hello {name}</h1>
};


```
## Another way to avoid the FC (if you want)
```javascript


import React, { useState } from 'react';


const App = () => {
  return (
    <div>
      <p>Hello World</p>
      <Greeting name="YuriA"></Greeting>
    </div>
  )
}

const Greeting = ({ name }: GreetingProps)  => {
  return <h1>Hello {name}</h1>
}

type GreetingProps = {
  name: string,
}

export default App
```



lists of courses from react website

https://reactjs.org/community/courses.html

really good tutorial: https://www.youtube.com/watch?v=Ke90Tje7VS0

https://fettblog.eu/typescript-react-component-patterns/#preset-attributes