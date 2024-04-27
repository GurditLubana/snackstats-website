import React from 'react'
import DisplayAmount from './DisplayAmount'


function TotalExpensesSection({reportData}:any) {
  
  return (
    <div className="md:col-span-2 col-span-1 bg-slate-800 rounded-xl p-4 shadow-lg">
      <div className='grid grid-cols-4 grid-rows-3 gap-9 p-5 '>
      
      <DisplayAmount className = {'col-span-4'} title = {"Total Amount Spent"} value = {"$ " + reportData.totalAmountSpent}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Total Orders"} value = {"" + reportData.totalOrders}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Total Restaurants"} value = {"" + reportData.totalRestaurant}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Average Monthly Cost"} value = {"$ " + reportData.avgMonthlyCost}></DisplayAmount>      
      <DisplayAmount className={'col-span-2'} title={"Average Order Cost"} value = {"$ " + reportData.avgOrderCost}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Average Number of Orders per month"} value = {reportData.avgMonthlyOrder}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Most Expensive Month"} value = {reportData.mostExpensiveMonth}></DisplayAmount>

    </div>
    </div>
  )
}

export default TotalExpensesSection
