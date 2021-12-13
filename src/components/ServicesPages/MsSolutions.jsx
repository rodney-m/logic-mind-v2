import React from "react";
import Img from '../../assets/Microsoft_Genuine_Logo.png'

const MsSolutions = () => {
  return (
    <div className="container">
      <h1 className="text-center p-2" style={{ color: "var(--orangeColor)" }}>
        Microsoft Solutions and Licensing
      </h1>
      <div className="Offer row ">
        {" "}
        {/* borrowed from offers section -- reusing code  */}
        <div className="text col-md-6 py-3 my-5">
          <p className="description lead">
          Our Microsoft Certified Engineers assist organizations to modernize their data centres and streamline operations.
          </p>
          <ul>
              <li>Microsoft Software Licensing</li>
              <li>Hyper-V and Private Cloud Solutions</li>
              <li>Microsoft Exchange Migration and Support</li>
              <li>Windows Server Migration and Support</li>
              <li>SharePoint Server</li>
              <li>Microsoft System Centre Suite</li>
              <li>Directory Services</li>
              <li>Skype for Business</li>
              <li>Bit locker Drive Encryption</li>
          </ul>
        </div>
        <div className="image col-md-6 py-3 my-5">
          <div className="img-container">
            <img className="shadow-sm" src={Img} alt="managed services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsSolutions;
