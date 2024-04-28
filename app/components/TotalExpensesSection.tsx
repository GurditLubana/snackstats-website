import React from 'react'
import DisplayAmount from './DisplayAmount'


function TotalExpensesSection({reportData}:any) {
  // <div className="flex flex-col justify-center items-center md:col-span-2 col-span-1 bg-slate-800 rounded-xl shadow-lg mx-6 my-4 p-6 space-y-4">
      
  return (
    <div className="flex justify-center items-center md:col-span-2 col-span-1 bg-slate-900 rounded-xl shadow-lg mx-6  p-6 space-y-4">
      <div className='grid grid-cols-2 col-gap-9 grid-rows-3 gap-10 p-9'>
      
      <DisplayAmount title="Total Amount Spent" value={"$ " + reportData.totalAmountSpent} />
      <DisplayAmount title="Total Orders" value={"" + reportData.totalOrders} />
      <DisplayAmount title="Total Restaurants" value={"" + reportData.totalRestaurant} />
      <DisplayAmount title="Average Monthly Cost" value={"$ " + reportData.avgMonthlyCost} />
      <DisplayAmount title="Average Order Cost" value={"$ " + reportData.avgOrderCost} />
      <DisplayAmount title="Average Number of Orders per month" value={"" + reportData.avgMonthlyOrder} />
      <DisplayAmount title="Most Expensive Month" value={reportData.mostExpensiveMonth} />
    
    </div>
    </div>
  )
}

export default TotalExpensesSection
