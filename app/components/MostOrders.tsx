"use client";
import { Bar } from "react-chartjs-2";
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
} from "chart.js";

function MostOrders() {
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Top 3 Favourite Restaurants (By Order Numbers)",
      },
    },
  };

  const data: ChartData<"bar"> = {
    labels: ["Punjab food corner ", "Holy ", "March"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80],
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="h-64">
      <Bar data={data} options={options} />
    </div>
  );
}

export default MostOrders;
