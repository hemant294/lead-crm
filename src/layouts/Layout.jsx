import React from 'react'
import Navbar from './Navbar'
import LinkdinCrm from '../pages/LinkdinCrm'
import Marque from '../pages/Marque'
import ProspectorFace from '../pages/ProspectorFace'
import Works from '../pages/Works'
import Testimonials from '../pages/Testimonials'
import LinkedinSales from '../pages/LinkedinSales'
import UsingLeadCrm from '../pages/UsingLeadCrm'
import Footer from './Footer'
import SupportedCrm from '../pages/SupportedCrm'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <LinkdinCrm />
        <Marque />
        <ProspectorFace />
        <Works />
        <Testimonials />
        <LinkedinSales />
        <SupportedCrm />
        <div className='py-2 md:py-26'>
        <UsingLeadCrm />
        </div>
        <Footer />
    </div>
  )
}

export default Layout