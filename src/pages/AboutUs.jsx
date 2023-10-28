
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import dynamic from 'next/dynamic.js'
import { useRouter } from 'next/router'

export default function Services() {
    useEffect(() => {
        console.log('loading js')
        import('../../public/assets/js/plugins/plugin-custom');
        import('../../public/assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js');
    }, [])

    return (
        <>
            < Head >
                <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
                <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
                <link rel="stylesheet" href="assets/css/style.min.css" />
                <title>About Us</title>
                <script type="text/javascript" src='../assets/js/plugins/plugins.js' async></script>
                <script type="text/javascript" src='../assets/js/main.js' async ></script>
            </Head >

            <div>
                <div className="mouse-follower">
                    <span className="cursor-outline" />
                    <span className="cursor-dot" />
                </div>
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
                <section className="banner-section inner-banner position-relative about">
                    <div className="shape-area">
                        <img src="assets/images/abs-items/bubble.png" className="shape-1" alt="icon" />
                        <img src="assets/images/abs-items/ellipse-7.png" className="shape-2" alt="icon" />
                    </div>
                    <div className="container position-relative">
                        <div className="banner-content row justify-content-between">
                            <div className="col-lg-6 col-md-10">
                                <div className="main-content">
                                    <h2 className="visible-slowly-bottom display-four mb-6">Our Simple is Motto Fun for
                                        <span>Everyone</span>
                                    </h2>
                                    <p className="fs-four">We continue to open doors to new worlds every day and we are working
                                        excitedly for creating new games and unique ideas!</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
                                <div className="breadcrumb-area position-absolute end-0 bottom-0">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-end justify-content-end">
                                            <li className="breadcrumb-item p-0 m-0"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">About</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-block pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
                                <div className="sec-img mw-100 position-relative d-center">
                                    <img src="assets/images/about-block-bg.png" alt="sec-img" />
                                    <div className="experience p-2 p-lg-4 position-absolute">
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
                <section className="gaming-character ongoing-values pt-120 pb-120">
                    <div className="container">
                        <div className="row section-header justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h4 className="sub-title">Our Ongoing <span>Values</span></h4>
                                <span className="fs-two heading mb-6">Our Values Inspire And <span>Drive Our Every
                                    Move</span></span>
                                <p>Our values are a reflection of our inner selves, shaped by our unique experiences,
                                    beliefs, aspirations, and cannot be simply adopted from others or chosen arbitrarily.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-end">
                            <div className="col-lg-12">
                                <div className="ongoing-values-carousel">
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                                                <div className="icon-box d-center">
                                                    <i className="material-symbols-outlined fs-two"> emoji_objects </i>
                                                </div>
                                                <h3 className="mt-6 pb-2">Creativity</h3>
                                                <p>Striving to bring imagination, original ideas, and excitement to
                                                    everything we do.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                                                <div className="icon-box d-center">
                                                    <i className="material-symbols-outlined fs-two"> flag </i>
                                                </div>
                                                <h3 className="mt-6 pb-2">Pioneering</h3>
                                                <p>Striving to bring imagination, original ideas, and excitement to
                                                    everything we do.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                                                <div className="icon-box d-center">
                                                    <i className="material-symbols-outlined fs-two"> local_fire_department </i>
                                                </div>
                                                <h3 className="mt-6 pb-2">Passion</h3>
                                                <p>Striving to bring imagination, original ideas, and excitement to
                                                    everything we do.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                                                <div className="icon-box d-center">
                                                    <i className="material-symbols-outlined fs-two"> bolt </i>
                                                </div>
                                                <h3 className="mt-6 pb-2">Determination</h3>
                                                <p>Striving to bring imagination, original ideas, and excitement to
                                                    everything we do.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                                                <div className="icon-box d-center">
                                                    <i className="material-symbols-outlined fs-two"> local_library </i>
                                                </div>
                                                <h3 className="mt-6 pb-2">Learning</h3>
                                                <p>Striving to bring imagination, original ideas, and excitement to
                                                    everything we do.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                                                <div className="icon-box d-center">
                                                    <i className="material-symbols-outlined fs-two"> groups_2 </i>
                                                </div>
                                                <h3 className="mt-6 pb-2">Teamwork</h3>
                                                <p>Striving to bring imagination, original ideas, and excitement to
                                                    everything we do.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                <div className="counter-section pt-120 pb-120">
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
                <section className="our-focus position-relative pt-120 pb-120">
                    <div className="shape-area">
                        <img src="assets/images/abs-items/line-1.png" className="shape-1" alt="icon" />
                        <img src="assets/images/abs-items/object-1.png" className="shape-2" alt="icon" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-text text-center">
                                    <h4 className="sub-title">Our <span>Focus</span></h4>
                                    <span className="fs-two heading mb-6">Flexible, focused and innovative: we’re focused on
                                        achieving your project <span>vision and business goals</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative d-center">
                                    <img src="assets/images/our-focus-bg.png" className="w-100" alt="sec-img" />
                                    <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five mfp-iframe popupvideo fs-five text-uppercase d-center position-absolute">
                                        Play
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gaming-character our-story bg-transparent pb-120">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="section-text">
                                    <h4 className="sub-title">Our story</h4>
                                    <p>We have a beautiful story, worth telling. Let us walk you through our biggest
                                        milestones.</p>
                                </div>
                                <div className="our-story-carousel">
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-area d-flex gap-3 gap-sm-5 p-5 py-sm-10 px-sm-8">
                                                <div className="year-box alt-bg d-center">
                                                    <h3>2008</h3>
                                                </div>
                                                <div className="text-box">
                                                    <h3 className="pb-2">Company founded</h3>
                                                    <p>Company founded. Initial team of 5 employees including 2 programmers,
                                                        1 designer, 1 artist, and 1 project manager.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider">
                                            <div className="single-area d-flex gap-3 gap-sm-5 p-5 py-sm-10 px-sm-8">
                                                <div className="year-box alt-bg d-center">
                                                    <h3>2008</h3>
                                                </div>
                                                <div className="text-box">
                                                    <h3 className="pb-2">Company founded</h3>
                                                    <p>Company founded. Initial team of 5 employees including 2 programmers,
                                                        1 designer, 1 artist, and 1 project manager.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="sec-img">
                                    <img src="assets/images/our-story-illus.png" alt="sec-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="call-to-action overflow-hidden">
                    <div className="container px-5 px-sm-15 about pt-120 pb-120">
                        <div className="row px-5 px-sm-15 justify-content-between align-items-center">
                            <div className="col-lg-6 alt-bg">
                                <div className="section-text">
                                    <h4 className="sub-title">Contact With Us</h4>
                                    <span className="fs-two heading mb-6">Contact us today for a free consultation</span>
                                </div>
                                <div className="btn-area">
                                    <div className="btn-area mt-5 mt-sm-10 d-flex flex-wrap gap-6 align-items-center">
                                        <a href="contact.html" className="box-style btn-box d-center">
                                            Start Your Projects
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 offset-0 offset-lg-1">
                                <div className="mt-8 mt-lg-0 mb-0 mb-lg-15 mb-lg-0 text-start d-center position-relative">
                                    <div className="contact-box cus-z1 w-100 py-15 text-center">
                                        <a href="index.html" className="gap-2 d-center mb-2">
                                            <i className="material-symbols-outlined mat-icon">smartphone</i>
                                            Call Us
                                        </a>
                                        <span className="fs-five">(302) 555-0107</span>
                                    </div>
                                    <div className="video-bg cus-z0 position-absolute">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="job-opens index-two pt-120 pb-120">
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
                                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-center gap-4 gap-md-6 justify-content-between">
                                    <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> draw </i>
                                        </div>
                                        <div className="info-box">
                                            <ul className="d-flex flex-wrap gap-3 gap-sm-6 mb-5">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> work </i>
                                                    <span className="fs-seven">Designer</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> location_on </i>
                                                    <span className="fs-seven">Full Time</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                    <span className="fs-seven">2 Days ago</span>
                                                </li>
                                            </ul>
                                            <a href="career-details.html">
                                                <h5>Senior Level Game Designer</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="career-details.html" className="end-area d-center">
                                        <i className="material-symbols-outlined"> call_made </i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-center gap-4 gap-md-6 justify-content-between">
                                    <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> draw </i>
                                        </div>
                                        <div className="info-box">
                                            <ul className="d-flex flex-wrap gap-3 gap-sm-6 mb-5">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> work </i>
                                                    <span className="fs-seven">Designer</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> location_on </i>
                                                    <span className="fs-seven">Full Time</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                    <span className="fs-seven">2 Days ago</span>
                                                </li>
                                            </ul>
                                            <a href="career-details.html">
                                                <h5>Senior Level Game Designer</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="career-details.html" className="end-area d-center">
                                        <i className="material-symbols-outlined"> call_made </i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-center gap-4 gap-md-6 justify-content-between">
                                    <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> view_in_ar </i>
                                        </div>
                                        <div className="info-box">
                                            <ul className="d-flex flex-wrap gap-3 gap-sm-6 mb-5">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> work </i>
                                                    <span className="fs-seven">Designer</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> location_on </i>
                                                    <span className="fs-seven">Full Time</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                    <span className="fs-seven">2 Days ago</span>
                                                </li>
                                            </ul>
                                            <a href="career-details.html">
                                                <h5>Sr. Unity Developer</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="career-details.html" className="end-area d-center">
                                        <i className="material-symbols-outlined"> call_made </i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-center gap-4 gap-md-6 justify-content-between">
                                    <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> view_in_ar </i>
                                        </div>
                                        <div className="info-box">
                                            <ul className="d-flex flex-wrap gap-3 gap-sm-6 mb-5">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> work </i>
                                                    <span className="fs-seven">Designer</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> location_on </i>
                                                    <span className="fs-seven">Full Time</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                    <span className="fs-seven">2 Days ago</span>
                                                </li>
                                            </ul>
                                            <a href="career-details.html">
                                                <h5>3D Artist</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="career-details.html" className="end-area d-center">
                                        <i className="material-symbols-outlined"> call_made </i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-center gap-4 gap-md-6 justify-content-between">
                                    <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> draw </i>
                                        </div>
                                        <div className="info-box">
                                            <ul className="d-flex flex-wrap gap-3 gap-sm-6 mb-5">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> work </i>
                                                    <span className="fs-seven">Designer</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> location_on </i>
                                                    <span className="fs-seven">Full Time</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                    <span className="fs-seven">2 Days ago</span>
                                                </li>
                                            </ul>
                                            <a href="career-details.html">
                                                <h5>Lead VFX Artist</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="career-details.html" className="end-area d-center">
                                        <i className="material-symbols-outlined"> call_made </i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-center gap-4 gap-md-6 justify-content-between">
                                    <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> manage_accounts </i>
                                        </div>
                                        <div className="info-box">
                                            <ul className="d-flex flex-wrap gap-3 gap-sm-6 mb-5">
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> work </i>
                                                    <span className="fs-seven">Designer</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> location_on </i>
                                                    <span className="fs-seven">Full Time</span>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <i className="material-symbols-outlined mat-icon"> schedule </i>
                                                    <span className="fs-seven">2 Days ago</span>
                                                </li>
                                            </ul>
                                            <a href="career-details.html">
                                                <h5>Product Manager</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="career-details.html" className="end-area d-center">
                                        <i className="material-symbols-outlined"> call_made </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                <section className="our-partners bg-transparent pt-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-header text-center">
                                    <h4 className="sub-title"><span>Trusted</span> By</h4>
                                    <span className="fs-two heading mb-6">We are happy to work with <span>global largest
                                        brands</span></span>
                                    <p>We are proud to support industry leaders around the world.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="all-items mb-7 d-flex gap-3 justify-content-between flex-wrap">
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-1.png" alt="Image" />
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-2.png" alt="Image" />
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-3.png" alt="Image" />
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-4.png" alt="Image" />
                                    </div>
                                </div>
                                <div className="all-items d-flex gap-3 justify-content-between flex-wrap">
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-5.png" alt="Image" />
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-6.png" alt="Image" />
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-7.png" alt="Image" />
                                    </div>
                                    <div className="thumb">
                                        <img src="assets/images/brand-logo-3.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="instagram-post">
                    <div className="container-fluid pt-120">
                        <div className="row justify-content-center">
                            <div className="instagram-post-carousel">
                                <div className="slide-area">
                                    <div className="img-box d-inline-flex d-center text-center position-relative">
                                        <img src="assets/images/instagram-post-1.png" alt="Image" />
                                        <a href="index-3.html" className="abs-area position-absolute d-center gap-2 p-4">
                                            <i className="fab fa-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-area">
                                    <div className="img-box d-inline-flex d-center text-center position-relative">
                                        <img src="assets/images/instagram-post-2.png" alt="Image" />
                                        <a href="index-3.html" className="abs-area position-absolute d-center gap-2 p-4">
                                            <i className="fab fa-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-area">
                                    <div className="img-box d-inline-flex d-center text-center position-relative">
                                        <img src="assets/images/instagram-post-3.png" alt="Image" />
                                        <a href="index-3.html" className="abs-area position-absolute d-center gap-2 p-4">
                                            <i className="fab fa-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-area">
                                    <div className="img-box d-inline-flex d-center text-center position-relative">
                                        <img src="assets/images/instagram-post-4.png" alt="Image" />
                                        <a href="index-3.html" className="abs-area position-absolute d-center gap-2 p-4">
                                            <i className="fab fa-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-area">
                                    <div className="img-box d-inline-flex d-center text-center position-relative">
                                        <img src="assets/images/instagram-post-5.png" alt="Image" />
                                        <a href="index-3.html" className="abs-area position-absolute d-center gap-2 p-4">
                                            <i className="fab fa-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-area">
                                    <div className="img-box d-inline-flex d-center text-center position-relative">
                                        <img src="assets/images/instagram-post-6.png" alt="Image" />
                                        <a href="index-3.html" className="abs-area position-absolute d-center gap-2 p-4">
                                            <i className="fab fa-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-area">
                                    <div className="img-box d-inline-flex d-center text-center position-relative">
                                        <img src="assets/images/instagram-post-7.png" alt="Image" />
                                        <a href="index-3.html" className="abs-area position-absolute d-center gap-2 p-4">
                                            <i className="fab fa-instagram" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}




