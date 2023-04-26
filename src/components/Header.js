import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href={'/'}>Go To home</Link>
        </div>
        <div className='links'>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/code/repos'}>Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
