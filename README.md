## React

```
npx create-react-app my-app
npx create-react-app my-app --template typescript

cd my-app
npm start

https://reactjs.org/docs/hello-world.html
```





## Functional Components -> Creation Examples

```javascript
import React from "react";

const Component1 = () => <div />;

//without return
const Component2 = () => (
    <div>
      <p>A</p>
    </div>
  );
};

const Component3 = () => {
  return (
    <div/>
  )
}

//or - note the return ()

const Fc = () => {
    return (
        <div>
            <p>first component</p>
        </div>
    )
}
```

## Functional Components -> Props
```javascript
const FCp = (props: any) => {
  return <div>{props}</div>;
};
```

## Functional Components -> Event Handlers
```javascript
export const Fcpevents = () => {
  const handleBtnClick = () => {
    console.log("clicked");
  };
  return <button onClick={handleBtnClick}></button>;
};
```


## Functions outside render.

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

## State in functional components 
> https://reactjs.org/docs/hooks-intro.html - have alook at useState

- states were only in class components before, but now with hooks it's possible.
- they were even called stateless components... now just function components.


```javascript
import React, {useState} from 'react'

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

## How to declare a class component

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


## Child firing an event in the parent. 
Passing events as props, so the child can do an operation in the main (top level component)

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

## Context API
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

## Context - Complex
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

https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

## Exporting
we have only two types of exports: *_named_* and *_default_*

*Default* ones should be explicitally called default, by doing one of the following:
Can only have 1 default PER module (file);

- export default function myFunction() {}
- export {MyFunction as default}
- export default MyFunction


*Named exports*:
- export const MyFunction = () => {} 
- export {MyFunction, AnotherFunction}
- export {F1 as Func1}


Combining both:
- export {F1 as default, F2, F3}

Exporting from:
- export * from '..'
- export * as namespace from '..'

remember, export *' does not re-export a default export, only the named ones.

## Importing:

Default ones you don't  need the {}:

import MyFunction from './fncs'

importing the named ones:
import {F1, F2, F3} from './fncs'

importing combined:
import D1, {F1, F2} from './fncs'


importing everything at once
import * from './exports'
import * as MYE from './exports'

renaming importing: 
import {F1 as MYF1} from './fncs'

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

functional components : https://reactjs.org/docs/hooks-effect.html

![image](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component


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

import { useEffect, useRef } from "react";

export const componentDidMount = handler => {
  return useEffect(() => {
    return handler();
  }, []);
};

export const componentDidUpdate = (handler, deps) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      return;
    }

    return handler();
  }, deps);
};
Usage

import { componentDidMount, componentDidUpdate } from "./utils";

export const MyComponent = ({ myProp }) => {
  componentDidMount(() => {
    console.log("Component did mount!");
  });

  componentDidUpdate(() => {
    console.log("Component did update!");
  });

  componentDidUpdate(() => {
    console.log("myProp did update!");
  }, [myProp]);
};  
```



