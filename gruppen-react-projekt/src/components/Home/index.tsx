import "./index.scss";
import {
  FaUser,
  FaMagnifyingGlass,
  FaGear,
  FaHouse,
  FaInstagram,
  FaDumbbell,
  FaApple,
  FaBoltLightning,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="sidebar">
        <div className="modul navBar">
          <div className="navItemBar">
            <div className="navitem">
              <FaHouse />
            </div>
            <div className="navitem">
              <FaDumbbell />
            </div>
            <div className="navitem">
              <FaApple />
            </div>
            <div className="navitem">
              <FaBoltLightning />
            </div>
          </div>
          <div className="socialbar">
            <div className="socialItem">
              <FaInstagram />
            </div>
            <div className="socialItem">
              <FaTiktok />
            </div>
            <div className="socialItem">
              <FaFacebook />
            </div>
            <div className="socialItem">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="topbar">
          <div className="modul user">
            <FaUser />
          </div>
          <div className="modul platzhalter1"> </div>
          <div className="modul platzhalter2"> </div>
          <div className="modul platzhalter3"> </div>
          <div className="modul suchfeld">
            <FaMagnifyingGlass />
          </div>
          <div className="modul settings">
            <FaGear />
          </div>
        </div>
        <div className="container mainBody">
          <div className="modul ernährung">
            <p></p>
          </div>
          <div className="modul kalorien">
            <p></p>
          </div>
          <div className="modul social">
            <p></p>
          </div>
          <div className="modul training">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
