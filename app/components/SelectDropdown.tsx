import React from 'react'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'

interface SelectDropdownProps {
    setMonthSelected: (month: string) => void;
    setYearSelected: (year: string) => void;
    disableMonthDropdown : boolean;
    yearArray: string[];
  }
  
  function SelectDropdown({ setMonthSelected, setYearSelected, disableMonthDropdown, yearArray}: SelectDropdownProps) {
    return (
    <div className='flex gap-3'>
      <SelectYear setYearSelected={setYearSelected} yearArray ={yearArray} />
      <SelectMonth setMonthSelected={setMonthSelected} disableMonthDropdown={disableMonthDropdown} />
    </div>
  )
}

export default SelectDropdown
