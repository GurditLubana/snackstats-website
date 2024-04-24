import React from "react";
import TotalExpensesSection from "../components/TotalExpensesSection";
import Header from "../components/Header";
import BarGraphSection from "../components/BarGraphSection";
import MonthlyExpenditure from "../components/MonthlyExpenditure";


function Dashboard() {
  return (
    <div className="dark-bg grid min-h-screen grid-rows-[0.2fr,2fr,3fr] grid-cols-1 md:grid-cols-4 md:grid-rows-[0.2fr,2fr,3fr] gap-2 p-4">
      <Header/>
      <TotalExpensesSection/>
      <BarGraphSection/>
      <MonthlyExpenditure/>
     
    </div>
  );
}

export default Dashboard;
