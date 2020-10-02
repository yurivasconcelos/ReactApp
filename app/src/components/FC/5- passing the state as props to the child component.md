```javascript 
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState({ id: '', login: '' });

  const handleClick = (e: any) => {
    setName('Yuri');
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <Test name={name}/>
    </div>
  );
};

const Test = (props: any) => {
  return (<div>{props.name}</div>)
}

export default App;
