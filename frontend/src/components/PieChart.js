import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ students }) {
  const safe = students.filter(s => s.status === "Safe").length;
  const risk = students.filter(s => s.status === "At Risk").length;

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

  return <Pie data={data} />;
}

export default PieChart;