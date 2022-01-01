import React from "react";

const Contact = () => {
  return (
    <div className="Contact p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Get In Touch</h1>
            <p>Let us know how we can help</p>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control" id="name" placeholder="Full Name" />
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Your email address"
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="company"
                    placeholder="Company"
                  />
                </div>
                <div class="col-12">
                  <label for="subject" class="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div class="col-12">
                <label for="message" class="form-label">
                    Message
                </label>
                <textarea name="message"  rows="4" className="form-control"></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
