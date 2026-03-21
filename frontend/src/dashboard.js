import { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://student-backend-zj46.onrender.com/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "Arial",
      }}
    >
      {/* CENTER CONTAINER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* TITLE */}
        <h1 style={{ textAlign: "center" }}>
          Student Analytics Dashboard
        </h1>

        {/* CHARTS SECTION */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {/* PIE CHART */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <PieChart students={students} />
          </div>

          {/* LINE CHART */}
          <div
            style={{
              flex: "2 1 500px",
              backgroundColor: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <LineChart students={students} />
          </div>
        </div>

        {/* AI INSIGHTS */}
        <h2 style={{ marginTop: "30px" }}>AI Insights</h2>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#1e293b",
            borderRadius: "10px",
          }}
        >
          <p>• Priya is at risk due to low performance</p>
          <p>• Arun and Kiran are performing well</p>
          <p>• Focus needed on weak students</p>
        </div>

        {/* STUDENT STATUS */}
        <h2 style={{ marginTop: "30px" }}>Student Status</h2>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#1e293b",
            borderRadius: "10px",
          }}
        >
          {students.map((s, i) => (
            <p key={i}>
              {s.name} - {s.avg.toFixed(1)} -
              <b
                style={{
                  color: s.status === "At Risk" ? "red" : "green",
                }}
              >
                {" "}
                {s.status}
              </b>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;