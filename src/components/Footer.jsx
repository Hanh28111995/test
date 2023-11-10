import Image from 'next/image'
import React from 'react'
import fb_logo from './../../public/assets/image/icon_img/social-icon/facebook.png'
import ins_logo from './../../public/assets/image/icon_img/social-icon/instagram.png'

export default function Footer() {
    return (        
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
