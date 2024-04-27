import React from 'react'
import MonthlyOrderLineGraph from './MonthlyOrderLineGraph'
import MonthlyOrderStat from './MonthlyOrderStat'

function MonthlyExpenditure({reportData}:any) {
  const data = reportData
  console.log("Hello from Monthly Exp",data)
  return (
    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 bg-slate-800 gap-9 rounded-xl p-9 shadow-lg">

      <MonthlyOrderLineGraph/>
      <MonthlyOrderStat/>
      
    </div>
  )
}

export default MonthlyExpenditure
