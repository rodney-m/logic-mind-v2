import React from 'react'
import { SiMicrosoftexchange, SiMicrosoftoffice, SiVisualstudio, SiSkype} from "react-icons/si";

const CloudOptions = () => {
    return (
        <div className='CloudOptions p-4'>
            <h1 className='p-3'>Streamline Operations. Migrate to the Cloud</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className="icon p-4 d-flex justify-content-center">
                        <SiVisualstudio size={35}/>
                    </div>
                        <h5>Visual Studio for your business</h5>                        
                    </div>
                    <div className="col-md-3">
                    <div className="icon p-4 d-flex justify-content-center">
                        <SiMicrosoftoffice size={35}/>
                    </div>
                        <h5>Office 365 for your business</h5>                        
                    </div>
                    <div className="col-md-3">
                    <div className="icon p-4 d-flex justify-content-center">
                        <SiMicrosoftexchange size={35}/>
                    </div>
                        <h5>Migrate to Exchange Online</h5>                        
                    </div>
                    <div className="col-md-3">
                    <div className="icon p-4 d-flex justify-content-center">
                        <SiSkype size={35}/>
                    </div>
                        <h5>Get Skype for Business</h5>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CloudOptions
