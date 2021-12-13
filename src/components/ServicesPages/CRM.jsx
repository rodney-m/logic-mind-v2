import React from 'react'
import Img from '../../assets/Helpdesk.png'

const CRM = () => {
    return (
        <div className="container">
      <h1 className="text-center p-2" style={{ color: "var(--orangeColor)" }}>
      Contact Centre and CRM
      </h1>
      <div className="Offer reverse row ">
        {" "}
        {/* borrowed from offers section -- reusing code  */}
        <div className="text col-md-6 py-3 my-5">
          <p className="description lead">
          Organizations can now manage, synchronize, and coordinate service interactions across a broad range of communications channels including the Web, email, telephone, fax, text-based chat, and voice over IP (VOIP).
            <br/>
            Logikmind, in partnership with Alliance, provide a wide range of unified communications solutions for
          </p>
          <ul>
              <li>Telebanking</li>
              <li>CRM</li>
              <li>Helpdesk</li>
              <li>Contact Centre</li>
              <li>Voice Logging</li>
          </ul>
        </div>
        <div className="image col-md-6 py-3 my-5">
          <div className="img-container">
            <img className="shadow-sm" src={Img} alt="managed services" />
          </div>
        </div>
      </div>
    </div>
    )
}

export default CRM
