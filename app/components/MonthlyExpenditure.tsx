"use client"
import React, { useState } from 'react'
import MonthlyOrderLineGraph from './MonthlyOrderLineGraph'
import MonthlyOrderStat from './MonthlyOrderStat'

function MonthlyExpenditure({reportData}:any) {
  
  let monthlyStat = {}
  let averageMonthlyCost = 0;
  if(reportData){
    monthlyStat = reportData['months']
    averageMonthlyCost = parseFloat(reportData['totalAmountSpent']) / 12
  }
  
  return (
    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 bg-slate-800 gap-9 rounded-xl p-9 shadow-lg">

      <MonthlyOrderLineGraph/>
      <MonthlyOrderStat reportData = {monthlyStat} averageMonthlyCost = {averageMonthlyCost}/>
      
    </div>
  )
}

export default MonthlyExpenditure
