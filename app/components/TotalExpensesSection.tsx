import React from 'react'
import DisplayAmount from './DisplayAmount'


function TotalExpensesSection({reportData}:any) {
  
  return (
    <div className="flex justify-center items-center md:col-span-2 col-span-1 bg-slate-800 rounded-xl shadow-lg mx-6">
      <div className='grid grid-cols-2 col-gap-9 grid-rows-3 gap-10 p-9'>
      
      <DisplayAmount className={'col-span-4 py-5'} title = {"Total Amount Spent"} value = {"$ " + reportData.totalAmountSpent}></DisplayAmount>
      <DisplayAmount className={'col-span-2 py-5'} title={"Total Orders"} value = {"" + reportData.totalOrders}></DisplayAmount>
      <DisplayAmount className={'col-span-2 py-5'} title={"Total Restaurants"} value = {"" + reportData.totalRestaurant}></DisplayAmount>
      <DisplayAmount className={'col-span-2 py-5'} title={"Average Monthly Cost"} value = {"$ " + reportData.avgMonthlyCost}></DisplayAmount>      
      <DisplayAmount className={'col-span-2 py-5'} title={"Average Order Cost"} value = {"$ " + reportData.avgOrderCost}></DisplayAmount>
      <DisplayAmount className={'col-span-2 py-5'} title={"Average Number of Orders per month"} value = {reportData.avgMonthlyOrder}></DisplayAmount>
      <DisplayAmount className={'col-span-2 py-5'} title={"Most Expensive Month"} value = {reportData.mostExpensiveMonth}></DisplayAmount>

    </div>
    </div>
  )
}

export default TotalExpensesSection
