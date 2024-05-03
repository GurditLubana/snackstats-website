import React from "react";
import ReportTable from "./ReportTable";
import RestaurantPieChart from "./RestaurantPieChart";

function DetailedReport({ reportData }: any) {
  return (
    <div >
      <ReportTable reportData={reportData}/>
      <RestaurantPieChart/>
    </div>
  );
}

export default DetailedReport;
