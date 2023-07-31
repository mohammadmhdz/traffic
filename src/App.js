import "./App.css";
import { Section_1 } from "./components/section_1";
import { Section_2 } from "./components/section_2";
import { Section_3 } from "./components/section_3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Section_1></Section_1> */}
      <Section_3></Section_3>
      {/* <Section_2></Section_2> */}
    </div>
  );
}

export default App;
