"use client";

import '../../public/assets/css/main.css'
import '../../public/assets/css/mediabox.css'
import '../../public/assets/lib/slick/slick.css'
import '../../public/assets/lib/slick/slick-theme.css'


{/* <script type="text/javascript" src="./asset/lib/slick/slick.min.js"></script>
      <script src="./asset/js/mediabox.js"></script>       */}

import Layout from '@/components/Layout';
import Head from 'next/head';
import Script from 'next/script';



export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- icon --> */}
        <link rel="icon" href="https://www.sonfoodsinc.com/wp-content/uploads/2022/08/cropped-favicon-32x32.png"
          sizes="32x32" />
        {/* <!-- font gg --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@200;300;400;500;600;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap"
          rel="stylesheet" />

        {/* <!-- font ansome --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />

        {/* <!-- animation --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        {/* <!-- bootstrap --> */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

        <Script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"> </Script>
        <Script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"> </Script>
        <Script type="text/javascript" src="../../public/assets/lib/slick/slick.min.js"></Script>
        <Script type="text/javascript" src="../../public/assets/js/mediabox.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"></Script>
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"></Script>

      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
