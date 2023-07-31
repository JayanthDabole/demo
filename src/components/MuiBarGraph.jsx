import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const men = [200, 300, 150, 200, 120, 220];
const women = [150, 190, 200, 240, 190, 120];
const xLabels = ["January", "February", "March", "April", "May", "June"];

export default function MuiBarGraph() {
  return (
    <BarChart
      width={800}
      height={500}
      series={[
        { data: men, label: 'Men', id: 'pvId' },
        { data: women, label: 'Women', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band', barGapRatio: 0.1   }]}
    />
  );
}