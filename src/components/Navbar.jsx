import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from './../../public/assets/image/icon_img/Son logo-02 1.png'

// import fav_icon from './../../public/assets/images/fav.png'
import Image from 'next/image'
import Head from 'next/head'
import withNoSSR from '@/NoSSR'
import { useRouter } from 'next/router'


function Navbar() {
  const router = useRouter()
  const navlink = [
    {
      name: 'TRANG CHỦ',
      link: '/'
    }
    ,
    {
      name: 'SẢN PHẨM',
      link: '/Products'
    }
    ,
    {
      name: 'VỀ CHÚNG TÔI',
      link: '/AboutUS'
    }
    ,
    {
      name: 'TRUYỀN THÔNG',
      link: '/News'
    }
    ,
    {
      name: 'LIÊN HỆ',
      link: '/Contact'
    }
  ]



  return (

    <>
      <header className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image className="img-fluid logo_img" src={logo} alt="" />
        </a>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto bg-transparent">
              <li className="nav-item active">
                <a className="nav-link" href="/">TRANG CHỦ</a>
              </li>

              {navlink.map(({ link, name }, index) => (
                <li key={index}>
                  <Link
                    href={link} 
                    className={`${router.pathname === link ? 'nav-item active' : 'nav-item'}`}>
                    {name}
                  </Link>
                </li>
              ))
              }

            </ul>
          </div>
        </nav>
        <div className="d-flex flex-row align-items-center">
          <button className="btn_header">
            <span>ĐẶT NGAY</span>
          </button>
          <button className="navbar-toggle btn-custom collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
            <span className="filter">
              <span className="rotate" />
            </span>
          </button>
        </div>
      </header>

      {/* <script type="text/javascript" src='../assets/js/plugins/plugins.js' async></script>
      <script type="text/javascript" src='../assets/js/main.js' async ></script> */}
    </>
  )
}
export default Navbar
