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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function MonthlyOrderLineGraph({ reportData }: any) {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Monthly Spending",
        font: {
          size: 18,
        },
        color: "#ffffff",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          font: {
            size: 16,
          },
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount Spent",
          font: {
            size: 16,
          },
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
          callback: function (value) {
            return "$" + value;
          },
        },
        grid: {
          color: "#334155",
        },
      },
    },
  };

  let datasetArray: number[] = [];
  let monthLabel = [
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
  ];

  for (var key in monthLabel) {
    if (reportData && reportData[monthLabel[key]]) {
      const restr = reportData[monthLabel[key]];
      datasetArray.push(restr["totalAmount"]);
    }
  }
  console.log("this is coming from line graph ", datasetArray);

  const data: ChartData<"line"> = {
    labels: monthLabel,
    datasets: [
      {
        data: datasetArray,
        backgroundColor: "rgba(79, 70, 229, 0.4)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "rgba(79, 70, 229, 1)",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "rgba(79, 70, 229, 1)",
        pointRadius: 4,
        pointHoverRadius: 8,
        fill: "start",
      },
    ],
  };

  return (
    <div className="md:col-span-2 col-span-4 flex justify-center ">
      <div className="w-full h-full ps-9 py-9">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default MonthlyOrderLineGraph;
