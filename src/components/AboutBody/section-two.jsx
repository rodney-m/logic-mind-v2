import React from "react";
import { FaHandshake } from "react-icons/fa";
import { GrUserWorker, GrTechnology } from "react-icons/gr";

const SectionTwo = () => {
  const services = [
    {
      icon: <FaHandshake size={35} />,
      title: "Consulting",
      description: `We understand that you already have your hands full managing your existing infrastructure and users, and that it often makes sense to out-source specific projects to ensure they are completed quickly and correctly. We can complete your project and ensure that the new technology will integrate with your existing systems.`,
    },
    {
      icon: <GrUserWorker size={35} />,
      title: "Outsourcing",
      description: `Logikmind provides a full range of outsourced IT support options. We utilize best-practice support structures including ITIL. We place utmost priority in proactively managing your servers and workstations/laptops.`,
    },
    {
      icon: <GrTechnology size={35} />,
      title: "Technology",
      description: `We provide infrastructure engineering and installation for servers and storage, security, cloud and business continuity solutions. Our clients rely on Logikmind as a single source for all their design-build network installation and equipment rollout projects.`,
    },
  ];

  return (
    <div className="SectionTwo ">
      <div className="container box-container px-4">
          {services.map((item) => {
            return (
              <div className="box text-center d-flex flex-column align-items-center col-md-4 shadow-sm p-2">
                <div className="icon">{item.icon}</div>
                <div className="text">
                  <h3>{item.title}</h3>
                  <p className="lead">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
 
    </div>
  );
};

export default SectionTwo;
