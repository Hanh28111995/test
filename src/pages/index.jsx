
import Head from 'next/head'

import Image from 'next/image'

import introduce_bg_img from './../../public/assets/image/bg_img/Group30.png'
import Flat_bg_img from './../../public/assets/image/product_bg_img/Flat_bg.png'
import chai_nuocmam from './../../public/assets/image/product_img/chai mam sonfood 1.png'
import poster from './../../public/assets/image/product_img/Nuoc Mam Ca Com My Poster 082026.png'
import prize_bg_left from './../../public/assets/image/bg_img/A4-071.png'
import prize_bg_right from './../../public/assets/image/bg_img/A5-021.png'
import prize_img from './../../public/assets/image/bg_img/A61.png'
import product_1 from './../../public/assets/image/product_bg_img/A8-021.png'
import product_2 from './../../public/assets/image/product_img/chai mam sonfood 3.png'
import product_3 from './../../public/assets/image/product_img/chai mam sonfood 5.png'
import product_4 from './../../public/assets/image/product_img/Layer 1 1.png'
import video_icon from './../../public/assets/image/icon_img/Group 48.png'
import video_thumbnail from './../../public/assets/image/product_img/image 20.png'
import doitac1 from './../../public/assets/image/product_img/image 21.png'
import doitac2 from './../../public/assets/image/product_img/image 22.png'
import doitac3 from './../../public/assets/image/product_img/image 24.png'
import doitac4 from './../../public/assets/image/product_img/image 25.png'
import doitac5 from './../../public/assets/image/product_img/image 26.png'
import doitac6 from './../../public/assets/image/product_img/image 27.png'
import doitac7 from './../../public/assets/image/product_img/image 32.png'
import doitac8 from './../../public/assets/image/product_img/image 29.png'
import doitac9 from './../../public/assets/image/product_img/image 30.png'
import doitac10 from './../../public/assets/image/product_img/image 31.png'
import lienhe_poster from './../../public/assets/image/product_img/Nuoc Mam Ca Com My Poster 082026.png'
import footer_bg_img from './../../public/assets/image/bg_img/footer_bg_top.png'
import Flat from './../../public/assets/image/product_img/Flat-03 1.png'

