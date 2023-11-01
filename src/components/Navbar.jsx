import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from './../../public/assets/images/logo-text.png'
import fav_icon from './../../public/assets/images/fav.png'
import Image from 'next/image'
import Head from 'next/head'
import withNoSSR from '@/NoSSR'
import { useRouter } from 'next/router'


function Navbar() {
  const router = useRouter()
  const navlink = [
    {
      name: 'Home',
      link: '/'
    }
    ,
    {
      name: 'Services',
      link: '/Services'
    }
    ,
    {
      name: 'About',
      link: '/About'
    }
    ,
    {
      name: 'Blog',
      link: '/Blog'
    }
    ,
    {
      name: 'Contact',
      link: '/Contact'
    }
  ]



  return (

    <>
      <header className="header-section header-menu">
        <nav className="navbar w-100 flex-nowrap px-2 py-6 ps-2 ps-xl-10 ps-xxl-10 navbar-expand-xl">
          <div className="sidebar-close mobile-menu">
            <button className="d-center d-grid d-xl-none">
              <i className="material-symbols-outlined mat-icon fs-four"> menu_open </i>
              <span className="fs-six">MENU</span>
            </button>
          </div>
          <a href="/" className="navbar-brand ms-4 ms-xxl-15 d-flex align-items-center gap-2">
            <Image src={fav_icon} className="logo" alt="logo" />
            <Image src={logo} className="logo-text d-xxl-block d-none" alt="logo-text" />
          </a>
          <div className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2" id="navbar-content">
            <ul className="navbar-nav d-xl-flex d-none gap-3 py-4 py-lg-0 ml-auto pe-20 align-self-center">
              {navlink.map(({ link, name }, index) => (
                <li key={index}>
                  <Link                    
                    href={link} legacyBehavior onClick={() => setActive(!active)}>
                    <a className={`${router.pathname === link ? 'dropdown-nav active' : 'dropdown-nav'}`}>{name}</a>
                  </Link>
                </li>
              ))
              }
            </ul>
            <div className="contact-info ms-xl-0 ms-xxl-5 d-none d-sm-flex align-items-center gap-2">
              <i className="material-symbols-outlined mat-icon"> smartphone </i>
              <span>(302) 555-0107</span>
            </div>
          </div>
        </nav>
      </header>
      <script type="text/javascript" src='../assets/js/plugins/plugins.js' async></script>
      <script type="text/javascript" src='../assets/js/main.js' async ></script>
    </>
  )
}
export default Navbar
