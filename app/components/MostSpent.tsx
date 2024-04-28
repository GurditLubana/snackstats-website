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
    indexAxis: "x",
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
        text: "Top 3 Favourite Restaurants (By Money Spent)",
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
      datasetArray.push(restr.amountSpent);
    }
  }
  console.log(labelsArray, datasetArray)

  const data: ChartData<"bar"> = {
    labels: labelsArray,
    datasets: [
      {
        label: "Amount Spent ($)",
        data: datasetArray,
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        barPercentage: 0.9,
        categoryPercentage: 1,
        
      },
    ],
    
  };

  return (
    
      <Bar className="barGraphImg" data={data} options={options} />
    
  );
}

export default MostSpent;
