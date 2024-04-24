import React from 'react'
import DisplayAmount from './DisplayAmount'

function TotalAmount() {
  return (
    <div className='grid grid-cols-4 grid-rows-3 gap-9 p-5 '>
      <DisplayAmount className = {'col-span-4'} title = {"Total Amount Spent"} value = {'476.87'}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Total Orders"} value = {'56'}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Total Restaurants"} value = {'56'}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Median Order Cost"} value = {'56'}></DisplayAmount>      
      <DisplayAmount className={'col-span-2'} title={"Average Order Cost"} value = {'56'}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Average Number of Orders per month"} value = {'3'}></DisplayAmount>
      <DisplayAmount className={'col-span-2'} title={"Busiest month for Ordering"} value = {'January'}></DisplayAmount>

    </div>
  )
}

export default TotalAmount
