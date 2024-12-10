import { useState } from "react";
import Count from "./Count";

function Test() {
  const [pads, setPads] = useState(["red", "yellow"]);

  const padsList = pads.map((pad) => <button key={pad}></button>);

  return (
    <main>
      <div>{padsList}</div>
    </main>
  );
}
export default Test;
