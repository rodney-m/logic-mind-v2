import React from 'react'
import { AiOutlineSync } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineCloud } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const ServicesSection = () => {
    const servicesList = [
        {
            title : "Business Continuity",
            icon : <AiOutlineSync size={40}/>
        },
        {
            title : "Enterprise Security",
            icon : <AiOutlineLock size={40}/>
        },
        {
            title : "Office 365",
            icon : <AiOutlineCloud size={40}/>
        },
        {
            title : "Service Provider",
            icon : <GiNetworkBars size={40}/>
        },
        {
            title : "Support Portal",
            icon : <BiSupport size={40}/>
        },
    ]
    return (
        <div className="ServicesSection p-3">
            <div className="container service-container">
                {servicesList.map(service => {
                    return (
                        <div className="service p-3 m-2 shadow-sm rounded-3">
                            {service.icon}
                            <p>{service.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesSection
