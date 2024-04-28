import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  maintainAspectRatio: true,
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Top 3 Favourite Restaurants (By Order Numbers)",
      color: "#ffffff",
      font: {
        size: 18,
        family: "Helvetica, Arial, sans-serif",
      },
    },
    tooltip: {
      backgroundColor: "#333333",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
      boxPadding: 5,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#ccc",
      },
    },
    y: {
      grid: {
        color: "#374151",
      },
      ticks: {
        color: "#ccc",
      },
    },
  },
};

function MostOrders({ reportData }: any) {
  let labelsArray: string[] = [];
  let datasetArray: number[] = [];

  for (const key in reportData) {
    if (Object.prototype.hasOwnProperty.call(reportData, key)) {
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
        backgroundColor: "rgba(79, 70, 229, 0.7)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 0.5,
        barPercentage: 0.4,
        categoryPercentage: 1,
      },
    ],
  };

  return <Bar className="barGraphImg" data={data} options={options} />;
}

export default MostOrders;
