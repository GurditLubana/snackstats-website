import React from 'react'
import Image from 'next/image'
import logoImage from '../../public/logo2.png'

function Header() {
  return (
    <div className="flex md:col-span-4  rounded-xl p-6 shadow-lg ps-9">
      <Image src={logoImage} alt="logoImage" height={90} width={70}/>
        
    </div>
  )
}

export default Header
