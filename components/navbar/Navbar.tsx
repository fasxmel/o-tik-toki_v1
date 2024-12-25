import React from 'react'
import Logo from './Logo';
import Search from './Search';
import Profile from './Profile';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='p-6 border-b'>
      <div className='flex justify-between items-center'>
       <Logo />
       <Search />
       <Profile />
      </div>
    </nav>
  )
}

export default Navbar;