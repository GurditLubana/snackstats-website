import React from "react";
import TotalExpensesSection from "../components/TotalExpensesSection";
import Header from "../components/Header";
import BarGraphSection from "../components/BarGraphSection";


function Dashboard() {
  return (
    <div className="dark-bg grid min-h-screen grid-rows-[0.2fr,3fr,2fr] grid-cols-1 md:grid-cols-4 md:grid-rows-[0.2fr,3fr,2fr] gap-2 p-4">
      <Header/>
      <TotalExpensesSection/>
      <BarGraphSection/>

      <footer className="md:col-span-4 bg-slate-800 rounded-xl p-6 shadow-lg">
        Footer Content
      </footer>
    </div>
  );
}

export default Dashboard;
