import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function LineChart({ students }) {
  if (students.length === 0) return null;

  const data = {
    labels: ["Test 1", "Test 2", "Test 3"],
    datasets: students.map((s, index) => ({
      label: s.name,
      data: s.marks,
      borderColor: ["#2196F3", "#FF9800", "#9C27B0"][index],
      fill: false,
      tension: 0.3
    }))
  };

  return <Line data={data} />;
}

export default LineChart;