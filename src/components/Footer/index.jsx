import React from "react";
import Logo from "../../assets/white-logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer p-5">
      <div className="container row">
        <div className="col-md-3">
          <img className="footer-logo" src={Logo} alt="logo" />
        </div>
        <div className="col-md-3">
          <h3 className="text-center">Zimbabwe</h3>

          <p>
            <FaMapMarkerAlt />
            29 Mazowe Street, 3rd Floor Travel Plaza, Harare
          </p>
          <p>
            <BsPhoneFill /> +263(24)2764050
          </p>
          <p>
            <BsPhoneFill /> +263(24)2764051
          </p>
          <p>
            <RiMailSendFill /> info@logikmind.com
          </p>
        </div>
        <div className="col-md-3">
          <h3 className="text-center">Zambia</h3>

          <p>
            <FaMapMarkerAlt />
            1st Floor Modern Business Park, Plot 27/24 Manchinchi Road, Lusaka
          </p>
          <p>
            <BsPhoneFill /> +260 211 355300
          </p>
          <p>
            <RiMailSendFill /> info@logikmind.com
          </p>
        </div>
        <div className="col-md-3">
          <p className="text-center">
            <HiMail /> Stay upto date with the latest from Logikmind
          </p>

          <form>
            <div class="mb-2">
              <label for="emailInput" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" class="btn footer-btn">
              Subscribe
            </button>
          </form>
          <h6 className="text-center my-3">Follow Us</h6>
          <div className="social d-flex justify-content-center">
                <AiFillFacebook size={25}/>
                <AiFillTwitterSquare size={25}/>
                <AiFillLinkedin size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
