import React from 'react'
import OffersSection from '../components/OffersSection'
import ServicesSection from '../components/ServicesSection'
import Showcase from '../components/Showcase'
 


const Home = () => {
    return(
        <>
            <Showcase />
            <ServicesSection />
            <OffersSection />
        </>
    )
}



export default Home