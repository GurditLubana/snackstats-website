import React from "react";

function Dashboard() {
  return (
    <div className="dark-bg grid min-h-screen grid-rows-[auto,1fr,auto] grid-cols-1 md:grid-cols-3 md:grid-rows-[auto,1fr] gap-4 p-4">
      <header className="md:col-span-3 bg-slate-800 rounded-xl p-6 shadow-lg">
        Header Content
      </header>
      <div className="md:col-span-2 bg-slate-800 rounded-xl p-6 shadow-lg"></div>
      <aside className="bg-slate-800 rounded-xl p-6 shadow-lg">Sidebar Content</aside>
      <footer className="md:col-span-3 bg-slate-800 rounded-xl p-6 shadow-lg">
        Footer Content
      </footer>
    </div>
  );
}

export default Dashboard;
