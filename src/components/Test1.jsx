import { useEffect, useState } from "react";

function Test1() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("effct ran");
    fetch(`https://www.swapi.tech/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        
      });
  }, [count]);

  return (
    <div>
      <h2>the count is {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      <pre>{data ? JSON.stringify(data, null, 2) : "loading..."}</pre>
    </div>
  );
}

export default Test1;
