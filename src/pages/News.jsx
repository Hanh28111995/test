
import Head from 'next/head'

import Image from 'next/image'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useEffect, useState } from 'react'

import contact_bg_1 from "./../../public/assets/image/bg_img/news_bg1.png"
import contact_bg_2 from "./../../public/assets/image/bg_img/news_bg2.png"
import contact_bg_3 from "./../../public/assets/image/bg_img/news_bg3.png"
import Script from 'next/script';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import $ from 'jquery'


export default function News() {

    useEffect(() => {
        $("#collap-item").hide();
        $('.news-list .fix-padding-col:lt(3)').show();
    },)

    const expandItem = () => {
        console.log('x')
        var items = 6;
        var show = 3;
        let shown = $('.news-list .fix-padding-col:visible').length;
        let next_show = shown + show;
        if (shown < items) {
            $('.news-list .fix-padding-col:lt(' + next_show + ')').show(300);
        }
        next_show = $('.news-list .fix-padding-col:visible').length;
        if (next_show >= items) {
            $("#expand-item").hide();
            $("#collap-item").show();
        }
    }
    const collapseItem = () => {
        console.log('y')
        $('.news-list .fix-padding-col:gt(2)').hide(300);
        $('.news-list .fix-padding-col:lt(3)').show();
        $("#expand-item").show();
        $("#collap-item").hide();
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <>
            < Head >
                <title>SON FOODS - Truyền thông</title>
            </Head >

            <section className="contact-page">
                <Slider className="contact-page-carousel" {...settings}>
                    <div>
                        <Image src={contact_bg_1} alt='' className="carousel-img" />
                    </div>
                    <div>
                        <Image src={contact_bg_2} alt='' className="carousel-img" />
                    </div>
                    <div>
                        <Image src={contact_bg_3} alt='' className="carousel-img" />
                    </div>
                </Slider>
            </section>
            <section className="news-part">
                <div className="main_title py-5">
                    <h3 className="color-2">TIN TỨC</h3>
                </div>
                <div className=''>
                    <div className="row col-12 news-list">
                        <div className="col-md-4 fix-padding-col">
                            <div className="news-item-smaller">
                                <a target="_blank" href="https://www.seriouseats.com/charles-phans-flavored-fish-sauce">
                                    <div className="news-item-smaller-bg">
                                        <img src="https://www.seriouseats.com/thmb/B8MJr1uobrZpvIgMOu5n91A4Tf4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__01__20130129-238406-cook-the-book-green-papaya-salad-ae7d3b43b48d4214ac3cd0fe27da0894.jpg" alt=''
                                        />
                                    </div>
                                    <div className="news-item-content d-flex">
                                        <div className="news-item-content-text">
                                            <p className="news-header" title="Charles Phan's Flavored Fish Sauce">Charles Phan's
                                                Flavored Fish Sauce</p>
                                            <p className="news-pa">
                                                Use this fish sauce in salad dressings, like Charles Phan's Green Papaya Salad
                                                from Vietnamese Home Cooking, or on top of fish or chicken.
                                                Reprinted with permission from Vietnamese Home Cooking by Charles Phan,
                                                copyright 2012.
                                            </p>
                                            <p className="news-date">April 15, 2019</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 fix-padding-col">
                            <div className="news-item-smaller">
                                <a target="_blank" href="https://cooking.nytimes.com/recipes/1024023-ph-ga-chicken-pho">
                                    <div className="news-item-smaller-bg">
                                        <Image src="https://static01.nyt.com/images/2023/03/22/multimedia/16korex1-pho-ltgp/16korex1-pho-ltgp-master768.jpg" alt='' className='position-relative' fill
                                        />
                                    </div>
                                    <div className="news-item-content d-flex">
                                        <div className="news-item-content-text">
                                            <p className="news-header" title="Phở Gà (Chicken Pho)">Phở Gà (Chicken Pho)</p>
                                            <p className="news-pa">
                                                The broth is the thing here: Simmering wings and drumsticks draws out the very
                                                essence of chicken, while toasted spices and charred onions, jalapeño and ginger
                                                bring bittersweetness and heat.
                                            </p>
                                            <p className="news-date">October 11, 2023</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 fix-padding-col">
                            <div className="news-item-smaller">
                                <a target="_blank" href="https://cheftu.com/recipelibrary/nuocmamgung">
                                    <div className="news-item-smaller-bg">
                                        <Image src="https://images.squarespace-cdn.com/content/v1/56cf7cfb0442626af6cd8f70/1625072391862-6Y4SZFBW54DZMS4KOPI9/IMG_1575.jpg?format=2500w" alt='' className='position-relative' fill
                                        />
                                    </div>
                                    <div className="news-item-content d-flex">
                                        <div className="news-item-content-text">
                                            <p className="news-header"> Nước Mắm Gừng (Ginger Fish Sauce)</p>
                                            <p className="news-pa">
                                                Nước chấm is a common name for a variety of Vietnamese "dipping sauces" that is
                                                served as a staple condiment on Vietnamese dining tables. Flavor profile ranges
                                                from sweet, sour, salty, savory, and/or spicy sauce. Nước Mắm Gừng is a
                                                derivative of Nước chấm with the addiition of ginger.
                                            </p>
                                            <p className="news-date">June 30, 2021</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 fix-padding-col">
                            <div className="news-item-smaller">
                                <a target="_blank" href="https://www.makesauerkraut.com/kimchi-series-fish-sauce/">
                                    <div className="news-item-smaller-bg">
                                        <Image src="https://www.makesauerkraut.com/wp-content/uploads/2019/01/kimchi-series-fish-sauce.jpg" alt='' className='position-relative' fill
                                        />
                                    </div>
                                    <div className="news-item-content d-flex">
                                        <div className="news-item-content-text">
                                            <p className="news-header">Kimchi Series: Fish Sauce</p>
                                            <p className="news-pa">
                                                Kimchi is the common name for any vegetable fermented in traditional Korean
                                                style of lactic-acid fermentation, the most common vegetable combination being
                                                napa cabbage with daikon radish, and green onions seasoned with Korean red
                                                pepper powder, fish sauce, salted shrimp, ginger and garlic.
                                            </p>
                                            <p className="news-date">January 24, 2019</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 fix-padding-col">
                            <div className="news-item-smaller">
                                <a target="_blank" href="https://spicetribe.com/blogs/recipes/bun-nem-nuong-vietnamese-sausage-and-rice-noodle">
                                    <div className="news-item-smaller-bg">
                                        <Image src="https://spicetribe.com/cdn/shop/articles/20221104222541-ej39kij_360x.jpg?v=1679358983" alt="Photo of Bún Nem Nướng (Vietnamese Sausage And Rice Noodle)" className='position-relative' fill
                                        />
                                    </div>
                                    <div className="news-item-content d-flex">
                                        <div className="news-item-content-text">
                                            <p className="news-header" title="Bún Nem Nướng (Vietnamese Sausage And Rice Noodle)">Bún Nem Nướng
                                                (Vietnamese Sausage And Rice Noodle)</p>
                                            <p className="news-pa">
                                                Nem nướng, is Vietnamese pork sausage. It’s (often) formed into a meatball or
                                                patty. And often conformed around a sugar cane stick to be grilled. The cardinal
                                                rules making nem nướng are don’t overmix; don’t undermix; make sure the ground
                                                meat is really cold.
                                            </p>
                                            <p className="news-date">January 24, 2019</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 fix-padding-col">
                            <div className="news-item-smaller">
                                <a target="_blank" href="https://www.seasonalcookbook.com/vietnamese-fish-sauce-for-dipping">
                                    <div className="news-item-smaller-bg">
                                        <Image src="https://www.seasonalcookbook.com/wp-content/uploads/2022/07/Vietnamese-Fish-Sauce-in-Bowl.jpg" alt="Vietnamese Fish Sauce for Dipping" className='position-relative' fill
                                        />
                                    </div>
                                    <div className="news-item-content d-flex">
                                        <div className="news-item-content-text">
                                            <p className="news-header" title="Bún Nem Nướng (Vietnamese Sausage And Rice Noodle)">Vietnamese Fish
                                                Sauce for Dipping</p>
                                            <p className="news-pa">
                                                I just love a good dipping sauce for everything from wings to fresh spring
                                                rolls. As a super-fan of Asian cuisine and buoyed by a false sense of
                                                self-confidence after witnessing the popularity of my Vegan Somen Salad Recipe,
                                            </p>
                                            <p className="news-date">July 7, 2022</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row col-12 justify-content-center">
                        <button id="expand-item" className="btn_header-1" onClick={() => expandItem()}>
                            Xem thêm
                        </button>
                        <button id="collap-item" className="btn_header-1" onClick={() => collapseItem()}>
                            Thu gọn
                        </button>
                    </div>
                </div>
                <div className="orther-new mt-5">
                    <div className="container">
                        <div className="main_title py-3 ">
                            <h3 className="color-2">INSTAGRAM</h3>
                        </div>
                        <div className="instagram_head_content col-12 row">
                            <div className="insta-logo col-12 col-sm-4">
                                <div className="insta-logo-border">
                                    <Image src="/assets/image/icon_img/instagram_avatar.jpg" alt="" className='position-relative' fill />
                                </div>
                            </div>
                            <div className="insta-infor col-12 col-sm-8">
                                <div className="user_name">
                                    <span>sonfishsauce</span>
                                    <a target="_blank" href="https://www.instagram.com/sonfishsauce/">
                                        <button type="button" className="btn btn-primary">
                                            View
                                        </button>
                                    </a>
                                </div>
                                <p className="follow d-flex">
                                    <span>888 &nbsp;posts</span>
                                    <span>4,562 &nbsp;followers</span>
                                    <span>1 &nbsp;following</span>
                                </p>
                                <p>The Real Deal</p>
                                <p className="prize" dir="auto" style={{ fontSize: 14, color: 'black' }}>🥇Gold Can Tho 1996<br />🏆Gold
                                    Vung Tau 2002<br />🏅Gold Hanoi 2004<br />🌎 North America Premium Fish Sauce
                                    2020<br />🎖Europe Best Traditional Fish Sauce 2021</p>
                            </div>
                        </div>
                        <div className="instagram_main_content col-12 row ">
                            <div className="col-md-4 post_wrap ">
                                <div className="post_item">
                                    <a target="_blank" href="https://www.instagram.com/p/CuUppGQR8eC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <div className="post_item_content">
                                            <Image src="/assets/image/insgram-post/post2.jpg" alt="" className='position-relative' fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 post_wrap ">
                                <a target="_blank" href="https://www.instagram.com/reel/CyEeH8Hvzl-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                    <div className="post_item">
                                        <div className="post_item_content">
                                            <Image src="/assets/image/insgram-post/lobster.jpg" alt="" className='position-relative' fill />
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 post_wrap ">
                                <div className="post_item">
                                    <a target="_blank" href="https://www.instagram.com/p/CxPaWT4u2zD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <div className="post_item_content">
                                            <Image src="/assets/image/insgram-post/376247319_18390024877039502_572902003391569228_n.jpg" alt="" className='position-relative' fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 post_wrap ">
                                <div className="post_item">
                                    <a target="_blank" href="https://www.instagram.com/p/CvlZozRp8wi/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <div className="post_item_content">
                                            <Image src="/assets/image/insgram-post/363351609_18382145791039502_8438762505152315124_n.jpg" alt="" className='position-relative' fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 post_wrap ">
                                <div className="post_item">
                                    <a target="_blank" href="https://www.instagram.com/p/CybVURcBImv/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <div className="post_item_content">
                                            <Image src="/assets/image/insgram-post/393320326_18395628574039502_6540053422781056744_n.jpg" alt='' className='position-relative' fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 post_wrap">
                                <div className="post_item">
                                    <a target="_blank" href="https://www.instagram.com/p/Ct9eoxSxUUQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <div className="post_item_content">
                                            <Image src="/assets/image/insgram-post/356065191_3457956614520677_5294831407093956875_n.jpg" alt='' className='position-relative' fill />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
