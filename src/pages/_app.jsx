import Layout from '@/components/Layout';
import Script from 'next/script';
import $ from 'jquery';


import '../../public/assets/lib/slick/slick.css'
import '../../public/assets/lib/slick/slick-theme.css'
import '../../public/assets/css/main.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
