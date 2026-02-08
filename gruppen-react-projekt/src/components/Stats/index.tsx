import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const Statistik = () => {
  return (
    <div className="home-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <div className="topbar">
          <Topbar />
        </div>
        <div className="mainBody">
          <h1>hier entseht die Statistik Page</h1>
        </div>
      </div>
    </div>
  );
};

export default Statistik;