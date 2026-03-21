import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ students }) {
  const safe = students.filter(s => s.status === "Safe").length;
  const risk = students.filter(s => s.status === "At Risk").length;
  const options = {
  responsive: true,
  maintainAspectRatio: false
};

  const data = {
    labels: ["Safe", "At Risk"],
    datasets: [
      
  {
    data: [safe, risk],
    backgroundColor: ["#4CAF50", "#FF5252"], // green & red
    borderWidth: 1
  }
]
  };


}
return (
  <div style={{ width: "100%", height: "300px" }}>
    <Pie data={data} options={options} />
  </div>
);

export default PieChart;