import React from "react";
import TotalExpenses from "../components/TotalExpensesSection";


function Dashboard() {
  return (
    <div className="dark-bg grid min-h-screen grid-rows-[auto,1fr,auto] grid-cols-1 md:grid-cols-4 md:grid-rows-[auto,1fr] gap-4 p-4">
      <header className="md:col-span-4 bg-slate-800 rounded-xl p-6 shadow-lg">
        Header Content
      </header>
      <TotalExpenses ></TotalExpenses>
      <aside className="md:col-span-2 bg-slate-800 rounded-xl p-6 shadow-lg">Sidebar Content</aside>

      <footer className="md:col-span-4 bg-slate-800 rounded-xl p-6 shadow-lg">
        Footer Content
      </footer>
    </div>
  );
}

export default Dashboard;
