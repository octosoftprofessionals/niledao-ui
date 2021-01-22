import { Link } from 'gatsby'
import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'

const Nav = styled.nav`
  ${tw`relative bg-primary text-back-light
  shadow-lg sticky top-0 z-50 h-16`}
  & .nav-link {
    ${tw`px-6 py-3 m-0 sm:hover:text-accent-dark`}
    text-decoration: none;
    &.current-page {
      ${tw`bg-back-light rounded-lg shadow-sm text-primary`}
    }
  }
`

const Menu = styled.div`
  ${tw`flex items-center flex-col sm:flex-row m-2 h-screen w-screen sm:h-auto sm:w-auto pt-32 sm:p-0
  transform translate-x-full sm:translate-x-0 top-0 right-0 fixed
  transition-all duration-300 ease-in-out`}

  &.show {
    ${tw`translate-x-0 left-0 bg-primary-dark m-0 `}
  }
`

export default function Navigation(): JSX.Element {
  const [showMenus, setMenuShow] = useState(false)
  return (
    <Nav>
      <span tw="z-50 sm:hidden fixed top-0 left-0 my-5 mx-1" onClick={() => setMenuShow(!showMenus)}>
        📂
      </span>
      <span tw="font-semibold text-2xl tracking-tight text-back-light fixed top-0 left-0 my-4 mx-8 sm:mx-2">
        <Link to="/">Boilerplate</Link>
      </span>

      <Menu className={showMenus ? 'show' : ''}>
        <Link className="nav-link" to="/components/" activeClassName="current-page">
          Components
        </Link>
        <Link className="nav-link" to="/about/" activeClassName="current-page">
          About
        </Link>
        <Link className="nav-link" to="/services/" activeClassName="current-page">
          Services
        </Link>
        <Link className="nav-link" to="/blog/" activeClassName="current-page">
          Blog
        </Link>
      </Menu>
    </Nav>
  )
}
