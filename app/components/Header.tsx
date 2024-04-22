import React from 'react';
import Image from 'next/image';
import logoImage from '../../public/logo2.png';

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:col-span-4 space-5 justify-center items-center rounded-xl p-6 shadow-lg">
      <Image src={logoImage} alt="Company Logo" height={90} width={70}/>
      <h1 className="text-5xl font-bold text-center ms-9 md:mt-0">Snack Stats</h1>
    </div>
  );
}

export default Header;