import 'mediabox/dist/mediabox.min.css';
import mediabox from 'mediabox';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    mediabox('.mediabox'); 
  }, []);

 

  const settings = {
    dots: true,
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
        <title>SON FOODS - Trang chủ</title>
      </Head >
      <div>
        <section className="introduce-part">
          <Image src={introduce_bg_img} alt="" />
          <div className="introduce_bg_top">
            <div className="row col-12 introduce-part-bg">
              <div className="introduce_bg_img">
                <Image src={Flat_bg_img} alt="" />
              </div>
              <div className=" col-sm-7 d-flex justify-content-center align-items-center">
                <div className="introduce-content-left row justify-content-center">
                  <div className="introduce_content mb-4">
                    <h1>
                      <span className="color-1">THE</span><br /><span className="color-3">AMERICAN</span><br /><span className="color-2">ANCHOVY</span>
                    </h1>
                    <p>
                      Son Foods tự hào là nhà cung cấp độc quyền Cá Cơm thiên nhiên nhập khẩu Mỹ tại Việt Nam!
                    </p>
                  </div>
                  <button className="btn_header-1">
                    <span>ĐẶT NGAY</span>
                  </button>
                </div>
              </div>
              <div className="col-sm-5 p-0 d-flex flex-row justify-content-between">
                <div className="introduce-content-right justify-content-center col-10">
                  <Image src={Flat} alt="" width={786} height={450} />
                  <div className="main_img">
                    <Image src={chai_nuocmam} alt="" width={201} height={604} />
                    <Image src={poster} alt="" width={636} height={356} />
                  </div>
                </div>
                <div className="d-flex col-2 justify-content-left" style={{ zIndex: 15 }}>
                  <p className="vertical-title pb-5">
                    <span className="color-1">PRODUCT&nbsp;</span><span className="color-3">OF&nbsp;</span><span className="color-2">USA&nbsp;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="prize-banner" style={{ zIndex: 0, position: 'relative' }}>
            <div className="prize-bg">
              <Image className="prize-bg-left" src={prize_bg_left} alt="" />
              <Image className="prize-bg-right" src={prize_bg_right} alt="" />
              <div className="prize-bg-content container">
                <div className="prize-banner_header">
                  <div className="main_title">
                    <h3 className="color-1">
                      SON FOODS <br />
                      SON FISH SAUCE
                    </h3>
                  </div>
                </div>
                <p>
                  Lần đầu tiên trong lịch sử làm mắm gia truyền, cá cơm Mỹ đã được sử dụng để làm nước mắm thủ
                  công
                  tại Việt Nam. Công ty Son Foods tự hào khi đã có lịch sử sản xuất những chai nước mắm xuất sắc
                  qua 4 thế hệ và đã dành được nhiều huy chương vàng trên thế giới. Từ những vịnh cảng ở Mỹ
                  cho đến các khu làng chài ở Việt Nam!
                </p>
                <Image className="prize-img" src={prize_img} alt="" width={425} height={116} />
                <p className="color-1" style={{ fontWeight: 600 }}>
                  North America Premium Fish Sauce 2020 <br />
                  Europe Best Traditional Fish Sauce 2021
                </p>
                <button className="btn_header-2">
                  <span>ĐỌC THÊM</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="products-part">
          <div className="main_title">
            <h3 className="color-2">SẢN PHẨM</h3>
          </div>
          <div className="container">
            <div className="row col-12 mt-5">
              <div className="card col-md-4">
                <a href="./Products_detail1.html" style={{ textDecoration: 'none' }}>
                  <div className="wrap_item">
                    <div className="item-overlay">
                      <Image src={product_1} alt="" />
                    </div>
                    <Image src={product_2} className="card-img-top img-fluid" alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Nước Mắm Cá Cơm Mỹ</h5>
                    <p className="card-text detail-1">PRODUCT OF USA</p>
                    <p className="card-text detail-2">1 Chai 520ml</p>
                    <button className="btn_header">
                      <span>ĐẶT NGAY</span>
                    </button>
                  </div>
                </a>
              </div>
              <div className="card col-md-4">
                <a href="./Products_detail2.html" style={{ textDecoration: 'none' }}>
                  <div className="wrap_item">
                    <div className="item-overlay">
                      <Image src={product_1} alt="" />
                    </div>
                    <div className="product-image">
                      <Image className="card-img-top img-fluid" src={product_3} alt="Card image cap" />
                      <Image className="card-img-top img-fluid" src={product_3} alt="Card image cap" />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Nước Mắm Cá Cơm Mỹ</h5>
                    <p className="card-text detail-1">PRODUCT OF USA</p>
                    <p className="card-text detail-2"> 2 Chai 520ml</p>
                    <button className="btn_header">
                      <span>ĐẶT NGAY</span>
                    </button>
                  </div>
                </a>
              </div>
              <div className="card col-md-4">
                <a href="./Products_detail3.html" style={{ textDecoration: 'none' }}>
                  <div className="wrap_item">
                    <div className="item-overlay">
                      <Image src={product_1} alt="" />
                    </div>
                    <Image className="card-img-top img-fluid" src={product_4} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Nước Mắm Cá Cơm Mỹ</h5>
                    <p className="card-text detail-1">PRODUCT OF USA</p>
                    <p className="card-text detail-2">12 Chai 520ml</p>
                    <button className="btn_header">
                      <span>ĐẶT NGAY</span>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="media-part">
          <div className="main_title">
            <h3 className="color-2">TRUYỀN THÔNG</h3>
          </div>
          <div className="media-content">
            <div className="video-zone container">
              <a href="https://www.youtube.com/embed/QpQdbCQx49w?si=Ba3cTMUMM_NoyTV8" className="mediabox" data-mediabox="video">
                <Image className="video-icon" src={video_icon} alt="" />
                <Image className="video-bg desktop is-paused w-100" src={video_thumbnail} alt="" />
              </a>
            </div>
            <div className="text-zone">
              <div style={{ width: '70%', margin: 'auto' }}>
                <div className="col-12 row justify-content-center">
                  <div className="col-md-4 text-center">
                    <h3 className="color-5 p-2">VIETNAM</h3>
                    <h4 style={{ textTransform: 'uppercase' }}>
                      Nước Mắm Cá Cơm Mỹ thách thức đấu
                      trường thế giới
                    </h4>
                  </div>
                  <div className="col-md-8 px-3">
                    <p>
                      Gần nửa thế kỷ lịch sử tị nạn của người
                      Việt hải ngoại, chai nước mắm truyền thống – khẩu
                      vị
                      đặc
                      tính của người Việt Nam, từ chính quê hương của nó, chính thức xuất hiện trong siêu thị
                      Whole
                      Foods Market nổi tiếng của Mỹ ở Arizona, California, Connecticut, Idaho, New Jersey và
                      New
                      York...
                    </p>
                    <button className="btn_header-3" title=" ">
                      <span>ĐỌC THÊM</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customer-part">
          <div className="main_title">
            <h3 className="color-1">ĐỐI TÁC</h3>
          </div>
          <Slider {...settings}>
            <div className="cover_img">
              <Image src={doitac1} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac2} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac3} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac4} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac5} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac6} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac7} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac8} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac9} alt="" />
            </div>
            <div className="cover_img">
              <Image src={doitac10} alt="" />
            </div>
          </Slider>
        </section>
        <section className="contact-part" style={{ zIndex: 0, position: 'relative' }}>
          <div className="contact-content">
            <div className="row col-12 justify-content-center">
              <div className="col-xl-4 col-lg-0 " />
              <div className="contact-form col-xl-8 col-lg-12 text-center">
                <h3>
                  <span className="color-2">LIÊN HỆ</span>
                </h3>
                <div className="contact-form-content">
                  <div className="row col-12 justify-content-center">
                    <div className="row col-6">
                      <input type="text" placeholder="Họ và tên" />
                    </div>
                    <div className="row col-6">
                      <input type="text" placeholder="Số điện thoại" />
                    </div>
                  </div>
                  <div className="row col-12">
                    <div className="row col-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="row col-6">
                      <input type="text" placeholder="Tiêu đề" />
                    </div>
                  </div>
                  <div className="row col-12">
                    <textarea name id cols={30} rows={5} placeholder="Nội dung" defaultValue={""} />
                  </div>
                  <button className="btn_header-2">
                    <span>GỬI NGAY</span>
                  </button>
                </div>
              </div>
              <div className="d-flex  vertical-title-wrap">
                <p className="vertical-title">
                  <span className="color-1">PRODUCT </span> <br /><span className="color-3">
                    OF
                  </span><span className="color-2">USA</span>
                </p>
              </div>
            </div>
            <Image src={lienhe_poster} alt="" />
          </div>
          <div className="cotact-decor-img">
            <Image src={footer_bg_img} alt="" />
          </div>
        </section>
      </div>


    </>
  )
}




