import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CsvReader from "./components/CsvReader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CsvReader />
    </>
  );
}

export default App;
