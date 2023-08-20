import Link from 'next/link'
import React from 'react'
import NavbarTitle from './NavbarTitle'

const navLinks = [
  {
    id: 0,
    name: "Politique",
    url: "/politic"
  },
  {
    id: 1,
    name: "Economie",
    url: "/economie"
  },
  {
    id: 2,
    name: "Tech",
    url: "/tech"
  },
  {
    id: 3,
    name: "Sport",
    url: "/sport"
  },
  {
    id: 4,
    name: "Culture",
    url: "/culture"
  },
  {
    id: 5,
    name: "LifeStyle",
    url: "/lifeStyle"
  },
]

const NavbarCategory = () => {
  return (
    <>
      
    <ul className="hidden gap-1 pl-5 md:pl-12 sm:flex">
      {navLinks.map((link, i) => (
        <li className="p-2 rounded-full hover:bg-gray-100 " key={i}>
          <Link href={link.url}>{link.name}</Link>
        </li>
      ))}
      </ul>
      <div className='text-center sm:hidden'>
          <h2 className='text-2xl font-semibold font-title'>La Voie De L&rsquo;Info</h2>
          <p className="text-xs font-normal">Votre fenêtre sur l&rsquo;actualité</p>

    </div>
      </>
  )
}

export default NavbarCategory