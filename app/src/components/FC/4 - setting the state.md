```javascript
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState({ id: '', login: '' });

  const handleClick = (e: any) => {
    setName('Yuri');
    setUser({ ...user, id: '1' });
  };

  return (
    <div>
      <p>state : .... {name}</p>
      <p>state : .... {user.id}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;

