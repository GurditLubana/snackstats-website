import React, { useEffect, useState } from "react";
import SelectMonth from "./SelectMonth";
import DisplayAmount from "./DisplayAmount";
import SelectDropdown from "./SelectDropdown";

interface ReportData {
  reportData: any;
  averageMonthlyCost: number;
}
function MonthlyOrderStat({ reportData, averageMonthlyCost }: ReportData) {
  const [yearSelected, setYearSelected] =useState("None")
  const [monthSelected, setMonthSelected] = useState("None");
  const [disableMonthDropdown, setDisableMonthDropdown] = useState(true);
  const [totalAmountSpent, setTotalAmountSpent] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [favRest, setfavRest] = useState("No Data Available");
  const[avrgMonth, setAvrgMonth] = useState("0")
  const[yearArray, setYearArray] = useState(["1947", "1984"])

  useEffect(() => {
    const month = monthSelected.slice(0, 3);
    
    if (reportData) {

      setYearArray(Object.keys(reportData));

      if(reportData[yearSelected] && reportData[yearSelected][month] ){

        setTotalAmountSpent(reportData[yearSelected][month]["totalAmount"].toFixed(2));
        setTotalOrders(reportData[yearSelected][month]["totalOrders"]);
        setfavRest(reportData[yearSelected][month]["favRest"]);
        setAvrgMonth((averageMonthlyCost.toFixed(2)).toString())
      }
    }

    if(yearSelected !== 'None'){
      console.log('it is false')
      setDisableMonthDropdown(false);
  
    }
  }, [averageMonthlyCost, monthSelected, reportData, yearSelected]);
  
  return (
    <div className="md:col-span-2 col-span-4 flex justify-center p-4 bg-slate-900 rounded-lg shadow">
      <div className="flex flex-col gap-4">

        <SelectDropdown setMonthSelected={setMonthSelected} setYearSelected={setYearSelected} yearArray ={yearArray} disableMonthDropdown={disableMonthDropdown}/>

        <DisplayAmount
          title="Total Amount Spent"
          value={"$ " + totalAmountSpent}
        />
        <DisplayAmount
          title="Total Number of Orders"
          value={"" + totalOrders}
        />
        <DisplayAmount
          title="Average Monthly Spent"
          value={"$ " + avrgMonth}
        />
        <DisplayAmount
          title="Favourite Restaurant this Month"
          value={favRest}
        />
      </div>
    </div>
  );
}

export default MonthlyOrderStat;
