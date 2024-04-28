import React from 'react';

type DisplayAmountProps = {
  title: string,
  value: string
  className?: string
}

function DisplayAmount({ title, value }: DisplayAmountProps) {
  return (
    <div className={`transition-all transform hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center p-4 bg-slate-800 rounded-lg`}>
      <p className='text-md text-slate-300 mb-2'>{title}</p>
      <p className='text-4xl text-white font-semibold'>{value}</p>
    </div>
  );
}

export default DisplayAmount;
