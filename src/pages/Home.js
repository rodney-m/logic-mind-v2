import React from 'react'
import Footer from '../components/Footer'
import OffersSection from '../components/OffersSection'
import ServicesSection from '../components/ServicesSection'
import Showcase from '../components/Showcase'
 


const Home = () => {
    return(
        <>
            <Showcase />
            <ServicesSection />
            <OffersSection />
            <Footer />
        </>
    )
}



export default Home