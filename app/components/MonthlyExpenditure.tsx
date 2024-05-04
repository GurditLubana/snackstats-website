"use client";
import React, { useState } from "react";
import MonthlyOrderLineGraph from "./MonthlyOrderLineGraph";
import MonthlyOrderStat from "./MonthlyOrderStat";

function MonthlyExpenditure({ reportData }: any) {
  let yearlyStat = {};
  let averageMonthlyCost = 0;
  if (reportData) {
    yearlyStat = reportData["years"];
    averageMonthlyCost = parseFloat(reportData["totalAmountSpent"]) / 12;
  }

  return (
    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 bg-slate-900 gap-4 rounded-xl m-6 shadow-lg">
      <MonthlyOrderLineGraph reportData={yearlyStat} />
      <MonthlyOrderStat
        reportData={yearlyStat}
        averageMonthlyCost={averageMonthlyCost}
      />
    </div>
  );
}

export default MonthlyExpenditure;
