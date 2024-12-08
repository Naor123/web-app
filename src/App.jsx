import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Joke from "./components/Joke";
function App() {
  return (
    <>
      <Joke setup="whats the time" punchline="why do you care" />
      <Joke setup="whats big and bally" punchline="ur moms" />
      <Joke setup="why is dirty" punchline="because what u did last night" />
      <Joke setup="how do i eat huburger" punchline="with ur toes" />
    </>
  );
}

export default App;
