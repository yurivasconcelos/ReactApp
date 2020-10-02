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