import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const User = () => {
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
          <h1>hier entseht die User Page</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
