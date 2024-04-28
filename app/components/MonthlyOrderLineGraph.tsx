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

function MonthlyOrderLineGraph({reportData} : any) {
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
        // labels: {
        //   font: {
        //     size: 20, 
        //   },
        // },
      },
      title: {
        display: true,
        text: "Monthly Spending",
        font: {
          size: 20, 
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          font: {
            size: 20, 
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount Spent",
          font: {
            size: 20, 
          },
        },
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
  };

  let datasetArray: number[] = []
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
  ]

  for (var key in monthLabel) {
    
    if (reportData && reportData[monthLabel[key]]) {

      const restr = reportData[monthLabel[key]];
      datasetArray.push(restr['totalAmount']);
    }
  }
  console.log("this is coming from line graph ",datasetArray)
  const data: ChartData<"line"> = {
    labels: monthLabel,
    datasets: [
      {
        label: "",
        data: datasetArray,
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
