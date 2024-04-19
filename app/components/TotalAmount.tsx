import React from 'react'
import DisplayAmount from './DisplayAmount'

function TotalAmount() {
  return (
    <div className='grid grid-cols-4 grid-rows-3 gap-9 p-5 '>
      <DisplayAmount className = {'col-span-4 '} title = {"Total Amount Spent"} number = {476.87}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Total Orders"} number = {56}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Total Restaurants"} number = {56}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Median Order Cost"} number = {56}></DisplayAmount>      
      <DisplayAmount className={'col-span-2'} title={"Average Order Cost"} number = {56}></DisplayAmount>

    </div>
  )
}

export default TotalAmount
