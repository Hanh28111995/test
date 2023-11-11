import Head from 'next/head'

import Image from 'next/image'
import about_bg from './../../public/assets/image/bg_img/abouUs-bg.jpg'
import about_bg1 from './../../public/assets/image/bg_img/bg_aboutUs_1.png'
import about_bg2 from './../../public/assets/image/bg_img/abouus_replace.png'
import about_prize from './../../public/assets/image/bg_img/A61.png'
import about_prize_left from "./../../public/assets/image/bg_img/A4-071.png"
import about_prize_right from "./../../public/assets/image/bg_img/A5-021.png"
import brand_bg from "./../../public/assets/image/bg_img/bg_aboutUs_3.png"

import brand_1 from "./../../public/assets/image/product_img/image 21.png"
import brand_2 from "./../../public/assets/image/product_img/image 22.png"
import brand_3 from "./../../public/assets/image/product_img/image 24.png"
import brand_4 from "./../../public/assets/image/product_img/image 25.png"
import brand_5 from "./../../public/assets/image/product_img/image 26.png"
import brand_6 from "./../../public/assets/image/product_img/image 27.png"
import brand_7 from "./../../public/assets/image/product_img/image 29.png"
import brand_8 from "./../../public/assets/image/product_img/image 30.png"
import brand_9 from "./../../public/assets/image/product_img/image 31.png"
import brand_10 from "./../../public/assets/image/product_img/image 32.png"
import footer_bg from "./../../public/assets/image/bg_img/footer_bg_top.png"






export default function AboutUS() {
    return (
        <>
            <section className="aboutUs-part pb-0">
                <Image src={about_bg} alt='' className="w-100 carousel-img" />
                <div className="container-fluid position-relative mb-3">
                    <Image src={about_bg1} alt='' className="carousel-decor-img" />
                    <div className="col-12 row aboutUs-content">
                        <div className="col-lg-6 aboutUs-content-left" style={{ marginBottom: 20 }}>
                            <h3 className="color-2">
                                SON FOODS <br /> SON FISH SAUCE
                            </h3>
                            <p>Lần đầu tiên trong lịch sử làm mắm gia truyền, cá cơm Mỹ đã được sử dụng để làm nước mắm thủ công
                                tại Việt Nam. Công ty Son Foods tự hào khi đã có lịch sử sản xuất những chai nước mắm xuất sắc
                                qua 4 thế hệ và đã dành được nhiều huy chương vàng trên thế giới. Từ những vịnh cảng ở Mỹ cho
                                đến các khu làng chài ở Việt Nam! </p>
                        </div>
                        <div className="col-lg-6 aboutUs-content-right">
                            <Image src={about_bg2} alt='' className="w-100 img-fluid" style={{ borderRadius: 21 }} />
                        </div>
                    </div>
                </div>
                <div className="about_prize  text-center">
                    <Image className="prize-img img-fluid" src={about_prize} alt='' width={798} height={218} />
                    <p>
                        North America Premium Fish Sauce 2020 <br />
                        Europe Best Traditional Fish Sauce 2021
                    </p>
                    <Image className="prize-bg-left" src={about_prize_left} alt='' />
                    <Image className="prize-bg-right" src={about_prize_right} alt='' />
                </div>
            </section>
            <section className="brand-part">
                <Image src={brand_bg} alt='' className="brand-bg-decor" />
                <div className="main_title">
                    <h3 className="color-1">ĐỐI TÁC</h3>
                </div>
                <div className="brand-wraper container">
                    <div className="row d-flex justify-content-center">
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_1} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_2} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_3} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_4} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_5} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_6} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_7} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_8} className="img-fluid" alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_9} className="img-fluid" style={{ objectFit: 'scale-down' }} alt='' />
                            </div>
                        </div>
                        <div className="brand-item col-md-2 p-2">
                            <div className="brand-img-wrap">
                                <Image src={brand_10} className="img-fluid" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cotact-decor-img">
                    <Image src={footer_bg} alt='' />
                </div>
            </section>
        </>
    )
}
