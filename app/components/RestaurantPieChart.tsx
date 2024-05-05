import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface RestaurantPieChartProps {
  reportData: Record<string, any>;
}

const RestaurantPieChart: React.FC<RestaurantPieChartProps> = ({
  reportData,
}) => {
  const labelArray: string[] = [];
  const datasetArray: number[] = [];
  const extraFields = ["favRest", "totalAmountSpent", "totalOrders", "years"];

  if (reportData) {
    const restaurantArray = Object.keys(reportData);
    for (const key of restaurantArray) {
      if (!extraFields.includes(key)) {
        const restaurantDetails = reportData[key];
        labelArray.push(key);
        datasetArray.push(restaurantDetails.totalSpent);
      }
    }
  }

  // Define color palette
  const colors = [
    "rgba(75, 192, 192, 0.8)",
    "rgba(54, 162, 235, 0.8)",
    "rgba(79, 70, 229, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(255, 99, 132, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(231, 233, 237, 0.8)",
    "rgba(201, 203, 207, 0.8)",
  ];

  const borderColors = colors.map((color) => color.replace("0.8", "1"));

  const data = {
    labels: labelArray,
    datasets: [
      {
        label: "# Amount Spent",
        data: datasetArray,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="md:col-span-2 col-span-4 flex justify-center items-center rounded-lg shadow-lg bg-gray-900 my-6">
      <div className="w-3/4 h-3/4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default RestaurantPieChart;
