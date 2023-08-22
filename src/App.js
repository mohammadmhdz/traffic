import "./App.css";
import { Section_1 } from "./components/section_1";
import { Section_2 } from "./components/section_2";
import { Section_3 } from "./components/section_3";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="post" element={<Section_3 />} />
        <Route path="/" element={<Section_1 />} />
      </Routes>
    </>
  );
}

export default App;
