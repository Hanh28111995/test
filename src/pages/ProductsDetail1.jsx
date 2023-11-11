import Image from 'next/image'
import React from 'react'
import product_detail_1 from './../../public/assets/image/bg_img/product_detail_1.png'
import location_decor_img from './../../public/assets/image/bg_img/location-decor-img.png'
import one_bottle from './../../public/assets/image/product_img/chai mam sonfood 3.png'
import caboi from './../../public/assets/image/bg_img/ca 1.png'
import footer_bg from './../../public/assets/image/bg_img/footer_bg_top.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import Head from 'next/head'


export default function ProductsDetail1() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            < Head >
                <title>SON FOODS - One Fish Sauce Bottle </title>
            </Head >

            <section className="contact-page">
                <div className="contact-page-carousel">
                    <Image src={product_detail_1} alt='' className="carousel-img" />
                </div>
                <div className="location-decor-img">
                    <Image src={location_decor_img} alt='' className="w-100" />
                </div>
            </section>
            <section className="products-part-detail" style={{ zIndex: 0 }}>
                <div className="container">
                    <div className="row col-12">
                        <div className="col-md-6 sliders-wrap">
                            <Slider {...settings}>
                                <div className="cover_img">
                                    <Image src={one_bottle} className="img-fluid" alt='' />
                                </div>
                                <div className="cover_img">
                                    <Image src={one_bottle} className="img-fluid" alt='' />
                                </div>
                                <div className="cover_img">
                                    <Image src={one_bottle} className="img-fluid" alt='' />
                                </div>
                            </Slider>
                        </div>
                        <div className="col-md-6 px-5 detail-content">
                            <h4 className="color-2 detail-content-title" style={{ textTransform: 'uppercase' }}> Nước mắm cá cơm Mỹ</h4>
                            <p>Lần đầu tiên trong lịch sử làm mắm gia truyền, cá cơm Mỹ đã được sử dụng để làm nước mắm thủ công
                                tại Việt Nam. Công ty Son Foods tự hào khi đã có lịch sử sản xuất những chai nước mắm xuất sắc
                                qua 4 thế hệ và đã dành được nhiều huy chương vàng trên thế giới.
                            </p>
                            <div className="d-flex flex-row align-items-center mb-3">
                                <span className="mr-3">Số Lượng:</span>
                                <select name="location" id="location">
                                    <option value={1}>1 Chai 520ml</option>
                                    <option value={2}>2 Chai 520ml</option>
                                    <option value={2}>12 Chai 520ml</option>
                                </select>
                            </div>
                            <button className="btn_header mt-1">
                                <span>BUY NOW</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-bottom">
                    <Image src={caboi} alt='' />
                </div>
                <div className="cotact-decor-img">
                    <Image src={footer_bg} alt='' />
                </div>
            </section>
        </>
    )
}
