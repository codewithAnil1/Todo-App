import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoInput from "./Componets/TodoInput/TodoInput";
import Navbar from "./Componets/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <TodoInput />
    </>
  );
}

export default App;
