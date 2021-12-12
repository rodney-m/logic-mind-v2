import React from 'react'
import { FiClock } from "react-icons/fi";
import { MdOutlineEngineering, MdHealthAndSafety } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { BsFillLightningFill } from "react-icons/bs";

const ManagedHero = () => {
    return (
        <div className='ManagedHero p-4'>
            <h1 className='text-center'>MANAGED ICT SERVICES</h1>
            <div className="container">
                <div className="services-container g-4">
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><FiClock size={35} /></div>
                        <p className='m-2'> 24 hour support manned service-desk</p>
                    </div>
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><MdOutlineEngineering size={35} /></div>
                        <p className='m-2'> Friendly and competent engineers with sector specific competencies</p>
                    </div>
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><MdHealthAndSafety size={35} /></div>
                        <p className='m-2'> Real-time monitoring of all systems via Life-Signs</p>
                    </div>
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><SiAdguard size={35} /></div>
                        <p className='m-2'> Uptime guarantees for your infrastructure</p>
                    </div>
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><BsFillLightningFill size={35} /></div>
                        <p className='m-2'> Rapid onsite response</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagedHero
