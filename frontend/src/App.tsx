import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DatePicker } from "antd";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DatePicker />
    </>
  );
}

export default App;
