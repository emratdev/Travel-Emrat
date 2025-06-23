'use client';
import React from 'react';
import Nav from './Nav';
import MobileNavbar from './MobileNavbar';

const ResponsiveNav = () => {
    const [showNav, setShowNav] = React.useState(false);
    const handNavShow = () => setShowNav(true)
    const handleCloseNav = () => setShowNav(false)

  return (
    <div>
        <Nav openNav={handNavShow} />
        <MobileNavbar showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  )
}

export default ResponsiveNav