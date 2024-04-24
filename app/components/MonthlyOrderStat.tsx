import React from "react";
import SelectMonth from "./SelectMonth";
import DisplayAmount from "./DisplayAmount";

function MonthlyOrderStat() {
  return (
    <div className="md:col-span-1 col-span-4 p-6 mt-9">
      <SelectMonth/>
      <DisplayAmount title="Total Amount Spent" value="$ 0" className="my-6"/>
      <DisplayAmount title="Total Number of Orders" value="0" className="my-6"/>
      <DisplayAmount title="Average Monthly Spent" value="$ 0" className="my-6"/>
      <DisplayAmount title="Favourite Restaurant this Month" value="Some Random Name" className="monthlyFav my-6"/>
      </div>
  );
}

export default MonthlyOrderStat;
