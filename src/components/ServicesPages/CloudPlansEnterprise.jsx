import React from "react";
import { TiTick, TiTimes } from "react-icons/ti";

const CloudPlansEnterprise = () => {
  const plans = [
    {
      title: "Enterprise E1",
      price: "8.00",
      services: [
        {
          service:
            "Installed Office Suite (with PowerBI on 5 computers, 5 tablets and 5 phones and terminal servers)",
          available: false,
        },
        {
          service: "Office web apps (Word, Excel, PowerPoint, OneNote, Outlook)",
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
          service:
            "Online conferencing (with Skype for Business)",
          available: true,
        },
        {
            service:
              "Unlimited e-mail (archive with restoring deleted items)",
            available: false,
        },
        {
            service:
              "Advanced threat analysis (and protection)",
            available: false,
        },
      ],
    },
    {
        title: "Pro Plus",
        price: "12.00",
        services: [
          {
            service:
              "Installed Office Suite (with PowerBI on 5 computers, 5 tablets and 5 phones and terminal servers)",
            available: true,
          },
          {
            service: "Office web apps (Word, Excel, PowerPoint, OneNote, Outlook)",
            available: true,
          },
          {
            service: "1TB of Cloud Storage (with OneDrive)",
            available: true,
          },
          {
            service: "Business Emails (50GB inbox per user)",
            available: false,
          },
          {
            service:
              "Online conferencing (with Skype for Business)",
            available: false,
          },
          {
              service:
                "Unlimited e-mail (archive with restoring deleted items)",
              available: false,
          },
          {
              service:
                "Advanced threat analysis (and protection)",
              available: false,
          },
        ],
    },
    {
        title: "Enterprise E3",
        price: "20.00",
        services: [
          {
            service:
              "Installed Office Suite (with PowerBI on 5 computers, 5 tablets and 5 phones and terminal servers)",
            available: true,
          },
          {
            service: "Office web apps (Word, Excel, PowerPoint, OneNote, Outlook)",
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
            service:
              "Online conferencing (with Skype for Business)",
            available: true,
          },
          {
              service:
                "Unlimited e-mail (archive with restoring deleted items)",
              available: true,
          },
          {
              service:
                "Advanced threat analysis (and protection)",
              available: false,
          },
        ],
    },
    {
        title: "Enterprise E5",
        price: "35.00",
        services: [
          {
            service:
              "Installed Office Suite (with PowerBI on 5 computers, 5 tablets and 5 phones and terminal servers)",
            available: true,
          },
          {
            service: "Office web apps (Word, Excel, PowerPoint, OneNote, Outlook)",
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
            service:
              "Online conferencing (with Skype for Business)",
            available: true,
          },
          {
              service:
                "Unlimited e-mail (archive with restoring deleted items)",
              available: true,
          },
          {
              service:
                "Advanced threat analysis (and protection)",
              available: true,
          },
        ],
    },
    
    
  ];
  return (
    <div className="CloudPlansEnterprise">
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

export default CloudPlansEnterprise;
