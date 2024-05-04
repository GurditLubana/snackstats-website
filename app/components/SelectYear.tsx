import React from 'react'
import { Select } from "@radix-ui/themes";

interface SelectYearProps {
    setYearSelected: (year: string) => void;
    yearArray: string[];
  }

function SelectYear({ setYearSelected , yearArray}: SelectYearProps) {
  const handleValueChange = (value: string) => {
    setYearSelected(value);
  };
  console.log(yearArray);
  return (
    <div className="my-3">
      <Select.Root onValueChange={handleValueChange} size="3" defaultValue="Select an Year">
        <Select.Trigger color="purple" />
        <Select.Content highContrast color="indigo" variant="solid">
          <Select.Item disabled value="Select an Year">
            Select an Year
          </Select.Item>
          {yearArray.map(year=>(
            <Select.Item key={year} value={`${year}`}>{year}</Select.Item>

          ))}
          
        </Select.Content>
      </Select.Root>
    </div>
  )
}

export default SelectYear
