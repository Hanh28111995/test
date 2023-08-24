import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import $ from 'jquery'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // useEffect(() => {
  //   import('../../public/assets/js/plugins/plugins.js')
  //   import('../../public/assets/js/plugins/plugin-custom.js')
  //   import('../../public/assets/js/main.js')
  //   import('../../public/assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js/index.js')
  // }, [])

  return (

    <>
      < Head >
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
        <link rel="stylesheet" href="assets/css/style.min.css" />
        <title>xxxxx</title>
        <Script src='../../public/assets/js/plugins/plugins.js' />
        <Script src='../../public/assets/js/plugins/plugin-custom.js' />
        <Script src='../../public/assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js/index.js' />
        <Script src='../../public/assets/js/main.js' />
      </Head >

      {/* <!-- start preloader --> */}
      < div >
        <button className="scrollToTop d-none d-md-flex d-center" aria-label="scroll Bar Button">Back To Top</button>
        {/* Scroll To Top End */}
        {/* Start Custom Cursor */}
        <div className="mouse-follower">
          <span className="cursor-outline" />
          <span className="cursor-dot" />
        </div>
        {/* End Custom Cursor */}
        {/* header-section start */}
        <header className="header-section header-menu">
          <nav className="navbar w-100 flex-nowrap px-2 py-6 ps-2 ps-xl-10 ps-xxl-10 navbar-expand-xl">
            <div className="sidebar-close mobile-menu">
              <button className="d-center d-grid d-xl-none">
                <i className="material-symbols-outlined mat-icon fs-four"> menu_open </i>
                <span className="fs-six">MENU</span>
              </button>
            </div>
            <a href="index.html" className="navbar-brand ms-4 ms-xxl-15 d-flex align-items-center gap-2">
              <img src="assets/images/fav.png" className="logo" alt="logo" />
              <img src="assets/images/logo-text.png" className="logo-text d-xxl-block d-none" alt="logo-text" />
            </a>
            <div className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2" id="navbar-content">
              <ul className="navbar-nav d-xl-flex d-none gap-3 py-4 py-lg-0 ml-auto pe-20 align-self-center">
                <li>
                  <a className="dropdown-nav" href="index.html">Home</a>
                </li>
                <li>
                  <a className="dropdown-nav" href="our-services-1.html">Services</a>
                </li>
                <li>
                  <a className="dropdown-nav" href="about-us.html">About</a>
                </li>
                <li className="dropdown show-dropdown">
                  <button type="button" aria-label="Navbar Dropdown Button" className="dropdown-toggle dropdown-nav">Pages</button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="pricing-plan.html">pricing plan</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="privacy-policy.html">privacy policy</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="terms-conditions.html">terms conditions</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-nav" href="blog.html">Blog</a>
                </li>
                <li>
                  <a className="dropdown-item" href="contact.html">Contact</a>
                </li>
              </ul>
              <div className="contact-info ms-xl-0 ms-xxl-5 d-none d-sm-flex align-items-center gap-2">
                <i className="material-symbols-outlined mat-icon"> smartphone </i>
                <span>(302) 555-0107</span>
              </div>
            </div>
          </nav>
        </header>
        {/* header-section end */}
        {/* Login Registration start */}
        <div className="log-reg cmn-popup">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="modal fade" id="loginMod">
                  <div className="modal-dialog pt-8 pt-sm-0 modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header border-0 p-0 justify-content-between position-absolute">
                        <button type="button" className="btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
                          <i className="material-symbols-outlined fs-two"> close </i>
                        </button>
                      </div>
                      <div className="tab-content">
                        <ul className="nav flex-nowrap log-reg-btn justify-content-center">
                          <li className="bottom-area" role="presentation">
                            <button className="nav-link py-4 active" id="loginArea-tab" data-bs-toggle="tab" data-bs-target="#loginArea" type="button" role="tab" aria-controls="loginArea" aria-selected="true">
                              Login
                            </button>
                          </li>
                          <li className="bottom-area" role="presentation">
                            <button className="nav-link py-4" id="regArea-tab" data-bs-toggle="tab" data-bs-target="#regArea" type="button" role="tab" aria-controls="regArea" aria-selected="false">
                              Sign Up
                            </button>
                          </li>
                        </ul>
                        <div className="tab-pane fade show active" id="loginArea" role="tabpanel" aria-labelledby="loginArea-tab">
                          <div className="login-content">
                            <div className="modal-body p-0">
                              <form action="#" className="p-4 p-sm-8">
                                <p>Sign up for faster checkout, special offers, and customer
                                  support!</p>
                                <div className="form-inside mt-6 p-3 p-sm-6">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="single-input text-start">
                                        <label htmlFor="loginemail">Email*</label>
                                        <input type="text" id="loginemail" placeholder="Enter your email" autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="single-input text-start">
                                        <label htmlFor="loginpassword">Password*</label>
                                        <div className="pass-box d-center position-relative">
                                          <input type="text" id="loginpassword" placeholder="Enter your Password" autoComplete="off" />
                                          <i className="material-symbols-outlined show-hide-pass position-absolute end-0 pe-4">
                                            visibility </i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="checkbox-item d-grid gap-4 mt-4 mt-sm-6">
                                        <label className="single-radio checkbox position-relative d-flex align-items-center px-5 ps-8">
                                          <span className="text-start d-flex gap-1">
                                            I agree to the <span>Terms of
                                              Services</span>
                                          </span>
                                          <input type="checkbox" name="agree" />
                                          <span className="checkmark start-0" />
                                        </label>
                                      </div>
                                      <div className="btn-area mt-4 mt-sm-8">
                                        <button className="box-style btn-box">
                                          Login
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="regArea" role="tabpanel" aria-labelledby="regArea-tab">
                          <div className="reg-content regMod">
                            <div className="modal-body p-0">
                              <form action="#" className="p-4 p-sm-8">
                                <p>Sign up for faster checkout, special offers, and customer
                                  support!</p>
                                <div className="form-inside mt-6 p-3 p-sm-6">
                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="single-input text-start">
                                        <label htmlFor="fname">First Name*</label>
                                        <input type="text" id="fname" placeholder="Enter Your First Name" autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="single-input text-start">
                                        <label htmlFor="lname">Last Name*</label>
                                        <input type="text" id="lname" placeholder="Enter Your Last Name" autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="single-input text-start">
                                        <label htmlFor="email">Email*</label>
                                        <input type="text" id="email" placeholder="Enter your email" autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="single-input text-start">
                                        <label htmlFor="password">Password*</label>
                                        <div className="pass-box d-center position-relative">
                                          <input type="text" id="password" placeholder="Enter your Password" autoComplete="off" />
                                          <i className="material-symbols-outlined show-hide-pass position-absolute end-0 pe-4">
                                            visibility </i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="single-input text-start">
                                        <label htmlFor="cpassword">Confirm Password*</label>
                                        <div className="pass-box d-center position-relative">
                                          <input type="text" id="cpassword" placeholder="Enter your Password" autoComplete="off" />
                                          <i className="material-symbols-outlined show-hide-pass position-absolute end-0 pe-4">
                                            visibility </i>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="checkbox-item d-grid gap-4 mt-4 mt-sm-6">
                                        <label className="single-radio checkbox position-relative d-flex align-items-center px-5 ps-8">
                                          <span className="text-start d-flex gap-1">
                                            I agree to the <span>Terms of
                                              Services</span>
                                          </span>
                                          <input type="checkbox" name="agree" />
                                          <span className="checkmark start-0" />
                                        </label>
                                      </div>
                                      <div className="btn-area mt-4 mt-sm-8">
                                        <button className="box-style btn-box">
                                          Sign Up
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Login Registration end */}
        {/* Sidebar Menu start */}
        <div className="sidebar-wrapper">
          <div className="position-relative">
            <div className="side-menubar py-6 d-flex flex-column justify-content-between align-items-center">
              <div className="sidebar-close d-none d-xl-block">
                <button className="d-center d-grid">
                  <i className="material-symbols-outlined mat-icon fs-three"> menu_open </i>
                  <span>MENU</span>
                </button>
              </div>
              <ul className="d-grid gap-4 social-area">
                <li>
                  <a href="https://www.facebook.com/" aria-label="Facebook" className="d-center">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" aria-label="Instagram" className="d-center">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" aria-label="Linkedin" className="d-center">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" aria-label="Twitter" className="d-center">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
              <div className="bottom-area">
                <select>
                  <option value={1}>ENG</option>
                  <option value={2}>BNG</option>
                  <option value={3}>HIN</option>
                </select>
              </div>
            </div>
            <div className="sidebar-content d-center flex-columnn">
              <div className="header-section d-block">
                <div className="navbar bg-transparent">
                  <ul className="navbar-nav d-xl-flex gap-2 gap-md-5 py-4 py-lg-0 px-4 px-lg-0 align-self-center">
                    <li>
                      <a className="dropdown-nav fs-three heading" href="index.html">Home</a>
                    </li>
                    <li>
                      <a className="dropdown-nav fs-three heading" href="our-services-1.html">Services</a>
                    </li>
                    <li>
                      <a className="dropdown-nav fs-three heading" href="about-us.html">About</a>
                    </li>
                    <li className="dropdown show-dropdown">
                      <button type="button" aria-label="Navbar Dropdown Button" className="dropdown-toggle dropdown-nav fs-three heading">Pages</button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item fs-three heading" href="pricing-plan.html">pricing
                            plan</a>
                        </li>
                        <li>
                          <a className="dropdown-item fs-three heading" href="privacy-policy.html">privacy
                            policy</a>
                        </li>
                        <li>
                          <a className="dropdown-item fs-three heading" href="terms-conditions.html">terms
                            conditions</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-nav fs-three heading" href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a className="dropdown-item fs-three heading" href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-items w-100 bottom-0">
                <div className="row">
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Office</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> location_on </i>
                        </div>
                        <div className="right-item w-75">
                          <h5>London</h5>
                          <span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Email address</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> mail </i>
                        </div>
                        <div className="right-item d-grid">
                          <span><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="82c7fae3eff2eee7c2e5efe3ebeeace1edef">[email&nbsp;protected]</a></span>
                          <span><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="185d60797568747d587f75797174367b7775">[email&nbsp;protected]</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Phone Number</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> call </i>
                        </div>
                        <div className="right-item d-grid">
                          <span>(302) 555-0107</span>
                          <span>(302) 555-0107</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="single-item p-5 py-xxl-10 px-xxl-8">
                      <h4 className="mb-6">Working Hours</h4>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="icon-box d-center">
                          <i className="material-symbols-outlined mat-icon fs-fure"> schedule </i>
                        </div>
                        <div className="right-item w-50">
                          <span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Menu end */}
        {/* Banner-section start */}
        <section className="banner-section index-one overflow-hidden">
          <div>
            <div className="shape-area">
              <img src="assets/images/abs-items/planet.png" className="shape-1" alt="icon" />
              <img src="assets/images/abs-items/console-1.png" className="shape-2" alt="icon" />
              <img src="assets/images/abs-items/console-2.png" className="shape-3" alt="icon" />
            </div>
            <div className="ellipse-area ellipse-one position-absolute">
              <img src="assets/images/abs-items/ellipse-6.png" className="ellipse-1" alt="icon" />
              <img src="assets/images/abs-items/ellipse-4.png" className="ellipse-2" alt="icon" />
              <img src="assets/images/abs-items/ellipse-5.png" className="ellipse-3" alt="icon" />
            </div>
            <div className="ellipse-area ellipse-two position-absolute">
              <img src="assets/images/abs-items/ellipse-6.png" className="ellipse-1" alt="icon" />
              <img src="assets/images/abs-items/ellipse-3.png" className="ellipse-3" alt="icon" />
              <img src="assets/images/abs-items/ellipse-4.png" className="ellipse-4" alt="icon" />
              <img src="assets/images/abs-items/ellipse-1.png" className="ellipse-2" alt="icon" />
              <img src="assets/images/abs-items/ellipse-5.png" className="ellipse-5" alt="icon" />
            </div>
            <div className="ellipse-area ellipse-three position-absolute">
              <img src="assets/images/abs-items/ellipse-6.png" className="ellipse-1" alt="icon" />
            </div> */{'}'}
            {'{'}/* <div className="ellipse-area ellipse-four position-absolute">
            </div></div>

          <img src="assets/images/abs-items/ellipse-6.png" className="ellipse-1" alt="icon" />
          <img src="assets/images/abs-items/ellipse-3.png" className="ellipse-2" alt="icon" />
          <img src="assets/images/abs-items/ellipse-2.png" className="ellipse-3" alt="icon" />
          <div className="overlay overflow-hidden">
            <div className="banner-content position-relative">
              <div className="container">
                <div className="row justify-content-between justify-content-center align-items-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="main-content">
                      <div className="mb-8">
                        <h3 className="visible-slowly-bottom sub-title"><span>Building Gaming Worlds</span></h3>
                        <span className="display-one">We Craft Games
                          <br />
                          <span className="typed d-inline-block">Entertainment</span>
                        </span>
                        <p className="fs-four">Developing games that are imaginative, fun and bringing
                          colors to the gaming world</p>
                      </div>
                      <div className="btn-area alt-bg">
                        <a href="game.html" className="box-style btn-box d-center">
                          Explore Our Games
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mt-10 mt-lg-0 col-10">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner-section end */}
        {/* About block section start */}
        <section className="about-block pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
                <div className="sec-img mw-100 position-relative d-center">
                  <img src="assets/images/about-block-bg.png" alt="sec-img" />
                  <div className="experience p-2 p-lg-4 position-absolute ">
                    <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-inline-flex d-center gap-3">
                      <div className="counters d-center">
                        <span className="odometer display-four" data-odometer-final={20}>0</span>
                        <span className="display-four visible-slowly-bottom symbol">+</span>
                      </div>
                      <span className="w-25 d-inline-bloc">Years Of Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-6">
                <div className="section-text">
                  <h4 className="sub-title">Welcome to <span>Gamestorm</span> Game Studios</h4>
                  <span className="fs-two heading mb-6">Bringing people together through <span>the power of
                    play</span></span>
                  <p>As Game Gamestorm, we continue to open doors to new worlds every day and we are
                    working excitedly for creating new games and unique ideas!</p>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={500}>0</span>
                        <span className="fs-three heading">M</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        Downloads, or 6% of the world’s population.
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={2}>0</span>
                        <span className="fs-three heading">M</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        Our games have over 20 million unique daily users.
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={52}>0</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        Experts collaborating to blow your mind in one place.
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item mb-8 pb-4">
                      <div className="counters mb-3 d-flex align-items-center">
                        <span className="odometer fs-three heading" data-odometer-final={4}>0</span>
                        <span className="fs-three heading">k</span>
                        <span className="fs-three heading symbol">+</span>
                      </div>
                      <span className="name-area fs-seven">
                        The Gamestorm Studio is launching with 4K+ Games.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="btn-area alt-bg mt-2">
                  <a href="game.html" className="box-style btn-box d-center">
                    Explore Our Games
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About block section end */}
        {/* Our Games section start */}
        <section className="our-games overflow-hidden pt-120 pb-120">
          <div className="container singletab">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-text text-center">
                  <h4 className="sub-title">Crafting Unforgettable <span>Gaming Experiences</span></h4>
                  <span className="fs-two heading mb-6">Our Games are <span>Vibrant</span> Worlds With
                    <span>Charming</span> Characters</span>
                  <p>Our projects feature unique mechanics, fine-tuned game play, and eye-catching visual
                    style.Over 100 million people play our games every month</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <ul className="nav tablinks flex-wrap d-center mb-6 mb-sm-10 d-inline-flex gap-4 p-3 tab-area">
                  <li className="nav-item">
                    <button className="nav-link d-center box-style btn-box p-0 active">
                      <span className="icon-area">
                        <i className="ri-macbook-line fs-two" />
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link d-center box-style btn-box p-0">
                      <span className="icon-area">
                        <i className="ri-apple-line fs-two" />
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link d-center box-style btn-box p-0">
                      <span className="icon-area">
                        <i className="ri-google-play-line fs-two" />
                      </span>
                    </button>
                  </li>
                  {/* ///////icon list ////// */}
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="tabcontents">
                  <div className="tabitem active">
                    <div className="cus-mar">
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-1.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Upgrade Your Weapon</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabitem">
                    <div className="cus-mar">
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-4.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Galactic Escape</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabitem">
                    <div className="cus-mar">
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-3.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Shadow Quest</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabitem">
                    <div className="cus-mar">
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-3.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Shadow Quest</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-4.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Galactic Escape</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-5.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Cyber Crusade</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-1.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Upgrade Your Weapon</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabitem">
                    <div className="cus-mar">
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-1.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Upgrade Your Weapon</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-3.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Shadow Quest</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-4.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Galactic Escape</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-5.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Cyber Crusade</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabitem">
                    <div className="cus-mar">
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-4.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Galactic Escape</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-5.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Cyber Crusade</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-1.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Upgrade Your Weapon</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-3.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Shadow Quest</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabitem">
                    <div className="cus-mar">
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-5.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Cyber Crusade</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-1.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Upgrade Your Weapon</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-3.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Shadow Quest</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box position-relative p-3 p-md-4">
                        <span className="feature-tag d-flex d-md-none d-xl-flex d-center position-absolute">Feature</span>
                        <div className="row align-items-center">
                          <div className="col-md-5">
                            <div className="position-relative d-center">
                              <img src="assets/images/game-image-4.png" className="w-100" alt="sec-img" />
                              <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                Play
                              </a>
                            </div>
                          </div>
                          <div className="col-md-7 mt-6 mt-md-0">
                            <a href="game-details.html">
                              <h3 className="visible-slowly-bottom mb-4">Galactic Escape</h3>
                            </a>
                            <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                              <li>Horror Adventure</li>
                              <li>Mobile</li>
                              <li>Action RPG</li>
                              <li>PC</li>
                            </ul>
                            <p>Mauris euismod nibh mollis sodales eleifend. Donec tempor erat
                              risus, nec congue magna accumsan commodo pretium.. <a href="game-details.html">Read More</a></p>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area">
                                <img src="assets/images/review-img.png" alt="image" />
                              </div>
                              <div className="single-area">
                                <div className="d-flex gap-1 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">star</i>
                                  <h4 className="fs-four">4.5</h4>
                                </div>
                                <p className="fs-seven">5.2M Reviews</p>
                              </div>
                              <div className="single-area">
                                <h4 className="fs-four mb-1">500M+</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <a href="https://www.apple.com/app-store/" className="w-100"><img src="assets/images/appstore.png" className="w-100" alt="Image" /></a>
                              <a href="https://play.google.com/" className="w-100"><img src="assets/images/googleplay.png" className="w-100" alt="Image" /></a>
                              <a href="https://www.amazon.com/" className="w-100"><img src="assets/images/amazonstore.png" className="w-100" alt="Image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Games section end */}
        {/* Team Members start */}
        <section className="team-members pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-header text-center">
                  <h4 className="sub-title">We Have A Passion For <span>Games!</span></h4>
                  <span className="fs-two heading mb-6">Our team is next-level. And we're <span>proud of
                    it.</span></span>
                  <p>Our dynamic team blends tech-savvy developers, imaginative artists, analytical minds,
                    and visionary product managers. Driven to innovate, we bring excitement to every
                    project</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="team-carousel">
              <div className="slide-area">
                <div className="single-slider">
                  <div className="thumb">
                    <img src="assets/images/team-members-1.png" alt="Image" />
                  </div>
                  <div className="title-area">
                    <h4 className="pt-8 pb-2"><a href="index.html">Jane Cooper</a></h4>
                    <span className="designation">Animator</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div className="thumb">
                    <img src="assets/images/team-members-2.png" alt="Image" />
                  </div>
                  <div className="title-area">
                    <h4 className="pt-8 pb-2"><a href="index.html">Esther Howard</a></h4>
                    <span className="designation">Artist</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div className="thumb">
                    <img src="assets/images/team-members-3.png" alt="Image" />
                  </div>
                  <div className="title-area">
                    <h4 className="pt-8 pb-2"><a href="index.html">Dianne Russell</a></h4>
                    <span className="designation">Animator</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div className="thumb">
                    <img src="assets/images/team-members-4.png" alt="Image" />
                  </div>
                  <div className="title-area">
                    <h4 className="pt-8 pb-2"><a href="index.html">Marvin McKinney</a></h4>
                    <span className="designation">Brand &amp; Culture Manager</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div className="thumb">
                    <img src="assets/images/team-members-5.png" alt="Image" />
                  </div>
                  <div className="title-area">
                    <h4 className="pt-8 pb-2"><a href="index.html">Kristin Watson</a></h4>
                    <span className="designation">Developer</span>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider">
                  <div className="thumb">
                    <img src="assets/images/team-members-6.png" alt="Image" />
                  </div>
                  <div className="title-area">
                    <h4 className="pt-8 pb-2"><a href="index.html">Bessie Cooper</a></h4>
                    <span className="designation">Artist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Members end */}
        {/* Counter Section start */}
        <div className="counter-section pt-120">
          <div className="container">
            <div className="row cus-mar">
              <div className="col-sm-6 col-xl-3">
                <div className="single-box py-6 box-style box-first d-center position-relative">
                  <div className="counters d-flex align-items-center">
                    <span className="odometer display-one" data-odometer-final={652}>0</span>
                    <span className="display-one symbol">+</span>
                  </div>
                  <p className="name-area fs-five position-absolute">
                    Unique Daily Users.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="single-box py-6 box-style box-first d-center active-area position-relative">
                  <div className="counters d-flex align-items-center">
                    <span className="odometer display-one" data-odometer-final={50}>0</span>
                    <span className="display-one">M</span>
                  </div>
                  <p className="name-area fs-five position-absolute">
                    Downloads
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="single-box py-6 box-style box-first d-center position-relative">
                  <div className="counters d-flex align-items-center">
                    <span className="odometer display-one" data-odometer-final={200}>0</span>
                    <span className="display-one symbol">+</span>
                  </div>
                  <p className="name-area fs-five position-absolute">
                    Games Launched
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="single-box py-6 box-style box-first d-center position-relative">
                  <div className="counters d-flex align-items-center">
                    <span className="odometer display-one" data-odometer-final={350}>0</span>
                    <span className="display-one">k</span>
                  </div>
                  <p className="name-area fs-five position-absolute">
                    Gaming Projects Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Counter Section end */}
        {/* Our Services start */}
        <section className="our-services pt-120">
          <div className="container">
            <div className="row align-items-center section-text">
              <div className="col-lg-4">
                <h4 className="sub-title">Our Team <span>Provide</span></h4>
                <span className="fs-two heading">Next Level <span>Services</span></span>
              </div>
              <div className="col-lg-6">
                <p>Gamestorm Studios provides end-to-end services for clients wishing to employ game
                  development businesses skilled in Unity3D, Unreal, PlayCanvas, blockchain, game design,
                  VR, NFT, metaverse, and more.</p>
              </div>
            </div>
            <div className="services-carousel">
              <div className="slide-area">
                <div className="single-slider box-style box-first p-5 px-xl-8 py-xl-10">
                  <div className="icon-box d-center">
                    <i className="material-symbols-outlined fs-two"> sports_esports </i>
                  </div>
                  <div className="title-area">
                    <h3 className="mt-6 mb-3">Game Development</h3>
                    <p>Game design, programming, art, animation, audio, testing, marketing, publishing,
                      monetization, maintenance, player support, analytics.</p>
                    <div className="link-area mt-8">
                      <a href="our-services-details.html" className="d-flex align-items-center">
                        Learn More
                        <i className="material-symbols-outlined mat-icon">arrow_right_alt</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider box-style box-first p-5 px-xl-8 py-xl-10">
                  <div className="icon-box d-center">
                    <i className="material-symbols-outlined fs-two"> draw </i>
                  </div>
                  <div className="title-area">
                    <h3 className="mt-6 mb-3">Game Art &amp; Design</h3>
                    <p>Concept, character, environment, UI/UX, 2D/3D modeling, texturing, rigging,
                      animation, VFX, lighting, compositing, motion graphics.</p>
                    <div className="link-area mt-8">
                      <a href="our-services-details.html" className="d-flex align-items-center">
                        Learn More
                        <i className="material-symbols-outlined mat-icon">arrow_right_alt</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider box-style box-first p-5 px-xl-8 py-xl-10">
                  <div className="icon-box d-center">
                    <i className="material-symbols-outlined fs-two">hub</i>
                  </div>
                  <div className="title-area">
                    <h3 className="mt-6 mb-3">Nft Development</h3>
                    <p>Smart contract development, NFT creation, blockchain integration,NFT games,
                      digital ownership, NFT transfers, NFT authentication, NFT analytics.</p>
                    <div className="link-area mt-8">
                      <a href="our-services-details.html" className="d-flex align-items-center">
                        Learn More
                        <i className="material-symbols-outlined mat-icon">arrow_right_alt</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider box-style box-first p-5 px-xl-8 py-xl-10">
                  <div className="icon-box d-center">
                    <i className="material-symbols-outlined fs-two">home_max_dots</i>
                  </div>
                  <div className="title-area">
                    <h3 className="mt-6 mb-3">Vr &amp; Ar Solutions</h3>
                    <p>VR, HMDs, mobile AR, spatial computing, gesture control, haptic feedback,
                      360-degree audio, user tracking, immersive experiences.</p>
                    <div className="link-area mt-8">
                      <a href="our-services-details.html" className="d-flex align-items-center">
                        Learn More
                        <i className="material-symbols-outlined mat-icon">arrow_right_alt</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-area">
                <div className="single-slider box-style box-first p-5 px-xl-8 py-xl-10">
                  <div className="icon-box d-center">
                    <i className="material-symbols-outlined fs-two"> sports_esports </i>
                  </div>
                  <div className="title-area">
                    <h3 className="mt-6 mb-3">Game Development</h3>
                    <p>Game design, programming, art, animation, audio, testing, marketing, publishing,
                      monetization, maintenance, player support, analytics.</p>
                    <div className="link-area mt-8">
                      <a href="our-services-details.html" className="d-flex align-items-center">
                        Learn More
                        <i className="material-symbols-outlined mat-icon">arrow_right_alt</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Services end */}
        {/* Life Gamestorm start */}
        <section className="life-gamestorm pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-text text-center">
                  <h4 className="sub-title">We're Part of a <span>Big Family</span></h4>
                  <span className="fs-two heading mb-6">The Art of Gaming Development: A Look <span>Inside Our
                    Studio</span></span>
                  <p>Experience the magic of gaming development with a look inside our studio. See the
                    art, science, and innovation at work.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="post-img d-grid gap-3 gap-md-6 justify-content-between">
                  <div className="single d-flex gap-3 gap-md-6">
                    <div className="items">
                      <img src="assets/images/life-post-img-1.png" alt="image" />
                    </div>
                    <div className="items">
                      <img src="assets/images/life-post-img-2.png" alt="image" />
                    </div>
                  </div>
                  <div className="single d-flex gap-3 gap-md-6">
                    <div className="items">
                      <img src="assets/images/life-post-img-3.png" alt="image" />
                    </div>
                    <div className="items">
                      <img src="assets/images/life-post-img-4.png" alt="image" />
                    </div>
                    <div className="items">
                      <img src="assets/images/life-post-img-5.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-10 mt-md-20">
                  <div className="col-lg-5">
                    <div className="join-us text-center">
                      <span className="display-four visible-slowly-bottom mb-4">JOIN US!</span>
                      <p>Still haven't found your dream job? Join Team Gamestorm and become the next
                        Gamestorm of an ever-growing family!</p>
                      <div className="btn-area alt-bg mt-5 mt-md-10">
                        <a href="about-us.html" className="box-style btn-box d-center">
                          Check Open Positions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Life Gamestorm end */}
        {/* Job Opens start */}
        <section className="job-opens pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-text text-center">
                  <h4 className="sub-title">We're Looking for <span>Talented Professionals</span></h4>
                  <span className="fs-two heading mb-6 w-75 m-auto"><span>Let's Build the Future</span> of
                    Video Games Together!</span>
                  <p>Our belief is that being simple, honest, self-driven and motivated combined with the
                    constant pursuit of the ultimate company atmosphere can help grow a creative and
                    robust team.</p>
                </div>
              </div>
            </div>
            <div className="row cus-mar">
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> draw </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>Senior Level Game Designer</h5>
                      </a>
                      <a href="career-details.html" />
                      <span className="fs-seven mt-2">Al. Brucknera Aleksandra63, Wrocław 51-410</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven p-1 px-2">Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> draw </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>Level Game Designer</h5>
                      </a>
                      <span className="fs-seven mt-2">Al10</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven p-1 px-2">Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> view_in_ar </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>SR UI/UX Game designer</h5>
                      </a>
                      <span className="fs-seven mt-2">Al10</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven p-1 px-2">Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> draw </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>Sr. Unity Developer</h5>
                      </a>
                      <span className="fs-seven mt-2">Al10</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven danger p-1 px-2">Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> draw </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>Lead VFX Artist</h5>
                      </a>
                      <span className="fs-seven mt-2">Al10</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven info p-1 px-2">VFX Artist</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> view_in_ar </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>3D Artist</h5>
                      </a>
                      <span className="fs-seven mt-2">Al10</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven p-1 px-2">3D Artist</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> view_in_ar </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>SR. 3D Artist</h5>
                      </a>
                      <span className="fs-seven mt-2">Al10</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven p-1 px-2">3D Artist</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                  <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                    <div className="icon-box d-inline-flex d-center">
                      <i className="material-symbols-outlined fs-three"> manage_accounts </i>
                    </div>
                    <div className="info-box">
                      <a href="career-details.html">
                        <h5>Product Manager</h5>
                      </a>
                      <span className="fs-seven mt-2">Al10</span>
                      <ul className="d-flex gap-6 mt-6">
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> work </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="material-symbols-outlined mat-icon"> schedule </i>
                          <span className="fs-seven">Full Time</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="end-area">
                    <span className="fs-seven success p-1 px-2">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Job Opens end */}
        {/* testimonials start */}
        <section className="testimonials">
          <div className="container pt-120">
            <div className="row justify-content-end">
              <div className="col-lg-7">
                <div className="testimonials-carousel">
                  <div className="slide-area">
                    <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                      <div className="img-box">
                        <img src="assets/images/testimonial-img-1.png" alt="Image" />
                      </div>
                      <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                      </ul>
                      <p className="fs-four">“The graphics in their games are always top-notch and truly
                        bring the world to life”</p>
                      <h5 className="pt-8 pb-3">Kristin Watson</h5>
                      <div className="location-date d-flex gap-5">
                        <span className="location pe-5">United Kingdom</span>
                        <span>Mar 22, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="slide-area">
                    <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                      <div className="img-box">
                        <img src="assets/images/testimonial-img-2.png" alt="Image" />
                      </div>
                      <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                      </ul>
                      <p className="fs-four">“The graphics in their games are always top-notch and truly
                        bring the world to life”</p>
                      <h5 className="pt-8 pb-3">Jordyn Septimus</h5>
                      <div className="location-date d-flex gap-5">
                        <span className="location pe-5">United Kingdom</span>
                        <span>May 12, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="slide-area">
                    <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                      <div className="img-box">
                        <img src="assets/images/testimonial-img-3.png" alt="Image" />
                      </div>
                      <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                      </ul>
                      <p className="fs-four">“The graphics in their games are always top-notch and truly
                        bring the world to life”</p>
                      <h5 className="pt-8 pb-3">Bessie Cooper</h5>
                      <div className="location-date d-flex gap-5">
                        <span className="location pe-5">United Kingdom</span>
                        <span>Nov 25, 2023</span>
                      </div>
                    </div>
                  </div>
                  <div className="slide-area">
                    <div className="single-slider px-4 px-sm-8 pt-8 pb-15 pb-sm-20">
                      <div className="img-box">
                        <img src="assets/images/testimonial-img-4.png" alt="Image" />
                      </div>
                      <ul className="list pt-4 pb-6 d-flex gap-1 align-items-center">
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                        <li>
                          <i className="material-symbols-outlined mat-icon"> star </i>
                        </li>
                      </ul>
                      <p className="fs-four">“The graphics in their games are always top-notch and truly
                        bring the world to life”</p>
                      <h5 className="pt-8 pb-3">Esther Howard</h5>
                      <div className="location-date d-flex gap-5">
                        <span className="location pe-5">United Kingdom</span>
                        <span>Dec 17, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials end */}
        {/* Call to Action start */}
        <section className="call-to-action overflow-hidden">
          <div className="container pt-120 pb-120">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="sec-img mt-0 mb-10 mb-sm-15 mb-lg-0 text-start d-center position-relative">
                  <img src="assets/images/call-to-action-circle.png" alt="Image" />
                  <div className="video-bg position-absolute">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-text">
                  <h4 className="sub-title">Join Our <span>Community</span></h4>
                  <span className="fs-two heading mb-6">Connect With <span>Gamers Worldwide</span></span>
                  <p>Join the revolution and immerse yourself in the ultimate gaming experience, where the
                    boundaries between reality and fantasy blur, and the only limit is your imagination.
                    Sign up now and be the first to play our latest game releases.</p>
                </div>
                <div className="btn-area">
                  <div className="btn-area alt-bg mt-10 d-flex flex-wrap gap-6 align-items-center">
                    <a href="game.html" className="box-style btn-box d-center">
                      Explore Our Games
                    </a>
                    <a href="about-us.html" className="box-style btn-box btn-box-third d-center">
                      Join Now Our Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action end */}
        {/* Contact Us start */}
        <section className="contact-us pb-120">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="section-text">
                  <h4 className="sub-title">Have <span>Questions?</span></h4>
                  <span className="fs-two heading mb-6">We'd Love To <span>Hear From You</span></span>
                  <p>Please fill out the form and let us know about your concerns.We will try our best to
                    provide optimized solutions.</p>
                </div>
                <div className="contact-area">
                  <div className="btn-area mt-10 d-grid gap-6 align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon-box d-center">
                        <i className="material-symbols-outlined mat-icon fs-five"> call </i>
                      </div>
                      <span>+(2) 578 - 365 - 379</span>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon-box d-center">
                        <i className="material-symbols-outlined mat-icon fs-five"> mail </i>
                      </div>
                      <span><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d991bcb5b5b699bca1b8b4a9b5bcf7bab6b4">[email&nbsp;protected]</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 me-20 mt-7 mt-lg-0">
                <form action="#" className="p-4">
                  <div className="form-inside p-4">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactName">Name</label>
                          <input type="text" id="contactName" placeholder="Enter Your Name" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactEmail">Email</label>
                          <input type="email" id="contactEmail" placeholder="Enter your email" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactSubject">Subject</label>
                          <input type="text" id="contactSubject" placeholder="Enter Subject" autoComplete="off" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="single-input text-start">
                          <label htmlFor="contactMessage">Leave us a message</label>
                          <textarea cols={4} rows={4} id="contactMessage" placeholder="Please type your Message here..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-sm-12 mt-4">
                        <div className="btn-area">
                          <button className="box-style btn-box">
                            Send Massage
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Us end */}
        {/* Footer Area Start */}
        <footer className="footer-section">
          <div className="container-fluid">
            <div className="social-items">
              <ul className="d-flex justify-content-around">
                <li className="box-style box-second justify-content-center">
                  <a href="https://www.facebook.com/" className="d-center gap-2">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="box-style box-second justify-content-center">
                  <a href="https://www.instagram.com/" className="d-center gap-2">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="box-style box-second justify-content-center">
                  <a href="https://www.linkedin.com/" className="d-center gap-2">
                    <i className="fab fa-linkedin-in" />
                    <span>linkedin</span>
                  </a>
                </li>
                <li className="box-style box-second justify-content-center">
                  <a href="https://twitter.com/" className="d-center gap-2">
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row align-items-center justify-content-center overflow-hidden">
              <div className="col-lg-6 position-relative">
                <div className="box-items d-inline-flex flex-wrap position-absolute">
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item active-item opacity-25" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item active-item opacity-25" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item active-item opacity-25" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                  <div className="single-item" />
                </div>
                <div className="row pt-120 pb-120 px-5 ps-md-15 ps-lg-0 align-items-center justify-content-start justify-content-lg-end">
                  <div className="col-xl-8 col-lg-10 col-md-8">
                    <div className="content-area visible-from-bottom">
                      <div className="section-area">
                        <a href="index.html" className="fs-four brand-area">Gamestorm</a>
                        <p className="mt-4 w-75">Gamestorm is a premier gaming studio creating
                          innovative and engaging games for players of all ages. Offering a wide
                          variety of gaming experiences.</p>
                      </div>
                      <div className="location-area mt-8 d-grid gap-7">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="icon-box d-center">
                            <i className="material-symbols-outlined mat-icon fs-fure"> location_on
                            </i>
                          </div>
                          <div className="right-item">
                            <h5>London</h5>
                            <span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
                          </div>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <div className="icon-box d-center">
                            <i className="material-symbols-outlined mat-icon fs-fure"> location_on
                            </i>
                          </div>
                          <div className="right-item">
                            <h5>New York</h5>
                            <span>7012 Green Lake Ave., Poughkeepsie, NY 12601</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-right visible-from-bottom pt-120 pb-120 px-5 ps-md-15 ps-lg-10 px-xxl-20">
                  <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-7">
                      <div className="main-content">
                        <div className="head-area">
                          <h4 className="mb-3">Stay updated with news on all our games</h4>
                          <p>Want to be the first to know about new releases? Subscribe out
                            newsletter!</p>
                        </div>
                        <form action="#">
                          <div className="input-area mt-6 p-4 d-grid d-sm-flex align-items-center justify-content-between">
                            <input type="text" placeholder="Enter Your Email" />
                            <div className="btn-area mt-6 mt-sm-0">
                              <button className="box-style text-nowrap btn-box">
                                Send Massage
                              </button>
                            </div>
                          </div>
                        </form>
                        <div className="instagram-post mt-10">
                          <h5 className="mb-5">Instagram post</h5>
                          <ul className="d-flex gap-2">
                            <li>
                              <a href="index.html"><img src="assets/images/instagram-img-1.png" alt="img" /></a>
                            </li>
                            <li>
                              <a href="index.html"><img src="assets/images/instagram-img-2.png" alt="img" /></a>
                            </li>
                            <li>
                              <a href="index.html"><img src="assets/images/instagram-img-3.png" alt="img" /></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom py-8">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6 text-center">
                    <div className="copyright">
                      <p>Copyright © 2023 <a href="index.html">Gamestorm</a> - All Right Reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </>
  )
}




