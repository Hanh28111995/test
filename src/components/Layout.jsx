import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head';

export default function Layout({ children }) {
    useEffect(() => {
        import('../../public/assets/js/plugins/plugin-custom');
        import('../../public/assets/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js');
      }, [])
    return (
        <div className='content'>
            < Head >
                <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
                <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
                <link rel="stylesheet" href="assets/css/style.min.css" />                
                <script type="text/javascript" src='../assets/js/plugins/plugins.js' async></script>
                <script type="text/javascript" src='../assets/js/main.js' async ></script>
            </Head >
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
