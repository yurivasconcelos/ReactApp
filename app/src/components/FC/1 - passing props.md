
```javascript

import React from 'react';

const App = () => {
  return (
    <div>
      <Test name='passing props'></Test>
    </div>
  );
};

export const Test = (props: { name: string }) => {
  return <div>{props.name}</div>;
};




```