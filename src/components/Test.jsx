import { useState } from "react";
import Count from "./Count";

function Test() {
  const [count, setCount] = useState(0);

  function addCount(){
    setCount(prevCount => prevCount + 1) 
  }
  
  function lowerCount(){
    setCount(prevCount => prevCount - 1) 
  }

  return (
    <main>
      <div>
        <button onClick={addCount}>+</button>
      </div>
      <div>
        <button onClick={lowerCount}>-</button>
      </div>
      <Count count = {count}/>
    </main>
  );
}
export default Test;
