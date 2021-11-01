import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="first-cart">
              <h4 style={{fontFamily: "cursive",fontWeight : "600",color:"rgb(139, 139, 139)"}}>ZulzanaTravel</h4>
              <div className="second-part">
                <h5 className="mt-5">Subscribe</h5>
                <input
                  className="input-field footer-email"
                  type="email"
                  placeholder="Email Address"
                />
                <br />
                <p>
                  <span className="m-2 "><i class="fab fa-google"></i></span>
                  <span className="m-2 "><i class="fab fa-facebook-square"></i></span>
                  <span className="m-2 "><i class="fab fa-youtube"></i></span>
                
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 ps-lg-5">
            <h4>Pages</h4>
            <p className="mt-4">Services</p>
            <p>Our Tearms</p>
            <p>Our Info</p>
            <p>Our Tourist</p>
            <p>Contact Us</p>
          </div>

          <div className="col-md-3">
            <div className="third-part">
              <h4>Specialists</h4>
              <p className="mt-4">Sky skyping</p>
              <p>Boating</p>
              <p>Swimming</p>
              <p>Dansing</p>
              <p>Picnics</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h4>Contact Us</h4>
              <small className="mt-5">Office:685 Lane Drive St. California, 33020 </small>
              <br />
              <small className="mt-3">Phone:+010 234 7892 34</small>
              <br />
              <small className="mt-3">Fax: +010 435 5798982</small>
              <br />
              <small className="mt-3" >Mail: info@nordis.com.</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>© 2021 ZulZana By Maruf. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;