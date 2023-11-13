
import Head from 'next/head'

import Image from 'next/image'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useEffect } from 'react'

import contact_bg_1 from "./../../public/assets/image/bg_img/news_bg1.png"
import contact_bg_2 from "./../../public/assets/image/bg_img/news_bg2.png"
import contact_bg_3 from "./../../public/assets/image/bg_img/news_bg3.png"
import Script from 'next/script';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';

export default function News() {
    // useEffect(() => {

    //     const script = document.createElement('script');
    //     script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    //     script.async = true;
    //     script.onload = () => {
    //         // Load your-script.js after jQuery has loaded
    //         const yourScript = document.createElement('script');
    //         yourScript.src = './assets/js/index.js';
    //         document.body.appendChild(yourScript);
    //     };
    //     document.body.appendChild(script);
    // }, []); // The empty dependency array ensures the effect runs only once on mount

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
                                        <img src="https://static01.nyt.com/images/2023/03/22/multimedia/16korex1-pho-ltgp/16korex1-pho-ltgp-master768.jpg" alt=''
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
                                        <img src="https://images.squarespace-cdn.com/content/v1/56cf7cfb0442626af6cd8f70/1625072391862-6Y4SZFBW54DZMS4KOPI9/IMG_1575.jpg?format=2500w" alt=''
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
                                        <img src="https://www.makesauerkraut.com/wp-content/uploads/2019/01/kimchi-series-fish-sauce.jpg" alt=''
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
                                        <img src="https://spicetribe.com/cdn/shop/articles/20221104222541-ej39kij_360x.jpg?v=1679358983" alt="Photo of Bún Nem Nướng (Vietnamese Sausage And Rice Noodle)"
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
                                        <img src="https://www.seasonalcookbook.com/wp-content/uploads/2022/07/Vietnamese-Fish-Sauce-in-Bowl.jpg" alt="Vietnamese Fish Sauce for Dipping"
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
                        <button id="expand-item" className="btn_header-1">
                            Xem thêm
                        </button>
                    </div>
                </div>
                <div className="orther-new mt-5">
                    <div className="main_title py-3">
                        <h3 className="color-2">INSTAGRAM</h3>
                    </div>
                    <div className="instagram_main_content col-12 row">
                        <div className="col-lg-4 post_wrap mb-5 ">
                            <div className="post_item">
                                <div className="post_item_head">
                                    <img src="https://www.sonfoodsinc.com/wp-content/uploads/2022/08/cropped-favicon-32x32.png" alt />
                                    <div className="post_name">
                                        <p className="name">Son Fishsauce
                                            <span>
                                                <img src="./assets/image/icon_img/Tick.png" alt="instagram SonFood" />
                                            </span>
                                        </p>
                                        <p className="address">Phu Quoc</p>
                                    </div>
                                    <a href="https://www.instagram.com/sonfishsauce/" className="ml-auto insta-profile">
                                        <button>View profile</button>
                                    </a>
                                </div>
                                <div className="post_item_content">
                                    <a target="_blank" href="https://www.instagram.com/p/CuUppGQR8eC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <img src="./assets/image/instagram_post/post2.jpg" alt />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 post_wrap mb-5">
                            <div className="post_item">
                                <div className="post_item_head">
                                    <img src="https://www.sonfoodsinc.com/wp-content/uploads/2022/08/cropped-favicon-32x32.png" alt />
                                    <div className="post_name">
                                        <p className="name">Son Fishsauce
                                            <span>
                                                <img src="./assets/image/icon_img/Tick.png" alt="instagram SonFood" />
                                            </span>
                                        </p>
                                        <p className="address">Phu Quoc</p>
                                    </div>
                                    <a href="https://www.instagram.com/sonfishsauce/" className="ml-auto insta-profile">
                                        <button>View profile</button>
                                    </a>
                                </div>
                                <div className="post_item_content">
                                    <a target="_blank" href="https://www.instagram.com/p/Ct9eoxSxUUQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <img src="./assets/image/instagram_post/post3.jpg" alt />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 post_wrap mb-5 ">
                            <div className="post_item">
                                <div className="post_item_head">
                                    <img src="https://www.sonfoodsinc.com/wp-content/uploads/2022/08/cropped-favicon-32x32.png" alt />
                                    <div className="post_name">
                                        <p className="name">Son Fishsauce
                                            <span>
                                                <img src="./assets/image/icon_img/Tick.png" alt="instagram SonFood" />
                                            </span>
                                        </p>
                                        <p className="address">Phu Quoc</p>
                                    </div>
                                    <a href="https://www.instagram.com/sonfishsauce/" className="ml-auto insta-profile">
                                        <button>View profile</button>
                                    </a>
                                </div>
                                <div className="post_item_content">
                                    <a target="_blank" href="https://www.instagram.com/reel/CyEeH8Hvzl-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">
                                        <img src="./assets/image/instagram_post/post1.jpg" alt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <script id="jquery1" type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js" />
            <script id="popper" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous" />
            <script id="bs4" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous" />
            <script id="main_js" type="text/javascript" src="./assets/js/index.js" />
        </>
    )
}
