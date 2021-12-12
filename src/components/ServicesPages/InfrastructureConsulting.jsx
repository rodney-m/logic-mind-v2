import React from "react";

const InfrastructureConsulting = () => {
  return (
    <div className="InfrastructureConsulting p-3 ">
        <h1 className="text-center mb-5">IT Infrastructure Consulting</h1>
      <div className="container">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Support Contract
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Hosted Services
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Enjoy Hustle-free IT Services
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active p-4"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <p className="">
            Whether IT is an official part of your job title or not, our all-inclusive model providing IT infrastructure and unlimited IT support will
            </p>
            <ul>
                <li>Streamline your technology department</li>
                <li>Save you money</li>
                <li>Help you focus on core business and leave IT to us</li>
                <li>Reduce project implementation time by relying on the experts</li>
            </ul>
          </div>
          <div
            class="tab-pane fade p-4"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <p className="">
            Thinking of a secure, scalable IT infrastructure?
            </p>
            <ul>
                <li>See how our cloud services can help you</li>
                <li>Reduce capex by not buying and server infrastructure</li>
                <li>Reduce opex by eliminating maintenance and HR costs</li>
                <li>Enjoy hustle free IT Services</li>
            </ul>
          </div>
          <div
            class="tab-pane fade p-4"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <p className="">
            In this era, reducing costs will enable a business to stay afloat
            </p>
            <ul>
                <li>Our range of voice services will</li>
                <li>Reduce your bill by up to 40%</li>
                <li>Drive business</li>
                <li>performance through efficient collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureConsulting;
