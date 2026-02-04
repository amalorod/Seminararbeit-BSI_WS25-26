import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Workout from "./components/Workout";
import Ernährung from "./components/Ernährung";
import User from "./components/User";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/ernährung" element={<Ernährung />} />
        <Route path="/user" element={<User />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
