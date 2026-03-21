const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const students = [
  { name: "Arun", marks: [60, 70, 80] },
  { name: "Priya", marks: [40, 45, 50] },
  { name: "Kiran", marks: [85, 90, 88] }
];

function getStatus(avg) {
  return avg < 50 ? "At Risk" : "Safe";
}

app.get("/students", (req, res) => {
  const result = students.map(s => {
    const avg = s.marks.reduce((a, b) => a + b) / s.marks.length;
    return { ...s, avg, status: getStatus(avg) };
  });

  res.json(result);
});

app.listen(5000, () => console.log("Server running on port 5000"));