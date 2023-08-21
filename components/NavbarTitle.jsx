import Link from 'next/link'
import React from 'react'

const NavbarTitle = () => {
  return (
      <Link href={"/"} className='text-center hover:cursor-pointer'>
          <h2 className='text-2xl font-semibold font-title'>La Voie De L&rsquo;Info</h2>
          <p className="font-normal ">Votre fenêtre sur l&rsquo;actualité</p>

    </Link>
  )
}

export default NavbarTitle