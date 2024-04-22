"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';

// Register the chart components you want to use
function TopThreeRestaurants() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  // Explicitly type your options
  const options: ChartOptions<"bar"> = {
    indexAxis: 'y', // Ensure this is a string
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right', 
      },
      title: {
        display: true,
        text: 'Favourite Restaurants',
      },
    },
  };

  
  const data: ChartData<"bar"> = {
    labels: ['Punjab food corner ', 'Holy ', 'March'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barPercentage: 0.5, 
        categoryPercentage: 1, 
      },
    ],
  };

  return (
    <div className= "box-border h-64 w-auto p-1">
      <Bar data={data} options={options} />
    </div>
  );
}

export default TopThreeRestaurants;