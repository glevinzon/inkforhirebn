import React from "react";

const HeaderMobile = () => {
  return (
    <div>
      <div className="offcanvas-menu">
        <span className="menu-close">
          <i className="fas fa-times"></i>
        </span>
        <form
          role="search"
          method="get"
          id="searchform"
          className="searchform"
          action="http://wordpress.zcube.in/xconsulta/"
        >
          <input
            type="text"
            name="s"
            id="search"
            value=""
            placeholder="Search"
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div id="cssmenu3" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-2" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="index.html">Home</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="about.html">About Us</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="services.html">Services</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="pricing.html">Pricing </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="team.html">Team </a>
            </li>

            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="projects.html">Gallery Study</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="blog.html">Blog</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div id="cssmenu2" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-1" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="#home">
                <span>+8 12 3456897</span>
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="#howitwork">
                <span>info@example.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="offcanvas-overly"></div>
    </div>
  );
};

export default HeaderMobile;
