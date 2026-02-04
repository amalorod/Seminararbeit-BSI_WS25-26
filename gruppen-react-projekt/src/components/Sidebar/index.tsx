import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import {
  FaHouse,
  FaInstagram,
  FaDumbbell,
  FaApple,
  FaBoltLightning,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar">
        <div className="modul1 navBar">
          <div className="navItemBar">
            <Button className="navitem" onClick={() => navigate("/")}>
              <FaHouse />
            </Button>
            <Button className="navitem" onClick={() => navigate("/workout")}>
              <FaDumbbell />
            </Button>
            <Button className="navitem" onClick={() => navigate("/ernährung")}>
              <FaApple />
            </Button>
            <Button className="navitem" href="#">
              <FaBoltLightning />
            </Button>
          </div>

          <div className="socialbar">
            <Button
              className="socialItem insta"
              href="https://www.instagram.com/"
            >
              <FaInstagram />
            </Button>
            <Button
              className="socialItem facebook"
              href="https://www.facebook.com/"
            >
              <FaFacebook />
            </Button>
            <Button
              className="socialItem youtube"
              href="https://www.youtube.com/"
            >
              <FaYoutube />
            </Button>
            <Button
              className="socialItem tiktok"
              href="https://www.tiktok.com/"
            >
              <FaTiktok />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
