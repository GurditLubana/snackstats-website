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

  
  const colors = [
    "rgba(79, 70, 229, 0.8)", 
    "rgba(135, 206, 235, 0.8)", 
    "rgba(60, 179, 113, 0.8)", 
    "rgba(244, 164, 96, 0.8)", 
    "rgba(221, 160, 221, 0.8)", 
    "rgba(100, 149, 237, 0.8)", 
    "rgba(144, 238, 144, 0.8)", 
    "rgba(255, 160, 122, 0.8)", 
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
