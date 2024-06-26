"use client";
import React, { useState } from "react";
import MonthlyOrderLineGraph from "./MonthlyOrderLineGraph";
import MonthlyOrderStat from "./MonthlyOrderStat";

interface MonthlyExpenditureProps{
 
  reportData: any;
  totalNumMonths: number;
  setTotalNumMonths: (numMonths: number) => void;
  
}

function MonthlyExpenditure({ reportData, totalNumMonths, setTotalNumMonths }: MonthlyExpenditureProps) {
  let yearlyStat = {};
  let averageMonthlyCost = 0;
  if (reportData) {
    yearlyStat = reportData["years"];
    if(totalNumMonths > 0){

      averageMonthlyCost = parseFloat(reportData["totalAmountSpent"]) / totalNumMonths;
    }
  }

  return (
    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 bg-slate-900 gap-4 rounded-xl m-6 shadow-lg">
      <MonthlyOrderLineGraph reportData={yearlyStat} setTotalNumMonths={setTotalNumMonths}/>
      <MonthlyOrderStat
        reportData={yearlyStat}
        averageMonthlyCost={averageMonthlyCost}
      />
    </div>
  );
}

export default MonthlyExpenditure;
