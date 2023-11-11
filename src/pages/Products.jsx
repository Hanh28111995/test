
import Head from 'next/head'
import Image from 'next/image'
import product_detail from './../../public/assets/image/bg_img/product_detail.png'
import bg_aboutus from './../../public/assets/image/bg_img/bg_aboutUs_1.png'
import overlay_bg from './../../public/assets/image/product_bg_img/A8-021.png'
import one_bottle from './../../public/assets/image/product_img/chai mam sonfood 3.png'
import two_bottle from './../../public/assets/image/product_img/chai mam sonfood 5.png'
import twelve_bottle from './../../public/assets/image/product_img/Layer 1 1.png'
import bg_bottom from './../../public/assets/image/bg_img/footer_bg_top.png'


export default function Products() {
    return (
        <>
            < Head >
                <title>SON FOODS - Products</title>
            </Head >
            <div>
                <section className="contact-page">
                    <div className="contact-page-carousel">
                        <Image src={product_detail} alt='' className="carousel-img" />
                    </div>
                    <div className="location-decor-img" style={{ backgroundColor: 'white' }}>
                        <Image src={bg_aboutus} alt='' className="w-100" />
                    </div>
                </section>
                <section className="products-part">
                    <div className="container" style={{ paddingTop: '5rem' }}>
                        <div className="row col-12 mt-5">
                            <div className="card col-md-4">
                                <a href="./ProductsDetail1" style={{ textDecoration: 'none' }}>
                                    <div className="wrap_item">
                                        <div className="item-overlay">
                                            <Image src={overlay_bg} alt='' />
                                        </div>
                                        <Image className="card-img-top img-fluid" src={one_bottle} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Nước mắm cá cơm Mỹ</h5>
                                        <p className="card-text detail-1">Product of USA</p>
                                        <p className="card-text detail-2">1 Chai 520ml</p>
                                        <button className="btn_header">
                                            <span>ĐẶT NGAY</span>
                                        </button>
                                    </div>
                                </a>
                            </div>
                            <div className="card col-md-4">
                                <a href="./ProductsDetail2" style={{ textDecoration: 'none' }}>
                                    <div className="wrap_item">
                                        <div className="item-overlay">
                                            <Image src={overlay_bg} alt="" />
                                        </div>
                                        <div className="product-image">
                                            <Image className="card-img-top img-fluid" src={two_bottle} alt="Card image cap" />
                                            <Image className="card-img-top img-fluid" src={two_bottle} alt="Card image cap" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Nước mắm cá cơm Mỹ</h5>
                                        <p className="card-text detail-1">Product of USA</p>
                                        <p className="card-text detail-2"> 2 Chai 520ml</p>
                                        <button className="btn_header">
                                            <span>ĐẶT NGAY</span>
                                        </button>
                                    </div>
                                </a>
                            </div>
                            <div className="card col-md-4">
                                <a href="./ProductsDetail3" style={{ textDecoration: 'none' }}>
                                    <div className="wrap_item">
                                        <div className="item-overlay">
                                            <Image src={overlay_bg} alt="" />
                                        </div>
                                        <Image className="card-img-top img-fluid" src={twelve_bottle} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Nước mắm cá cơm Mỹ</h5>
                                        <p className="card-text detail-1">Product of USA</p>
                                        <p className="card-text detail-2">12 Chai 520ml</p>
                                        <button className="btn_header">
                                            <span>ĐẶT NGAY</span>
                                        </button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cotact-decor-img">
                        <Image src={bg_bottom} alt="" />
                    </div>
                </section>
            </div>
        </>

    )
}




