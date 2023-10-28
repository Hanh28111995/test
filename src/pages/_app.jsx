"use client";

import '../../public/assets/css/style.min.css'
import '../../public/assets/css/bootstrap.min.css'
import Script from 'next/script'
import Layout from '@/components/Layout';


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}