import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from './../../public/assets/image/icon_img/Son logo-02 1.png'



import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'


function Navbar() {
  const router = useRouter()
  const navlink = [
    {
      name: "TRANG CHỦ",
      link: "/"
    }
    ,
    {
      name: "SẢN PHẨM",
      link: "/Products"
    }
    ,
    {
      name: "VỀ CHÚNG TÔI",
      link: "/AboutUS"
    }
    ,
    {
      name: "TRUYỀN THÔNG",
      link: "/News"
    }
    ,
    {
      name: "LIÊN HỆ",
      link: "/Contact"
    }
  ]

  return (

    <>
      <Head>
        <link rel="stylesheet" href="./assets/css/main.css" />
      </Head>
      <header className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image className="img-fluid logo_img" src={logo} alt="" />
        </Link>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto bg-transparent">

              {navlink.map(({ link, name }, index) => (
                <li
                  key={index}
                  className={`${(router.pathname.toString() === link) ? 'nav-item active' : 'nav-item'}`}
                >
                  <Link href={link} className='nav-link'>
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
      <Script id="jquery1" type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js" />
      <Script id="popper" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous" />
      <Script id="bs4" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous" />  
    </>
  )
}
export default Navbar
