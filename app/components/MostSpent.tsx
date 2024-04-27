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

function MostSpent({reportData}: any) {
  
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
        text: "Top 3 Favourite Restaurants (By Money Spent)",
      },
    },
  };
  let labelsArray: string[] = []
  let datasetArray: number[] = []

  for (const key in reportData) {
    if (reportData.hasOwnProperty(key)) {
      const restr = reportData[key];
      labelsArray.push(restr.restaurant);
      datasetArray.push(restr.amountSpent);
    }
  }

  const data: ChartData<"bar"> = {
    labels: labelsArray,
    datasets: [
      {
        label: "Amount Spent ($)",
        data: datasetArray,
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
      <Bar className="barGraphImg" data={data} options={options} />
    </div>
  );
}

export default MostSpent;
