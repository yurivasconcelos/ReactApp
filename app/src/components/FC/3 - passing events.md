```javascript

import React from 'react';

const App = () => {
  const handleClick = (e: any) => {
    console.log('e', e);
    console.log('e-target', e.target);
  };

  return (
    <div>
      Main Compoment
      <Test name="yuri" userClick={handleClick}></Test>
    </div>
  );
};

const Test = (props: { name: string; userClick: any }) => {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={props.userClick}>USER CLICKED</button>
    </div>
  );
};

export default App;
