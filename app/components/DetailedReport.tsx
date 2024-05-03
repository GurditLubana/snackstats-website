import React from "react";
import ReportTable from "./ReportTable";

function DetailedReport({ reportData }: any) {
  return (
    <div className=" md:col-span-2 col-span-2 px-0 mx-6 bg-slate-800 rounded-lg shadow-lg overflow-hidden my-6">
      <ReportTable reportData={reportData}/>
    </div>
  );
}

export default DetailedReport;
