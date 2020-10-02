```javascript



import React from 'react';

const App = () => {

  const handleClick = (e: any) => {
    console.log('e', e);
    console.log('e-target', e.target);
  }

  const handleInputChange = (e: any) => {
    console.log('e', e);
    console.log('e.targe.values', e.target.value)
  }
  
  return (
    <div>
      <input type="text" onChange={handleInputChange}></input>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;


```