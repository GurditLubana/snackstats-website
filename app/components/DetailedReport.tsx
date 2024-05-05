import React from "react";
import ReportTable from "./ReportTable";
import RestaurantPieChart from "./RestaurantPieChart";

function DetailedReport({ reportData }: any) {
  return (
    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl shadow-lg">
      <ReportTable reportData={reportData}/>
      <RestaurantPieChart reportData={reportData}/>
    </div>
  );
}

export default DetailedReport;
