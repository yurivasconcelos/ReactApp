import React from "react";
import { MouseOver } from "./components/MouseOver";

const App = () => {
  return (
    <div>
      <MouseOver>
        <DivComponent></DivComponent>
      </MouseOver>
    </div>
  );
};

const DivComponent = () => {
  return (
    <div style={{ width: 100, backgroundColor: "grey", height: 200 }}>
      <p>DIV COMPONENT!</p>
    </div>
  );
};

export default App;
