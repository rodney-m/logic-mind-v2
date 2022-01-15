import React from "react";

const PageNotFound = () => {
  return (
    <section class="PageNotFound p-4">
      <div class="container">
        <div class="row">
          <div class="text-container  col ">
            <h1>Looks like you're lost</h1>
            <p>The page you are looking for is not available. <br/> <a href="/">Go Home</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
