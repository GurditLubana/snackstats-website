import React from 'react'

type DisplayAmountProps = {

    title:string,
    amount: number,
    className: string;
}
function DisplayAmount({title, amount} : DisplayAmountProps) {
  return (
    <div>
      <p className='text-lg m-2'>{title}</p>
      <p className='text-5xl font-semibold'>${amount}</p>
    </div>
  )
}

export default DisplayAmount
