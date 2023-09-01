"use client";
// import '@/styles/globals.css'
import '../../public/assets/css/style.min.css'
import '../../public/assets/css/bootstrap.min.css'
// import '../../public/assets/js/main'
// import '../../public/assets/js/plugins/plugins.js'
// import '../../public/assets/js/plugins/plugin-custom.js'
// import '../../public/assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
