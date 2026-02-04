import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
