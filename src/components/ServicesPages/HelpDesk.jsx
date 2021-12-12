import React from 'react'

const HelpDesk = () => {
    return (
        <div className='HelpDesk'>
            <h1 className='p-3 m-3 text-center'>Remote Support and Helpdesk</h1>
            
            <div className="row content">
                <div className='p-4 col-md-6'>
                    <h3>Remote Support</h3>
                    <p>We monitor your IT universe, providing a single location to review everything.</p>
                </div>
                <div className='p-4 col-md-6'>
                    <h3>Helpdesk</h3>
                    <p>In order to streamline support requests and better serve you, we utilize a support ticket system. Every support request is assigned a unique ticket number which you can use to track the progress and responses online.</p>
                </div>
            </div>
        </div>
    )
}

export default HelpDesk
