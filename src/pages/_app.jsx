
import Layout from '@/components/Layout';
import Head from 'next/head';
import Script from 'next/script';


import '../../public/assets/css/mediabox.css'
import '../../public/assets/lib/slick/slick.css'
import '../../public/assets/lib/slick/slick-theme.css'
import '../../public/assets/css/main.css'

import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script id="jquery1" type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"> </Script>
      <Script id="jquery2" type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"> </Script>

      <Script id="popper" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></Script>
      <Script id="bs4" src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></Script>
      <Script id="slick" type="text/javascript" src="./../../public/assets/lib/slick/slick.min.js" />
      <Script id="video_open" type="text/javascript" src="./../../public/assets/js/mediabox.js" />
      <Script id="main_js" type="text/javascript" src="./../../public/assets/js/index.js" />
    </>
  )
}
