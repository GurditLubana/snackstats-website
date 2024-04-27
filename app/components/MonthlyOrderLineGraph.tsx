"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

function MonthlyOrderLineGraph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Spending",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount Spent",
        },
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
  };

  const data: ChartData<"line"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Spending",
        data: [
          1200, 1500, 1800, 2000, 1700, 1900, 2200, 2100, 1900, 2300, 2000,
          2500,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  return (
    <div className="md:col-span-3 col-span-4">

        <Line
          className="p-9 mx-9"
          data={data}
          options={options}
          width={300}
          height={150}
        />
    </div>
  );
}

export default MonthlyOrderLineGraph;