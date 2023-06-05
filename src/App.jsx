import React from "react";
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount((count += 1));
  };

  const decrement = () => {
    setCount((count -= 1));
  };

  return (
    <div className="main-container">
      <div className="main">
        <h1>{count}</h1>
        <div className="button-area">
          <button onClick={increment} className="increment">
            Increment
          </button>
          <button onClick={decrement} className="decrement">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
