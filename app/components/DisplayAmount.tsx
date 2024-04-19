import React from 'react'

type DisplayAmountProps = {

    title:string,
    number: number,
    className?: string;
}
function DisplayAmount({title, number,className} : DisplayAmountProps) {
  return (
    <div className={className}>
      <p className='text-lg text-slate-200 m-2'>{title}</p>
      <p className='text-5xl text-slate-300 font-semibold'>${number}</p>
    </div>
  )
}

export default DisplayAmount
