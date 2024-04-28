 import React from 'react'
import MostSpent from './MostSpent'
import MostOrders from './MostOrders'

 
 function BarGraphSection({reportData}:any) {
  let favRestByAmount;
  let favRestByOrderCount;
  if (reportData['favRest']) {
    favRestByAmount = reportData['favRest']['byAmountSpent'];
    favRestByOrderCount = reportData['favRest']['byOrdersPlaced'];
  }
  console.log("This is message form bargraph ",reportData, favRestByAmount)
   return (
    <div className="md:col-span-2 grid grid-rows-2 bg-slate-900 rounded-xl pt-9 me-6 shadow-lg">
      <MostSpent reportData = {favRestByAmount}/>
      <MostOrders reportData= {favRestByOrderCount}/>
      
    </div>
   )
 }
 
 export default BarGraphSection
 