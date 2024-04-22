 import React from 'react'
import MostSpent from './MostSpent'
import MostOrders from './MostOrders'

 
 function BarGraphSection() {
   return (
    <div className="md:col-span-2 grid grid-rows-2 gap-9 bg-slate-800 rounded-xl p-6 shadow-lg">
        <MostSpent/>
       <MostOrders/>
    </div>
   )
 }
 
 export default BarGraphSection
 