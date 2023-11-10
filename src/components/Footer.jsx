import Image from 'next/image'
import React from 'react'
import fb_logo from './../../public/assets/image/icon_img/social-icon/facebook.png'
import ins_logo from './../../public/assets/image/icon_img/social-icon/instagram.png'

export default function Footer() {
    return (
        // <footer className="footer-section">
        //     <div className="container-fluid">
        //         <div className="social-items">
        //             <ul className="d-flex justify-content-around">
        //                 <li className="box-style box-second justify-content-center">
        //                     <a href="https://www.facebook.com/" className="d-center gap-2">
        //                         <i className="fab fa-facebook-f" />
        //                         <span>Facebook</span>
        //                     </a>
        //                 </li>
        //                 <li className="box-style box-second justify-content-center">
        //                     <a href="https://www.instagram.com/" className="d-center gap-2">
        //                         <i className="fab fa-instagram" />
        //                         <span>Instagram</span>
        //                     </a>
        //                 </li>
        //                 <li className="box-style box-second justify-content-center">
        //                     <a href="https://www.linkedin.com/" className="d-center gap-2">
        //                         <i className="fab fa-linkedin-in" />
        //                         <span>linkedin</span>
        //                     </a>
        //                 </li>
        //                 <li className="box-style box-second justify-content-center">
        //                     <a href="https://twitter.com/" className="d-center gap-2">
        //                         <i className="fab fa-twitter" />
        //                         <span>Twitter</span>
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="row align-items-center justify-content-center overflow-hidden">
        //             <div className="col-lg-6 position-relative">
        //                 <div className="box-items d-inline-flex flex-wrap position-absolute">
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item active-item opacity-25" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item active-item opacity-25" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item active-item opacity-25" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                     <div className="single-item" />
        //                 </div>
        //                 <div className="row pt-120 pb-120 px-5 ps-md-15 ps-lg-0 align-items-center justify-content-start justify-content-lg-end">
        //                     <div className="col-xl-8 col-lg-10 col-md-8">
        //                         <div className="content-area visible-from-bottom">
        //                             <div className="section-area">
        //                                 <a href="index.html" className="fs-four brand-area">Gamestorm</a>
        //                                 <p className="mt-4 w-75">Gamestorm is a premier gaming studio creating
        //                                     innovative and engaging games for players of all ages. Offering a wide
        //                                     variety of gaming experiences.</p>
        //                             </div>
        //                             <div className="location-area mt-8 d-grid gap-7">
        //                                 <div className="d-flex gap-3 align-items-center">
        //                                     <div className="icon-box d-center">
        //                                         <i className="material-symbols-outlined mat-icon fs-fure"> location_on
        //                                         </i>
        //                                     </div>
        //                                     <div className="right-item">
        //                                         <h5>London</h5>
        //                                         <span>Al. Brucknera Aleksandra 63, Wrocław 51-410</span>
        //                                     </div>
        //                                 </div>
        //                                 <div className="d-flex gap-3 align-items-center">
        //                                     <div className="icon-box d-center">
        //                                         <i className="material-symbols-outlined mat-icon fs-fure"> location_on
        //                                         </i>
        //                                     </div>
        //                                     <div className="right-item">
        //                                         <h5>New York</h5>
        //                                         <span>7012 Green Lake Ave., Poughkeepsie, NY 12601</span>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-6">
        //                 <div className="content-right visible-from-bottom pt-120 pb-120 px-5 ps-md-15 ps-lg-10 px-xxl-20">
        //                     <div className="row">
        //                         <div className="col-xl-8 col-lg-10 col-md-7">
        //                             <div className="main-content">
        //                                 <div className="head-area">
        //                                     <h4 className="mb-3">Stay updated with news on all our games</h4>
        //                                     <p>Want to be the first to know about new releases? Subscribe out
        //                                         newsletter!</p>
        //                                 </div>
        //                                 <form action="#">
        //                                     <div className="input-area mt-6 p-4 d-grid d-sm-flex align-items-center justify-content-between">
        //                                         <input type="text" placeholder="Enter Your Email" />
        //                                         <div className="btn-area mt-6 mt-sm-0">
        //                                             <button className="box-style text-nowrap btn-box">
        //                                                 Send Massage
        //                                             </button>
        //                                         </div>
        //                                     </div>
        //                                 </form>
        //                                 <div className="instagram-post mt-10">
        //                                     <h5 className="mb-5">Instagram post</h5>
        //                                     <ul className="d-flex gap-2">
        //                                         <li>
        //                                             <a href="index.html"><img src="assets/images/instagram-img-1.png" alt="img" /></a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="index.html"><img src="assets/images/instagram-img-2.png" alt="img" /></a>
        //                                         </li>
        //                                         <li>
        //                                             <a href="index.html"><img src="assets/images/instagram-img-3.png" alt="img" /></a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="footer-bottom py-8">
        //             <div className="container">
        //                 <div className="row justify-content-center">
        //                     <div className="col-md-6 text-center">
        //                         <div className="copyright">
        //                             <p>Copyright © 2023 <a href="index.html">Gamestorm</a> - All Right Reserved</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>

        <footer>
            <div className="footer-content container">
                <div className="footer-item1">
                    <p className="ft-head-title">Về chúng tôi</p>
                    <ul>
                        <li><a href="javascript:void(0);">Thông tin </a></li>
                        <li><a href="javascript:void(0);">Sản phẩm </a></li>
                        <li><a href="javascript:void(0);">Liên lạc</a></li>
                    </ul>
                    <p className="ft-head-title">Hoạt động</p>
                    <ul>
                        <li>
                            Mở cửa các ngày trong tuần:<br />
                            08:00 - 18:00
                        </li>
                    </ul>
                </div>
                <div className="footer-item2">
                    <p className="ft-head-title">Hoạt động</p>
                    <ul>
                        <li><a href="javascript:void(0);">Thông tin sở hữu</a></li>
                        <li><a href="javascript:void(0);">Hướng dẫn thanh toán </a></li>
                        <li><a href="javascript:void(0);">Giấy phép An toàn vệ sinh thực phẩm</a></li>
                        <li><a href="javascript:void(0);">Điều kiện giao dịch chung</a></li>
                        <li><a href="javascript:void(0);">Hướng dẫn mua hàng</a></li>
                        <li><a href="javascript:void(0);">Hướng dẫn thanh toán</a></li>
                        <li><a href="javascript:void(0);">Chính sách mua hàng</a></li>
                    </ul>
                </div>
                <div className="footer-item3">
                    <p className="ft-head-title">&nbsp;</p>
                    <ul>
                        <li><a href="javascript:void(0);">Chính sách thanh toán</a></li>
                        <li><a href="javascript:void(0);">Chính sách vận chuyển &amp; giao nhận</a></li>
                        <li><a href="javascript:void(0);">Chính sách kiểm hàng</a></li>
                        <li><a href="javascript:void(0);">Chính sách đổi hàng - hoàn tiền</a></li>
                        <li><a href="javascript:void(0);">Chính sách bảo mật thông tin</a></li>
                    </ul>
                </div>
                <div className="footer-item4">
                    <p className="ft-head-title">Địa chỉ</p>
                    <ul className="footer_icon_list">
                        <li>
                            <a href="javascript:void(0);">
                                <i className="fa-solid fa-location-dot" /> &nbsp; <span>
                                    Tổ 20, ấp Rạch Hàm, xã Hàm Ninh, Phú Quốc, Kiên Giang
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <i className="fa-sharp fa-solid fa-envelope-open" /> &nbsp;
                                <span>info@sonfishsauce.com</span>
                            </a>
                        </li>
                        <li><a href="javascript:void(0);"><i className="fa-solid fa-phone" /> &nbsp;
                            <span>+1-714-461-0107 | +84&nbsp;978909694</span></a></li>
                        <li>
                            <div className="d-flex flex-row align-items-end">
                                <span className="ft-head-title m-0">Theo dõi:</span> &nbsp;
                                <div className="social-icon-fb">
                                    <a href="https://www.facebook.com/SonFishSauce/ " target="_blank" rel="nofollow">
                                        <Image src={fb_logo} alt="" />
                                    </a>
                                </div>
                                <div className="ml-2">
                                    <a href="https://www.instagram.com/sonfishsauce/" target="_blank" rel="nofollow">
                                        <Image height={30} src={ins_logo} style={{ borderRadius: 6 }} alt="" />
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-end">
                <p>© Son Foods Inc</p>
            </div>
        </footer>

    )
}
