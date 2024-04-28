import React, { useEffect, useState } from "react";
import SelectMonth from "./SelectMonth";
import DisplayAmount from "./DisplayAmount";

interface ReportData {
  reportData : any,
  averageMonthlyCost : number
}
function MonthlyOrderStat({reportData, averageMonthlyCost}: ReportData) {
  const [monthSelected, setMonthSelected] = useState('None')
  const [totalAmountSpent, setTotalAmountSpent] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [favRest, setfavRest] = useState("Some Random Name");
  
  useEffect(()=>{

    const month = monthSelected.slice(0,3)
    // console.log(month)
    if(reportData && reportData[month]){

      setTotalAmountSpent((reportData[month]['totalAmount']).toFixed(2))
      setTotalOrders((reportData[month]['totalOrders']))
      setfavRest((reportData[month]['favRest']))
    }

  },[monthSelected, reportData])

  return (
    <div className="md:col-span-1 col-span-4 p-6 mt-9">
      <SelectMonth setMonthSelected ={setMonthSelected}/>
      <DisplayAmount title="Total Amount Spent" value={"$ " + totalAmountSpent} className="my-6"/>
      <DisplayAmount title="Total Number of Orders" value={"" + totalOrders} className="my-6"/>
      <DisplayAmount title="Average Monthly Spent" value={"$ " + averageMonthlyCost.toFixed(2)} className="my-6"/>
      <DisplayAmount title="Favourite Restaurant this Month" value= {favRest} className="monthlyFav my-6"/>
      </div>
  );
}

export default MonthlyOrderStat;
