import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const MuiPieChart = () => {
  const data = [
    { id: 1, value: 200, label: "January", color: "red" },
    { id: 2, value: 300, label: "Februry" },
    { id: 2, value: 150, label: "March" },
    { id: 2, value: 200, label: "April" },
    { id: 2, value: 120, label: "May" },
    { id: 2, value: 220, label: "June" },
  ];
  return (
    <PieChart
      series={[
        {
          innerRadius: 26,
          outerRadius: 150,
          paddingAngle: 2,
          cornerRadius: 1,
          startAngle: 0,
          endAngle: 360,
          data,
        },
      ]}
      width={600}
      height={500}
    />
  );
};

export default MuiPieChart;
