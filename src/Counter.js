import React, { useState } from "react";
import Btn from "./Btn";
import './index.css';

const Counter = () => {
const [count, setCount] = useState(0);


function handleAdd() {
    setCount(count+1);
  }
  function handleSubstract() {
    setCount (count-1)
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
    <div className="counter">{count}</div>
          <Btn className="btn-primary" text="- Substract" onClick={handleSubstract}/>        
          <Btn className="btn-success" text="+Add" onClick={handleAdd}/>
          <Btn className="btn-danger" text="Reset" onClick={handleReset}/>  
    </div>
  );
}

export default Counter;