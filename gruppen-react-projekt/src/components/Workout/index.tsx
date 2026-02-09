import Button from "react-bootstrap/esm/Button";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import "./workout.scss";
import {
  FaChartLine,
  FaCirclePlay,
  FaDumbbell,
  FaPlus,
  FaShareNodes,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <div className="topbar">
          <Topbar />
        </div>
        <div className="mainBodyWork">
          <div className="modul basics box">
            <div className="modulHeader">
              <Button className="boxItem">
                <FaDumbbell />
              </Button>
              <h1 className="modulSchrift">Basic Trainingspläne</h1>
            </div>
            <div className="inhalt">
              <div className="basicTraining">
                <img
                  src="https://blogscdn.thehut.net/app/uploads/sites/443/2021/07/HERO_1626934620.jpg"
                  alt="Basic Training"
                />
              </div>
              <div className="basicTraining">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Pull"
                />
              </div>
              <div className="basicTraining">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubUu3zEFldmsIew-rK3pYRGaDsef3K0Af1w&s"
                  alt="Pull"
                />
              </div>
            </div>
          </div>
          <div className="modul erstellen box">
            <div className="modulHeader">
              <Button className="boxItem">
                <FaPlus />
              </Button>
              <h1 className="modulSchrift">erstelle einen Trainingsplan</h1>
            </div>
            <div className="inhalt">
              <Button className="erstellenBtn">
                <FaPlus />
              </Button>
            </div>
          </div>
          <div className="modul starten box">
            <Button className="boxItem">
              <FaCirclePlay />
            </Button>
            <div className="inhalt">
              <h1>starte ein Training</h1>
            </div>
          </div>
          <div className="modul teilen box">
            <Button className="boxItem">
              <FaShareNodes />
            </Button>
            <div className="inhalt">
              <h1>teile deinen Trainingsplan</h1>
            </div>
          </div>
          <div className="modul stats box">
            <Button className="boxItem">
              <FaChartLine />
            </Button>
            <div className="inhalt">
              <h1>Statistiken</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
