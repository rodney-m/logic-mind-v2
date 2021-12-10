import React from 'react'
import Offer from './offer'
import img1 from '../../assets/offer-managed-service.jpg'
import img2 from '../../assets/infrastructure-service.jpg'
import img3 from '../../assets/cloud-solutions-service.jpg'

const OffersSection = () => {
    const offersList =[
        {
            title: 'Managed Services',
            description: `We allow you to concentrate on your core business while we ensure that your IT systems are up running. Our managed IT services includes monitoring, maintenance and support of both hardware and software.`,
            link: '',
            image: img1,
            textLeft : true
        },
        {
            title: 'Infrastructure Solutions',
            description: `We provide infrastructure engineering and installation for servers and storage, security, cloud and business continuity solutions. Our clients rely on Logikmind as a single source for all their design-build network installation and equipment rollout projects.`,
            link: '',
            image: img2,
            textLeft: false
        },
        {
            title: 'Cloud Solutions',
            description: `We assist organizations of all sizes to accelerate IT and drive business transformation by utilizing world-class private and public cloud solutions, including Office 365, Azure and AWS.`,
            link: '',
            image: img3,
            textLeft: true
        },
    ]
    return (
        <div className="OffersSection">
            <h1 className="text-center">What We Offer</h1>
            <div className="container">
                {
                    offersList.map((item, index) => {
                        return(
                            <Offer offerItem={offersList[index]} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OffersSection
