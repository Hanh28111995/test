
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import dynamic from 'next/dynamic.js'
import { useRouter } from 'next/router'

export default function Blog() {
    useEffect(() => {
        import('../../public/assets/js/plugins/plugin-custom');
        import('../../public/assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js');
    }, [])

    return (
        <>
            < Head >
                <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
                <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
                <link rel="stylesheet" href="assets/css/style.min.css" />
                <title>Blog</title>
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
                <section className="banner-section inner-banner position-relative store">
                    <div className="shape-area">
                        <img src="assets/images/abs-items/bubble.png" className="shape-1" alt="icon" />
                        <img src="assets/images/abs-items/ellipse-7.png" className="shape-2" alt="icon" />
                    </div>
                    <div className="container position-relative">
                        <div className="banner-content row justify-content-between">
                            <div className="col-lg-6 col-md-10">
                                <div className="main-content">
                                    <h2 className="visible-slowly-bottom display-four mb-6"><span>Blog Standard</span></h2>
                                    <p className="fs-four">Professional Game design and Development services since 1995</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
                                <div className="breadcrumb-area position-absolute end-0 bottom-0">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-end justify-content-end">
                                            <li className="breadcrumb-item p-0 m-0"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog Standard</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="recently-completed blogs blog-section">
                    <div className="container pt-120">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="single-box">
                                    <div className="position-relative d-grid align-items-center">
                                        <div className="img-box">
                                            <img src="assets/images/blogs-img-1.png" className="w-100" alt="Image" />
                                        </div>
                                        <div className="position-absolute cus-position bottom-0 start-0">
                                            <div className="content-box p-3 p-sm-6">
                                                <div className="top-bar d-flex align-items-center gap-3">
                                                    <h5>News</h5>
                                                    <span>25 January,2023</span>
                                                </div>
                                                <a href="blog-single.html">
                                                    <h3 className="visible-slowly-bottom mt-3">The Role of Music and Sound
                                                        Effects in Game Design</h3>
                                                </a>
                                                <a href="blog-single.html" className="end-area mt-8 d-center">
                                                    <i className="material-symbols-outlined"> call_made </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-box">
                                    <div className="position-relative d-grid align-items-center">
                                        <div className="img-box">
                                            <img src="assets/images/blogs-img-2.png" className="w-100" alt="Image" />
                                        </div>
                                        <div className="position-absolute cus-position bottom-0 start-0">
                                            <div className="content-box p-3 p-sm-6">
                                                <div className="top-bar d-flex align-items-center gap-3">
                                                    <h5>News</h5>
                                                    <span>25 January,2023</span>
                                                </div>
                                                <a href="blog-single.html">
                                                    <h3 className="visible-slowly-bottom mt-3">The Importance of User Testing in
                                                        Game Development</h3>
                                                </a>
                                                <a href="blog-single.html" className="end-area mt-8 d-center">
                                                    <i className="material-symbols-outlined"> call_made </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-box">
                                    <div className="position-relative d-grid align-items-center">
                                        <div className="img-box">
                                            <img src="assets/images/blogs-img-1.png" className="w-100" alt="Image" />
                                        </div>
                                        <div className="position-absolute cus-position bottom-0 start-0">
                                            <div className="content-box p-3 p-sm-6">
                                                <div className="top-bar d-flex align-items-center gap-3">
                                                    <h5>News</h5>
                                                    <span>25 January,2023</span>
                                                </div>
                                                <a href="blog-single.html">
                                                    <h3 className="visible-slowly-bottom mt-3">Creating Memorable Characters in
                                                        Video Games</h3>
                                                </a>
                                                <a href="blog-single.html" className="end-area mt-8 d-center">
                                                    <i className="material-symbols-outlined"> call_made </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-box">
                                    <div className="position-relative d-grid align-items-center">
                                        <div className="img-box">
                                            <img src="assets/images/blogs-img-4.png" className="w-100" alt="Image" />
                                        </div>
                                        <div className="position-absolute cus-position bottom-0 start-0">
                                            <div className="content-box p-3 p-sm-6">
                                                <div className="top-bar d-flex align-items-center gap-3">
                                                    <h5>News</h5>
                                                    <span>25 January,2023</span>
                                                </div>
                                                <a href="blog-single.html">
                                                    <h3 className="visible-slowly-bottom mt-3">Exploring Different Genres in
                                                        Game Design and Development</h3>
                                                </a>
                                                <a href="blog-single.html" className="end-area mt-8 d-center">
                                                    <i className="material-symbols-outlined"> call_made </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-box">
                                    <nav aria-label="Page navigation" className="d-flex mt-15">
                                        <ul className="pagination justify-content-center align-items-center">
                                            <li className="page-item">
                                                <a className="page-link previous" href="javascript:void(0)" aria-label="Previous">
                                                    <i className="material-symbols-outlined"> west </i>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0)">01</a></li>
                                            <li className="page-item"><a className="page-link active" href="javascript:void(0)">02</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0)">03</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0)">04</a></li>
                                            <li className="page-item">
                                                <a className="page-link next" href="javascript:void(0)" aria-label="Next">
                                                    <i className="material-symbols-outlined"> east </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
                                <div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
                                    <div className="d-flex flex-column gap-6">
                                        <div className="sidebar-area p-5">
                                            <h3 className="visible-slowly-bottom mb-6">Search</h3>
                                            <div className="input-area mt-6 p-1 d-flex align-items-center">
                                                <input type="text" className="ps-3" placeholder="Search" />
                                                <div className="btn-area">
                                                    <button className="box-style btn-box border-re p-2">
                                                        <i className="material-symbols-outlined"> search </i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-area p-5">
                                            <h3 className="visible-slowly-bottom mb-6">Category</h3>
                                            <ul className="underwriters d-grid gap-3">
                                                <li>
                                                    <a href="javascript:void(0)" className="d-center justify-content-between">
                                                        <div className="d-flex gap-1">
                                                            <div className="icon-wrap">
                                                                <i className="material-symbols-outlined mat-icon fs-five">double_arrow</i>
                                                            </div>
                                                            <span>Game Development</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span>(08)</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="d-center justify-content-between">
                                                        <div className="d-flex gap-1">
                                                            <div className="icon-wrap">
                                                                <i className="material-symbols-outlined mat-icon fs-five">double_arrow</i>
                                                            </div>
                                                            <span>Game Art</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span>(08)</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="d-center justify-content-between">
                                                        <div className="d-flex gap-1">
                                                            <div className="icon-wrap">
                                                                <i className="material-symbols-outlined mat-icon fs-five">double_arrow</i>
                                                            </div>
                                                            <span>Game Animation</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span>(07)</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="d-center justify-content-between">
                                                        <div className="d-flex gap-1">
                                                            <div className="icon-wrap">
                                                                <i className="material-symbols-outlined mat-icon fs-five">double_arrow</i>
                                                            </div>
                                                            <span>Game QA Testing</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span>(06)</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="d-center justify-content-between">
                                                        <div className="d-flex gap-1">
                                                            <div className="icon-wrap">
                                                                <i className="material-symbols-outlined mat-icon fs-five">double_arrow</i>
                                                            </div>
                                                            <span>Game UI/UX</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span>(04)</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="d-center justify-content-between">
                                                        <div className="d-flex gap-1">
                                                            <div className="icon-wrap">
                                                                <i className="material-symbols-outlined mat-icon fs-five">double_arrow</i>
                                                            </div>
                                                            <span>Out Staffing</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span>(04)</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="sidebar-area p-5">
                                            <h3 className="visible-slowly-bottom mb-6">Related Articles</h3>
                                            <div className="cus-mar">
                                                <div className="single-box d-center justify-content-start gap-5">
                                                    <div className="img-area">
                                                        <img src="assets/images/article-img-1.png" alt="Image" />
                                                    </div>
                                                    <div className="info-area">
                                                        <a href="blog.html">
                                                            <h6>Tips for Creating Engaging Game Characters</h6>
                                                        </a>
                                                        <div className="article-info pt-3 d-flex gap-5">
                                                            <div className="d-flex gap-1 single">
                                                                <div className="icon-wrap d-flex align-items-end">
                                                                    <i className="material-symbols-outlined mat-icon fs-six">schedule</i>
                                                                </div>
                                                                <span>15 Min</span>
                                                            </div>
                                                            <div className="d-flex gap-1 single ps-5">
                                                                <div className="icon-wrap d-flex align-items-end">
                                                                    <i className="material-symbols-outlined mat-icon fs-six">visibility</i>
                                                                </div>
                                                                <span>55</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-box d-center justify-content-start gap-5">
                                                    <div className="img-area">
                                                        <img src="assets/images/article-img-2.png" alt="Image" />
                                                    </div>
                                                    <div className="info-area">
                                                        <a href="blog.html">
                                                            <h6>The Pros and Cons of Different Game Engines</h6>
                                                        </a>
                                                        <div className="article-info pt-3 d-flex gap-5">
                                                            <div className="d-flex gap-1 single">
                                                                <div className="icon-wrap d-flex align-items-end">
                                                                    <i className="material-symbols-outlined mat-icon fs-six">schedule</i>
                                                                </div>
                                                                <span>15 Min</span>
                                                            </div>
                                                            <div className="d-flex gap-1 single ps-5">
                                                                <div className="icon-wrap d-flex align-items-end">
                                                                    <i className="material-symbols-outlined mat-icon fs-six">visibility</i>
                                                                </div>
                                                                <span>55</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-box d-center justify-content-start gap-5">
                                                    <div className="img-area">
                                                        <img src="assets/images/article-img-3.png" alt="Image" />
                                                    </div>
                                                    <div className="info-area">
                                                        <a href="blog.html">
                                                            <h6>The Role of Storytelling in Game Design</h6>
                                                        </a>
                                                        <div className="article-info pt-3 d-flex gap-5">
                                                            <div className="d-flex gap-1 single">
                                                                <div className="icon-wrap d-flex align-items-end">
                                                                    <i className="material-symbols-outlined mat-icon fs-six">schedule</i>
                                                                </div>
                                                                <span>15 Min</span>
                                                            </div>
                                                            <div className="d-flex gap-1 single ps-5">
                                                                <div className="icon-wrap d-flex align-items-end">
                                                                    <i className="material-symbols-outlined mat-icon fs-six">visibility</i>
                                                                </div>
                                                                <span>55</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-area p-5">
                                            <h3 className="visible-slowly-bottom mb-6">Follow Us</h3>
                                            <ul className="d-flex gap-4 social-area">
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
                                        </div>
                                        <div className="sidebar-area py-8 py-sm-15 text-center p-5">
                                            <h5 className="mb-4"><span>Let’s Work Together</span></h5>
                                            <h3 className="visible-slowly-bottom mb-8">Game Studio Services Agency</h3>
                                            <div className="btn-area alt-bg">
                                                <a href="contact.html" className="box-style btn-box">
                                                    Contact us
                                                    <i className="material-symbols-outlined mat-icon fs-five">chevron_right</i>
                                                </a>
                                            </div>
                                            <a href="javascript:void(0)" className="d-center mt-8 call-number gap-2">
                                                <i className="material-symbols-outlined mat-icon fs-six">call</i>
                                                +000 (123) 456 88
                                            </a>
                                        </div>
                                        <div className="sidebar-area p-5">
                                            <h3 className="visible-slowly-bottom mb-6">Popular Tags</h3>
                                            <ul className="tags d-flex flex-wrap gap-2">
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">App</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">Game App</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">Game Art</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">Game Animation</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">Game QA Testing</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">Unity Development</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">3D ART</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">3D Game Modeling</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">3D Animation</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">Environment Design</a>
                                                </li>
                                                <li className="box-style btn-box">
                                                    <a href="javascript:void(0)">3D Characters</a>
                                                </li>
                                            </ul>
                                        </div>
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




