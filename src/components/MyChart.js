import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
      {
          label: 'Balance',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#008000 ',
          borderColor: '#008000 ',
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: '#008000 ',
          pointBorderColor: '#008000 ',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#008000 ',
          pointHoverBorderColor: '#008000 ',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [500, 300, 400, 500, 800, 650, 700, 850, 1100, 1400, 1600, 2500],
      },
  ],
}

const options = {
  maintainAspectRatio: true,
  scales: {
      x: {
          grid: {
              display: false,
          },
      },
      y: {
          grid: {
              borderDash: [3, 3],
          },
      },
  },
  plugins: {
      legend: {
          display: false
      }
  }
}


const MyChart = () => {
    return (
        <Line
          data={data}
          options={options}
        />
    )
}

export default MyChart;
