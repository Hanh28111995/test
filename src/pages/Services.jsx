
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'




export default function Services() {


    return (
        <>
            < Head >
                <title>Services</title>
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
                <section className="banner-section inner-banner position-relative about services">
                    <div className="shape-area">
                        <img src="assets/images/abs-items/bubble.png" className="shape-1" alt="icon" />
                        <img src="assets/images/abs-items/ellipse-7.png" className="shape-2" alt="icon" />
                    </div>
                    <div className="container position-relative">
                        <div className="banner-content row justify-content-between">
                            <div className="col-lg-6 col-md-10">
                                <div className="main-content">
                                    <h2 className="visible-slowly-bottom display-four mb-6">Our <span>Services</span></h2>
                                    <p className="fs-four">Our systematic approach to art development ensures high delivery
                                        standards for games and game-based solutions, from look development to engine
                                        integration.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
                                <div className="breadcrumb-area position-absolute end-0 bottom-0">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-end justify-content-end">
                                            <li className="breadcrumb-item p-0 m-0"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services pt-120 pb-120">
                    <div className="container">
                        <div className="row section-header justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h4 className="sub-title">Game <span>Design &amp; Development</span> Services</h4>
                                <span className="fs-two heading mb-6">Our Comprehensive Game <span>Development
                                    Services</span></span>
                                <p>End-to-end game development, revamping, and outsourcing services. Immersive technology
                                    expertise for top-class gaming experiences</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row cus-mar">
                            <div className="col-xl-4 col-sm-6">
                                <div className="single-box d-inline-flex d-center text-center position-relative">
                                    <img src="assets/images/services-img-1.png" alt="Image" />
                                    <a href="our-services-details-2.html" className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                                        Find Out
                                        <i className="material-symbols-outlined"> straight </i>
                                    </a>
                                    <h3 className="visible-slowly-bottom position-absolute">Game Art</h3>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="single-box d-inline-flex d-center text-center position-relative">
                                    <img src="assets/images/services-img-2.png" alt="Image" />
                                    <a href="our-services-details-2.html" className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                                        Find Out
                                        <i className="material-symbols-outlined"> straight </i>
                                    </a>
                                    <h3 className="visible-slowly-bottom position-absolute">Game Development</h3>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="single-box d-inline-flex d-center text-center position-relative">
                                    <img src="assets/images/services-img-3.png" alt="Image" />
                                    <a href="our-services-details-2.html" className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                                        Find Out
                                        <i className="material-symbols-outlined"> straight </i>
                                    </a>
                                    <h3 className="visible-slowly-bottom position-absolute">Game Animation</h3>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="single-box d-inline-flex d-center text-center position-relative">
                                    <img src="assets/images/services-img-4.png" alt="Image" />
                                    <a href="our-services-details-2.html" className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                                        Find Out
                                        <i className="material-symbols-outlined"> straight </i>
                                    </a>
                                    <h3 className="visible-slowly-bottom position-absolute">Game QA Testing</h3>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="single-box d-inline-flex d-center text-center position-relative">
                                    <img src="assets/images/services-img-5.png" alt="Image" />
                                    <a href="our-services-details-2.html" className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                                        Find Out
                                        <i className="material-symbols-outlined"> straight </i>
                                    </a>
                                    <h3 className="visible-slowly-bottom position-absolute">Out staffing</h3>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="single-box d-inline-flex d-center text-center position-relative">
                                    <img src="assets/images/services-img-6.png" alt="Image" />
                                    <a href="our-services-details-2.html" className="abs-area alt-bg box-style btn-box-second position-absolute d-center flex-column p-4">
                                        Find Out
                                        <i className="material-symbols-outlined"> straight </i>
                                    </a>
                                    <h3 className="visible-slowly-bottom position-absolute">Game UX/UI</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-focus services-area position-relative pt-120">
                    <div className="shape-area">
                        <img src="assets/images/abs-items/line-1.png" className="shape-1" alt="icon" />
                        <img src="assets/images/abs-items/object-1.png" className="shape-2" alt="icon" />
                    </div>
                    <div className="container">
                        <div className="row cus-mar pb-120">
                            <div className="col-sm-6 col-xl-3">
                                <div className="single-box d-grid justify-content-center">
                                    <div className="counters d-center">
                                        <span className="odometer display-one" data-odometer-final="26+">0</span>
                                        <span className="display-one symbol">+</span>
                                    </div>
                                    <p className="name-area fs-seven">
                                        Years in Business
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="single-box d-grid justify-content-center">
                                    <div className="counters d-center">
                                        <span className="odometer display-one" data-odometer-final={78}>0</span>
                                        <span className="display-one symbol">+</span>
                                    </div>
                                    <p className="name-area fs-seven">
                                        Downloads
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="single-box d-grid justify-content-center">
                                    <div className="counters d-center">
                                        <span className="odometer display-one" data-odometer-final={89}>0</span>
                                        <span className="display-one symbol">+</span>
                                    </div>
                                    <p className="name-area fs-seven">
                                        Games Launched
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="single-box d-grid justify-content-center">
                                    <div className="counters d-center">
                                        <span className="odometer display-one" data-odometer-final={22}>0</span>
                                        <span className="display-one symbol">+</span>
                                    </div>
                                    <p className="name-area fs-seven">
                                        Gaming Projects Delivered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative d-center">
                                    <img src="assets/images/video-bg-2.png" className="w-100" alt="sec-img" />
                                    <a href="https://www.youtube.com/watch?v=IaT4DneyKLc" className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                                        Play
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="how-it-works pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center section-text">
                            <div className="col-lg-6 text-center">
                                <h4 className="sub-title">A Simple yet Powerful and efficient <span>Process</span></h4>
                                <span className="fs-two heading mb-4">Our Game <span>Development Process</span></span>
                                <p className="mb-4">Take your game development for next level in 10 simple step. Always work
                                    Done By the Following Process</p>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-sm-6 col-xl-3 position-relative d-center">
                                <div className="abs-area d-center position-absolute">
                                    <i className="material-symbols-outlined mat-icon">double_arrow</i>
                                </div>
                                <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                                    <div className="icon-box d-center m-auto">
                                        <i className="material-symbols-outlined fs-two"> edit_document </i>
                                    </div>
                                    <div className="title-area">
                                        <h4 className="mt-6 mb-3">Script Writing</h4>
                                        <p>We start by sketching the script using your instructions as a guide, and we then
                                            wait for your approval before moving.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 position-relative d-center">
                                <div className="abs-area d-center position-absolute">
                                    <i className="material-symbols-outlined mat-icon">double_arrow</i>
                                </div>
                                <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                                    <div className="icon-box d-center m-auto">
                                        <i className="material-symbols-outlined fs-two"> burst_mode </i>
                                    </div>
                                    <div className="title-area">
                                        <h4 className="mt-6 mb-3">Story Board</h4>
                                        <p>We draw a representation of your work that shows the camera angles and the
                                            script.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 position-relative d-center">
                                <div className="abs-area d-center position-absolute">
                                    <i className="material-symbols-outlined mat-icon">double_arrow</i>
                                </div>
                                <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                                    <div className="icon-box d-center m-auto">
                                        <i className="material-symbols-outlined fs-two"> view_in_ar </i>
                                    </div>
                                    <div className="title-area">
                                        <h4 className="mt-6 mb-3">3D Modeling</h4>
                                        <p>We create the objects, people, settings, and other things that go into creating
                                            your video.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 position-relative d-center">
                                <div className="abs-area d-center position-absolute">
                                    <i className="material-symbols-outlined mat-icon">double_arrow</i>
                                </div>
                                <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                                    <div className="icon-box d-center m-auto">
                                        <i className="material-symbols-outlined fs-two"> auto_awesome_motion </i>
                                    </div>
                                    <div className="title-area">
                                        <h4 className="mt-6 mb-3">Animation</h4>
                                        <p>After creating the animations and adding voiceovers and sound effects, we turn
                                            the project over.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-game-features benefits pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center section-text">
                            <div className="col-lg-6 text-center">
                                <h4 className="sub-title">Client-Centric <span>Creativity</span></h4>
                                <span className="fs-two heading mb-4">Our Fundamental Benefits in <span>Game ART and
                                    Development</span></span>
                                <p className="mb-4">A client-centric approach coupled with creative freedom, professional
                                    experimentation, and a willingness to create beyond the limits makes us a great partner
                                    for businesses looking to deliver a product that stands out.</p>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                                    <div className="content-box d-flex gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> sports_esports </i>
                                        </div>
                                        <div className="info-box">
                                            <h5 className="mb-2">Customized Game Art and Development</h5>
                                            <p>All our services, from art creation to a full-fledged game, are implemented
                                                using flexible methodologies and taking into account all client requirements
                                                for an effective result.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                                    <div className="content-box d-flex gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> search </i>
                                        </div>
                                        <div className="info-box">
                                            <h5 className="mb-2">Transparent &amp; Reliable Communication</h5>
                                            <p>The client has constant access &amp; the ability to control entire workflow &amp;
                                                receive instant feedback on any aspect of their interest, which ensures
                                                repeat business in 90% of cases.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                                    <div className="content-box d-flex gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> verified </i>
                                        </div>
                                        <div className="info-box">
                                            <h5 className="mb-2">Commitment to Global Quality Standards</h5>
                                            <p>Whether it's quality or security standards, our customers don't have to
                                                worry: we follow the latest innovations in data protection and always adhere
                                                to global quality standards for world-class products.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                                    <div className="content-box d-flex gap-4 gap-md-6">
                                        <div className="icon-box d-inline-flex d-center">
                                            <i className="material-symbols-outlined fs-three"> military_tech </i>
                                        </div>
                                        <div className="info-box">
                                            <h5 className="mb-2">Proven Track Record in Different Styles</h5>
                                            <p>A team of 350+ professional artists and developers with extensive experience
                                                in both casual and AAA projects of various styles and genres can cover the
                                                volume of almost any project.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="recently-completed">
                    <div className="container pt-120 pb-120">
                        <div className="row section-header justify-content-between align-items-center">
                            <div className="col-lg-8">
                                <h4 className="sub-title">Recently <span>Completed</span></h4>
                                <span className="fs-two heading mb-6">Game Development and Art, <span>Elevated to a New
                                    Level</span></span>
                            </div>
                            <div className="col-lg-3 btn-movement">
                                <a href="javascript:void(0)" className="box-style d-center px-3 gap-3 m-auto">
                                    View All Project
                                    <i className="material-symbols-outlined"> call_made </i>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-lg-12">
                                <div className="recently-completed-carousel">
                                    <div className="slide-area">
                                        <div className="single-slider position-relative d-grid align-items-center">
                                            <div className="img-box">
                                                <img src="assets/images/recently-completed-img-1.png" alt="Image" />
                                            </div>
                                            <div className="position-absolute cus-position start-0">
                                                <div className="content-box p-3 p-sm-8">
                                                    <a href="game.html">
                                                        <h3 className="visible-slowly-bottom mb-3">Game Development</h3>
                                                    </a>
                                                    <p>Game design, programming, art, animation, audio, testing, marketing,
                                                        publishing, monetization, maintenance, player support, analytics.
                                                    </p>
                                                    <a href="game.html" className="end-area mt-8 d-center">
                                                        <i className="material-symbols-outlined"> call_made </i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider position-relative d-grid align-items-center">
                                            <div className="img-box">
                                                <img src="assets/images/recently-completed-img-2.png" alt="Image" />
                                            </div>
                                            <div className="position-absolute cus-position start-0">
                                                <div className="content-box p-3 p-sm-8">
                                                    <a href="game.html">
                                                        <h3 className="visible-slowly-bottom mb-3">Game Development</h3>
                                                    </a>
                                                    <p>Game design, programming, art, animation, audio, testing, marketing,
                                                        publishing, monetization, maintenance, player support, analytics.
                                                    </p>
                                                    <a href="game.html" className="end-area mt-8 d-center">
                                                        <i className="material-symbols-outlined"> call_made </i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-area">
                                        <div className="single-slider position-relative d-grid align-items-center">
                                            <div className="img-box">
                                                <img src="assets/images/recently-completed-img-3.png" alt="Image" />
                                            </div>
                                            <div className="position-absolute cus-position start-0">
                                                <div className="content-box p-3 p-sm-8">
                                                    <a href="game.html">
                                                        <h3 className="visible-slowly-bottom mb-3">Game Development</h3>
                                                    </a>
                                                    <p>Game design, programming, art, animation, audio, testing, marketing,
                                                        publishing, monetization, maintenance, player support, analytics.
                                                    </p>
                                                    <a href="game.html" className="end-area mt-8 d-center">
                                                        <i className="material-symbols-outlined"> call_made </i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                <section className="contact-us pt-120">
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
                                            <span><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6e260b0202012e0b160f031e020b400d0103">[email&nbsp;protected]</a></span>
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
                                                    <label htmlFor="conname">Name</label>
                                                    <input type="text" id="conname" placeholder="Enter Your Name" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input text-start">
                                                    <label htmlFor="conemail">Email</label>
                                                    <input type="text" id="conemail" placeholder="Enter your email" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input text-start">
                                                    <label htmlFor="consubject">Subject</label>
                                                    <input type="text" id="consubject" placeholder="Enter Subject" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input text-start">
                                                    <label htmlFor="conmessage">Leave us a message</label>
                                                    <textarea cols={4} rows={4} id="conmessage" placeholder="Please type your Message here..." defaultValue={""} />
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




