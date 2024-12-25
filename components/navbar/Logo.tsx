
import Link from 'next/link';
import { PiMusicNote } from "react-icons/pi";
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href="/" className='flex items-center font-bold text-2xl gap-1 group'>
       <img src="/images/favicon.ico" className='rounded-full' alt="logo" />
      <p className='left-0'>
        <span className='text-[#057A07]'>Romano</span>
        <span className='text-[#728DD6]'> TikToki</span>
      </p>
    <PiMusicNote /> 
    </Link>
  )
}

export default Logo;