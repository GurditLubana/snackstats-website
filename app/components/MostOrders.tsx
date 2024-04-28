import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

// Registering the components required for the Bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Options for the Bar chart
const options: ChartOptions<'bar'> = {
  maintainAspectRatio: true,
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false, // Unless you need a legend, it's cleaner without it
    },
    title: {
      display: true,
      text: 'Top 3 Favourite Restaurants (By Order Numbers)',
      color: '#ffffff', // Title color
      font: {
        size: 18, // Adjust the size as needed
        family: 'Helvetica, Arial, sans-serif', // Use a modern sans-serif font
      },
    },
    tooltip: {
      backgroundColor: '#333333', // Tooltip background color
      titleColor: '#ffffff', // Tooltip title color
      bodyColor: '#ffffff', // Tooltip body color
      boxPadding: 5, // Padding within tooltip
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide X-axis grid lines
      },
      ticks: {
        color: '#ccc', // X-axis tick color
        
      },
      
    },
    y: {
      grid: {
        color: '#374151', // Y-axis grid line color
      },
      ticks: {
        color: '#ccc', // Y-axis tick color
        // beginAtZero: true, // Begin at zero
      },
    },
  },
};

// Your component function
function MostOrders({ reportData }: any) {
  let labelsArray: string[] = [];
  let datasetArray: number[] = [];

  // Loop through your reportData and populate the labelsArray and datasetArray
  for (const key in reportData) {
    if (Object.prototype.hasOwnProperty.call(reportData, key)) {
      const restr = reportData[key];
      labelsArray.push(restr.restaurant);
      datasetArray.push(restr.orderCount);
    }
  }

  // Data for the Bar chart
  const data: ChartData<'bar'> = {
    labels: labelsArray,
    datasets: [
      {
        label: 'Orders Count',
        data: datasetArray,
        backgroundColor: 'rgba(79, 70, 229, 0.5)', // A nice shade of indigo
        borderColor: 'rgba(79, 70, 229, 1)', // Indigo border
        borderWidth: 0.5,
        barPercentage: 0.4, // Adjusted bar thickness
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="barGraphImg"> {/* You might need to add some styling here */}
      <Bar  data={data} options={options} />
    </div>
  );
}

export default MostOrders;
