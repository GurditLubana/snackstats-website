import React from 'react'
import TotalAmount from './TotalAmount'

function TotalExpensesSection({reportData}:any) {
  const data = reportData
  console.log("Hello from Total Exp",data)
  return (
    <div className="md:col-span-2 col-span-1 bg-slate-800 rounded-xl p-4 shadow-lg">
      <TotalAmount/>
    </div>
  )
}

export default TotalExpensesSection
