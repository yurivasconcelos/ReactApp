import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('initial name');

  const handleClick = (e: any) => {
    setName('yuri');
  };

  const isYuri = name == 'yuri';

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      {isYuri && <Test name={name} description='fromConditional' />}
      {[1, 2, 3].map((x) => (
        <Test name={name} fromLoop={true} description='fromLoop' />
      ))}
    </div>
  );
};

const Test = (props: any) => {
  return (
    <div>
      {props.name} - {props.description}
    </div>
  );
};

export default App;
