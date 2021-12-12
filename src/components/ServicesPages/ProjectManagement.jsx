import React from "react";
import Img from "../../assets/project-management.jpg";

const ProjectManagement = () => {
  return (
    <div className="container">
        <h1 className="text-center p-2" style={{color: 'var(--orangeColor)'}}>Project Management</h1>
      <div className="Offer row ">
        {" "}
        {/* borrowed from offers section -- reusing code  */}
        <div className="text col-md-6 py-3 my-5">
          <h3 className="heading">Get Our Team on Your Team</h3>
          <p className="description lead">
            We provide end-to-end PMI-based management consulting services that
            form the basic buiding blocks required for implementing Enterprise
            IT projects. We understand that you already have your hands full
            managing your existing infrastructure and users, and that it often
            makes sense to outsource specific projects to ensure they are
            completed quickly and correctly.
            <br />
            Logikmind can complete ICT infrastructure projects and ensure that
            the new technology will integrate with your existing system
          </p>
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

export default ProjectManagement;
