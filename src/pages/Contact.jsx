
import Head from 'next/head'

import Image from 'next/image'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useEffect, useState } from 'react'

import contact_bg from "./../../public/assets/image/bg_img/contact_replace.jpg"
import contact_decor from "./../../public/assets/image/bg_img/location-decor-img.png"
import contact_bg2 from "./../../public/assets/image/bg_img/Contact section 1.png"
import fishsauce_bowl from './../../public/assets/image/product_img/Nuoc Mam Ca Com My Poster 082026.png'
import decor_contact from './../../public/assets/image/bg_img/footer_bg_top.png'


export default function Contact() {

    return (
        <>
            < Head >
                <title>SON FOODS - Liên hệ</title>
            </Head >

            <section className="contact-page">
                <div className="contact-page-carousel">
                    <Image src={contact_bg} alt="" className="carousel-img position-relative" fill />
                </div>
                <div className="location-decor-img">
                    <Image src={contact_decor} alt="" className="position-absolute" />
                </div>
            </section>
            <section className="location-page">
                <div className="container" style={{ zIndex: 50, position: 'relative' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d474208.30616671714!2d104.0596212634821!3d10.33800063780107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEwJzQ5LjYiTiAxMDTCsDAyJzA4LjEiRQ!5e0!3m2!1svi!2sus!4v1699393404231!5m2!1svi!2sus" width="100%" height={592} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </section>
            <section className="contact-infor-part">
                <div className="row col-12 contact-infor-content">
                    <div className="col-md-4 contact-infor-left">
                        <Image src={contact_bg2} alt="" />
                        <div className="d-flex  vertical-title-wrap">
                            <p className="vertical-title"><span className="color-1">PRODUCT </span> <br /><span className="color-3">OF
                            </span><span className="color-2"> USA</span> </p>
                        </div>
                    </div>
                    <div className="col-md-8 contact-infor-right px-5 ">
                        <div className="contact-form text-center ">
                            <div className="main_title p-0">
                                <h3><span className="color-2">LIÊN HỆ </span></h3>
                            </div>
                            <div className="contact-form-content">
                                <div className="row col-12 justify-content-center">
                                    <div className="row col-6">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="row col-6">
                                        <input type="text" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="row col-12">
                                    <div className="row col-6">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div className="row col-6">
                                        <input type="text" placeholder="Title" />
                                    </div>
                                </div>
                                <div className="row col-12">
                                    <textarea name id cols={30} rows={5} placeholder="Message" defaultValue={""} />
                                </div>
                                <button className="btn_header-1 mt-4"><span>GỬI NGAY</span></button>
                            </div>
                        </div>
                    </div>
                    <Image src={fishsauce_bowl} alt="" />
                </div>
                <div className="cotact-decor-img">
                    <Image src={decor_contact} alt="" />
                </div>
            </section>
        </>
    )
}
