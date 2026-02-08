import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Workout from "./components/Workout";
import Ernährung from "./components/Ernährung";
import User from "./components/User";
import Settings from "./components/Settings";
import Statistik from "./components/Stats/index.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/ernährung" element={<Ernährung />} />
        <Route path="/user" element={<User />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/statistik" element={<Statistik />} />
      </Routes>
    </>
  );
}

export default App;
