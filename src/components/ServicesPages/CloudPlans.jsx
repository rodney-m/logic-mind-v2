import React from "react";
import CloudPlansBusiness from "./CloudPlansBusiness";
import CloudPlansEnterprise from "./CloudPlansEnterprise";

const CloudPlans = () => {
  return (
    <div className="CloudPlans">
      <div className="container">
        <h2 className="text-center p-4">How can we help you?</h2>
        <div className="plans">
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
                Business Plans
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
                Enterprise Plans
              </button>
              
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              
                <CloudPlansBusiness />

            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <CloudPlansEnterprise />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudPlans;
