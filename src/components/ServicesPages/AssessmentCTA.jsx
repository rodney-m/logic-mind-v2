import React from "react";
import { Link } from "react-router-dom";

const AssessmentCTA = () => {
  return (
    <div className="AssessmentCTA py-5">
      <div className="container">
        <h3>
          We Can Take Care Of Everything, Or Complement an IT Team
        </h3>
        <p className="lead quote m-3">
          Logikmind’s service packages provide you with the comprehensive IT
          support your business needs for a single monthly cost.
          <br/>
          Our all-inclusive model providing IT infrastructure and unlimited IT support will streamline your technology department and save you money
        </p>

        <Link className="btn" to="/contact">
            Get A Free Assessment 
        </Link>
      </div>
    </div>
  );
};

export default AssessmentCTA;
