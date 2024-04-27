"use client";
import React, { useState, useEffect } from "react";
import TotalExpensesSection from "../components/TotalExpensesSection";
import Header from "../components/Header";
import BarGraphSection from "../components/BarGraphSection";
import MonthlyExpenditure from "../components/MonthlyExpenditure";


function Dashboard() {

  const [reportData, setReportData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const report = await fetch("/api/reportData");
        if (!report.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await report.json();

        setReportData(data);
        console.log("This is the value of the data ", data);

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []); 

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dark-bg grid min-h-screen grid-rows-[0.2fr,2fr,3fr] grid-cols-1 md:grid-cols-4 md:grid-rows-[0.2fr,2fr,3fr] gap-2 p-4">
      <Header />
      <TotalExpensesSection reportData={reportData} />
      <BarGraphSection reportData={reportData} />
      <MonthlyExpenditure reportData={reportData} />
    </div>
  );
}

export default Dashboard;
