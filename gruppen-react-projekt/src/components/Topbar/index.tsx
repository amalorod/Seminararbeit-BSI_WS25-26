import { FaGear, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import "./topbar.scss";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

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
        <h1 className="header">FitBucket</h1>
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
