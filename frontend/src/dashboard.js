import { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
  <div
    style={{
      padding: "20px",
      fontFamily: "Arial",
      backgroundColor: "#0f172a",
      color: "white",
      minHeight: "100vh"
    }}
  >
    <h1 style={{ textAlign: "center" }}>
      Student Analytics Dashboard
    </h1>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "30px"
      }}
    >
      <div
        style={{
          width: "250px",
          padding: "20px",
          backgroundColor: "#1e293b",
          borderRadius: "10px"
        }}
      >
        <PieChart students={students} />
      </div>

      <div
        style={{
          width: "500px",
          padding: "20px",
          backgroundColor: "#1e293b",
          borderRadius: "10px"
        }}
      >
        <LineChart students={students} />
      </div>
    </div>

    <h2 style={{ marginTop: "30px" }}>AI Insights</h2>

    <div
      style={{
        padding: "15px",
        backgroundColor: "#1e293b",
        borderRadius: "10px"
      }}
    >
      <p>• Priya is at risk due to low performance</p>
      <p>• Arun and Kiran are performing well</p>
      <p>• Focus needed on weak students</p>
    </div>

    <h2 style={{ marginTop: "30px" }}>Student Status</h2>

    <div
      style={{
        padding: "20px",
        backgroundColor: "#1e293b",
        borderRadius: "10px"
      }}
    >
      {students.map((s, i) => (
        <p key={i}>
          {s.name} - {s.avg.toFixed(1)} -
          <b
            style={{
              color: s.status === "At Risk" ? "red" : "green"
            }}
          >
            {" "}
            {s.status}
          </b>
        </p>
      ))}
    </div>
  </div>
);

}

export default Dashboard;