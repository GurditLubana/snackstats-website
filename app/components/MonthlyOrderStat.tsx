import React, { useEffect, useState } from "react";
import SelectMonth from "./SelectMonth";
import DisplayAmount from "./DisplayAmount";

interface ReportData {
  reportData: any;
  averageMonthlyCost: number;
}
function MonthlyOrderStat({ reportData, averageMonthlyCost }: ReportData) {
  const [monthSelected, setMonthSelected] = useState("None");
  const [totalAmountSpent, setTotalAmountSpent] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [favRest, setfavRest] = useState("Some Random Name");

  useEffect(() => {
    const month = monthSelected.slice(0, 3);
    if (reportData && reportData[month]) {
      setTotalAmountSpent(reportData[month]["totalAmount"].toFixed(2));
      setTotalOrders(reportData[month]["totalOrders"]);
      setfavRest(reportData[month]["favRest"]);
    }
  }, [monthSelected, reportData]);

  return (
    <div className="md:col-span-2 col-span-4 flex justify-center p-4 bg-slate-900 rounded-lg shadow">
      <div className="flex flex-col gap-4">
        <SelectMonth setMonthSelected={setMonthSelected} />
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
          value={"$ " + averageMonthlyCost.toFixed(2)}
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
