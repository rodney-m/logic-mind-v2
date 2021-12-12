import React from 'react'
import Veeam from '../../assets/Accredited_Service_partner_logo.png'
import MsPartner from '../../assets/LOGO-MS-Partner-300x110.jpg'
import Sophos from '../../assets/Sophos-Platinum-Partner-Logo.jpg'

const SectionThree = () => {
    return (
        <div className='SectionThree container-fluid p-5'>
            <h1 className="text-center m-3">Our Partnerships</h1>
            <div className="partners-logos my-3">
                <div className="logo shadow-sm">
                    <img src={Veeam} alt="Veeam Partner" />
                </div>
                <div className="logo shadow-sm">
                    <img src={MsPartner} alt="Ms Partner" />
                </div>
                <div className="logo shadow-sm">
                    <img src={Sophos} alt="Sophos Partner" />
                </div>
            </div>
        </div>
    )
}

export default SectionThree
