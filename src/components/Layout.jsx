import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head';
import Script from 'next/head';


export default function Layout({ children }) {

    return (
        <div className='content' style={{ zIndex: 0, position: 'relative' }}>

            <Navbar />

            {children}

            <Footer />

        </div>
    )
}
