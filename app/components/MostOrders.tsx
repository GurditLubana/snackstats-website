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

function MostOrders({reportData}:any) {
  
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
        labels: {
          font: {
            size: 20, 
          },
        },
      },
      title: {
        display: true,
        text: "Top 3 Favourite Restaurants (By Order Numbers)",
        font: {
          size: 20, 
        },
      },
    },
  };

  let labelsArray: string[] = []
  let datasetArray: number[] = []

  for (const key in reportData) {
    if (reportData.hasOwnProperty(key)) {
      const restr = reportData[key];
      labelsArray.push(restr.restaurant);
      datasetArray.push(restr.orderCount);
    }
  }
  
  const data: ChartData<"bar"> = {
    labels: labelsArray,
    datasets: [
      {
        label: "Orders Count",
        data: datasetArray,
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 0.5,
        barPercentage: 0.5,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    
      <Bar className="barGraphImg" data={data} options={options} />
    
  );
}

export default MostOrders;
