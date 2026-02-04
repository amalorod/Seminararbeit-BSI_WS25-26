import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import "./index.scss";

const Home = () => {
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
