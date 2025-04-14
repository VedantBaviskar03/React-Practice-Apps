import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { Message } from "./components/Message";

function App() {
  return (
    <>
      <Message></Message>
      <Welcome name="Vedant">
        <p>This is your first practice project</p>
      </Welcome>
      <Counter />
    </>
  );
}

export default App;
