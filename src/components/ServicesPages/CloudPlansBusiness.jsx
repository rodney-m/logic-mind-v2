import React from "react";
import { TiTick, TiTimes } from "react-icons/ti";

const CloudPlansBusiness = () => {
  const plans = [
    {
      title: "Business Essentials",
      price: "5.00",
      services: [
        {
          service:
            "Office web apps (Word, Excel, PowerPoint, OneNote, Outlook)",
          available: true,
        },
        {
          service: "1TB of Cloud Storage (with OneDrive)",
          available: true,
        },
        {
          service: "Business Emails (50GB inbox per user)",
          available: true,
        },
        {
          service: "Online conferencing (with Skype for Business)",
          available: true,
        },
        {
          service:
            "Installed Office Suite (on 5 computers, 5 tablets and 5 phones)",
          available: false,
        },
      ],
    },
    {
      title: "Business Premium",
      price: "12.50",
      services: [
        {
          service:
            "Office web apps (Word, Excel, PowerPoint, OneNote, Outlook)",
          available: true,
        },
        {
          service: "1TB of Cloud Storage (with OneDrive)",
          available: true,
        },
        {
          service: "Business Emails (50GB inbox per user)",
          available: true,
        },
        {
          service: "Online conferencing (with Skype for Business)",
          available: true,
        },
        {
          service:
            "Installed Office Suite (on 5 computers, 5 tablets and 5 phones)",
          available: true,
        },
      ],
    },
    {
      title: "Business",
      price: "8.25",
      services: [
        {
          service:
            "Office web apps (Word, Excel, PowerPoint, OneNote, Outlook)",
          available: true,
        },
        {
          service: "1TB of Cloud Storage (with OneDrive)",
          available: false,
        },
        {
          service: "Business Emails (50GB inbox per user)",
          available: false,
        },
        {
          service: "Online conferencing (with Skype for Business)",
          available: false,
        },
        {
          service:
            "Installed Office Suite (on 5 computers, 5 tablets and 5 phones)",
          available: true,
        },
      ],
    },
  ];
  return (
    <div className="CloudPlansBusiness">
      <div className="container px-4 d-flex justify-content-evenly flex-wrap">
        {plans.map((plan) => {
            

            return (
              <div className="box col-md-4 shadow-sm p-2">
                <div className="text-header text-center">
                  <h3>{plan.title}</h3>
                  <h4>annual commitment</h4>
                  <h1 className="price">{plan.price}</h1>
                </div>
                <div className="text-body text-start">
                  <p className="lead">
                    <span className={plan.services[0].available ? "icon available" : "icon"}>{plan.services[0].available ? <TiTick /> : <TiTimes /> }</span> {plan.services[0].service}
                    
                  </p>
                  <p className="lead">
                  <span className={plan.services[1].available ? "icon available" : "icon"}>{plan.services[1].available ? <TiTick /> : <TiTimes /> }</span> {plan.services[1].service}
                  </p>
                  <p className="lead">
                  <span className={plan.services[2].available ? "icon available" : "icon"}>{plan.services[2].available ? <TiTick /> : <TiTimes /> }</span> {plan.services[2].service}
                  </p>
                  <p className="lead">
                  <span className={plan.services[3].available ? "icon available" : "icon"}>{plan.services[3].available ? <TiTick /> : <TiTimes /> }</span> {plan.services[3].service}
                  </p>
                  <p className="lead">
                  <span className={plan.services[4].available ? "icon available" : "icon"}>{plan.services[4].available ? <TiTick /> : <TiTimes /> }</span> {plan.services[4].service}
                  </p>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default CloudPlansBusiness;
