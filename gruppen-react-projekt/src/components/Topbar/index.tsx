import { FaGear, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import "./topbar.scss";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (




    <div className="topbar">
      <div className="modul2 user">
        <Button className="suche" onClick={() => navigate("/user")}>
          <FaUser />
        </Button>
      </div>
      <div className="platzhalter1">
        
        <h1 className="header">
          <AnimatedLetters key = {location.pathname} letterClass="text-animate" strArray={['F','i','t','B','u','c','k','e','t']} idx={1} />
        </h1>
      </div>
      <div className="modul2 suchfeld">
        <Button className="suche">
          <FaMagnifyingGlass />
        </Button>
      </div>
      <Button
        className="navitem settings modul2"
        onClick={() => navigate("/settings")}
      >
        <FaGear />
      </Button>
    </div>
  );
};

export default Topbar;
