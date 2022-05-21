import React from 'react'
import Link from 'next/link'

const routesArray = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/pricing',
    text: 'Pricing'
  }
]


const NavBar = () => {
  return (
    <nav>
        <ul>
          {
            routesArray.map((route, index) => {
              return (
                <li key={index}>
                  <Link href={route.href}>
                    <a>{route.text}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
    </nav>
  )
}

export default NavBar