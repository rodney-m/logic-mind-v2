import React from 'react'
import { BiSupport } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { BsFillChatTextFill } from "react-icons/bs";

const Outsourcing = () => {
    return (
        <div className='Outsourcing py-5'>
            <div className="container">
                <h1 className='text-center py-3'>Complete IT Outsourcing</h1>
                <div className="services-container g-4">
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><BsFillChatTextFill size={35} /></div>
                        <div className='text'>
                            <h4>Pro-active Support</h4>
                            <p className='m-2'> We place utmost priority in proactively managing your servers and workstations/ laptops.</p>
                        </div>
                    </div>
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><BiSupport size={35} /></div>
                        <div className="text">
                            <h4>Reactive Support</h4>
                            <p className='m-2'>We have dedicated teams that specialize in remote and onsite re-active support requests.</p>
                        </div>
                    </div>
                    <div className="service-offer d-flex align-items-center shadow-sm p-4 ">
                        <div className="icon p-2 smadow-sm"><GoSettings size={35} /></div>
                        <div className="text">
                        <h4>Account management</h4>
                        <p className='m-2'> Your virtual IT manager and key-account contact that provides personalized service and regular support around key areas.</p>
                        </div>
                    </div>
                    
                </div>
        </div>
        </div>
    )
}

export default Outsourcing
