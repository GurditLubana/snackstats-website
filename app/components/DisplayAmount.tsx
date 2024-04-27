import React from 'react'

type DisplayAmountProps = {

    title:string,
    value: string,
    className?: string;
}
function DisplayAmount({title, value,className} : DisplayAmountProps) {
  return (
    <div className={className}>
      <p className='text-lg text-slate-200 m-3'>{title}</p>
      <p className='text-5xl text-slate-300 font-semibold'>{value}</p>
    </div>
  )
}

export default DisplayAmount
