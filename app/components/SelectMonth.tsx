import React from 'react'
import { Select } from "@radix-ui/themes";


function SelectMonth({ setMonthSelected }: { setMonthSelected: (month: string) => void }) {
  const handleValueChange = (value: string) => {
    setMonthSelected(value);
  };

  return (
    <div className="my-3">
      <Select.Root onValueChange={handleValueChange} size="3" defaultValue="Select a Month">
        <Select.Trigger color="purple" />
        <Select.Content highContrast color="indigo" variant="solid">
          <Select.Item disabled value="Select a Month">
            Select a Month
          </Select.Item>
          <Select.Item value="January">January</Select.Item>
          <Select.Item value="February">February</Select.Item>
          <Select.Item value="March">March</Select.Item>
          <Select.Item value="April">April</Select.Item>
          <Select.Item value="May">May</Select.Item>
          <Select.Item value="June">June</Select.Item>
          <Select.Item value="July">July</Select.Item>
          <Select.Item value="August">August</Select.Item>
          <Select.Item value="September">September</Select.Item>
          <Select.Item value="October">October</Select.Item>
          <Select.Item value="November">November</Select.Item>
          <Select.Item value="December">December</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

export default SelectMonth
