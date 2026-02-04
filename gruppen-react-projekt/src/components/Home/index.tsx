import {
  FaApple,
  FaBoltLightning,
  FaDroplet,
  FaDumbbell,
  FaGear,
  FaUsers,
} from "react-icons/fa6";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import "./index.scss";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container home-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <div className="topbar">
          <Topbar />
        </div>
        <div className="container mainBody">
          <div className="modul ernährung box">
            <Button className="boxItem" onClick={() => navigate("/ernährung")}>
              <FaApple />
            </Button>
            <div className="inhalt">
              <h1>Ernährung</h1>
            </div>
          </div>
          <div className="modul kalorien box">
            <Button className="boxItem" onClick={() => navigate("/")}>
              <FaBoltLightning />
            </Button>
            <div className="inhalt">
              <h3>Kalorien verbrannt</h3>
            </div>
          </div>
          <div className="modul social box">
            <Button className="boxItem" onClick={() => navigate("/user")}>
              <FaUsers />
            </Button>
            <div className="inhalt">
              <h5>Social</h5>
            </div>
          </div>
          <div className="modul training box">
            <Button className="boxItem" onClick={() => navigate("/workout")}>
              <FaDumbbell />
            </Button>
            <div className="inhalt">
              <h2>Workout</h2>
            </div>
          </div>
          <div className="modul wasser box">
            <div className="boxItem">
              <FaDroplet />
            </div>
            <div className="inhalt">
              <h4>Wasser</h4>
            </div>
          </div>
          <div className="modul test1 box">
            <div className="boxItem">
              <FaBoltLightning />
            </div>
            <div className="inhalt">
              <h4>Test</h4>
            </div>
          </div>
          <div className="modul test2 box">
            <div className="boxItem">
              <FaBoltLightning />
            </div>
            <div className="inhalt">
              <h3>Test</h3>
            </div>
          </div>
          <div className="modul test3 box">
            <div className="boxItem">
              <FaGear />
            </div>
            <div className="inhalt">
              <h2>Test</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
