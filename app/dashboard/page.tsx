"use client";
import React, { useState, useEffect } from "react";
import TotalExpensesSection from "../components/TotalExpensesSection";
import Header from "../components/Header";
import BarGraphSection from "../components/BarGraphSection";
import MonthlyExpenditure from "../components/MonthlyExpenditure";
import DetailedReport from "../components/DetailedReport";

function Dashboard() {
  const [reportData, setReportData] = useState({});
  const [totalAmountDataReport, setTotalAmountReport] = useState({})

  const totalAmountData = (reportDataJson: any) => {
    const totalAmountSpent = reportDataJson["totalAmountSpent"];
    const totalOrders = reportDataJson["totalOrders"];
    const avgOrderCost = parseFloat(totalAmountSpent) / parseFloat(totalOrders);
    // this value needs to be fixed, avgMonthly is no longer divided by 12
    const avgMonthlyCost = parseFloat(totalAmountSpent) / 12;
    const totalRestaurant = Object.keys(reportDataJson).length - 4;
    // this value needs to be fixed, avgMonthly is no longer divided by 12
    const avgMonthlyOrder = Math.ceil(totalOrders/12);
    // const mostExpensiveMonth = reportDataJson["months"]["mostExpensiveMonth"]["month"]
    const mostExpensiveMonth = "January"

    var result = {
      totalAmountSpent: totalAmountSpent.toFixed(2),
      totalOrders: totalOrders,
      avgOrderCost: avgOrderCost.toFixed(2),
      avgMonthlyCost : avgMonthlyCost.toFixed(2),
      totalRestaurant: totalRestaurant,
      avgMonthlyOrder: avgMonthlyOrder,
      mostExpensiveMonth: mostExpensiveMonth
    };

    return result;
  };

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const report = await fetch("/api/reportData");
        if (!report.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await report.json();

        let reportDataJson = JSON.parse(data.inputValue);
        setTotalAmountReport(totalAmountData(reportDataJson));
        setReportData(reportDataJson);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReport();
  }, []);

  return (
    <div className="dark-bg grid min-h-screen grid-rows-[0.1fr,1fr,0.8fr,auto] grid-cols-1 md:grid-cols-4 md:grid-rows-[0.1fr,1fr,0.8fr, auto] gap-2 p-4">
      <Header />
      <TotalExpensesSection reportData={totalAmountDataReport} />
      <BarGraphSection reportData={reportData} />
      <MonthlyExpenditure reportData={reportData} />
      <DetailedReport reportData={reportData}/>
    </div>
  );
}

export default Dashboard;
