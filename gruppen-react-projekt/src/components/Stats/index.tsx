import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

import "./Stats.scss";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from "recharts";


import { LineChart, Line} from "recharts"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar  } from "recharts";
import { ResponsiveContainer } from "recharts";


const data = [
  { name: "Mo", value: 30 },
  { name: "Di", value: 45 },
  { name: "Mi", value: 20 },
  { name: "Do", value: 50 },
  { name: "Fr", value: 35 },
  { name: "Sa", value: 60 },
  { name: "So", value: 40 }
];


const radarData = [ 
  { subject: "Kraft", value: 80 }, 
  { subject: "Ausdauer", value: 65 }, 
  { subject: "Beweglichkeit", value: 50 }, 
  { subject: "Schnelligkeit", value: 70 }, 
  { subject: "Koordination", value: 60 } 

];

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

        <div className="mainBody statistik-page">
         

          <div className="chart-grid">

            {/* Säulendiagramm */}
            <div className="chart-item">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Kreisdiagramm */}
            <div className="chart-item">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c", "#d0ed57"][index]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              </ResponsiveContainer>
            </div>



            {/* Liniendiagramm */}
            <div className="chart-item">
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#ff7300" strokeWidth={3} />
        </LineChart>
          </ResponsiveContainer>

          </div>




 <div className="chart-item">
          <ResponsiveContainer width="100%" height={350}>
  <RadarChart data={radarData}>
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis angle={30} domain={[0, 100]} />
    <Radar name="Score" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  </RadarChart>
</ResponsiveContainer>

</div>



        </div>
      </div>
    </div>
    </div>
  );
};

export default Statistik;
