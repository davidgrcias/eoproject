import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logodark from "../assets/images/logodark.png";
import banner from "../assets/images/banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImage1 from "../assets/images/slider/slider-bg-1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faCut,
  faUtensils,
  faHeart,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

// Define Arrow components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  pauseOnFocus: false,
  pauseOnHover: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Content = () => {
  return (
    <div>
      <div id="preloader">
        <div className="preloader">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      {/*
  End Preloader
  ==================================== */}
      {/*
Fixed Navigation
==================================== */}
      <header className="navigation fixed-top">
        <div className="container">
          {/* main nav */}
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            {/* logo */}
            <a className="navbar-brand logo" href="">
              <img
                loading="lazy"
                className="logo-default"
                src={logo}
                width="75"
                alt="logo"
              />
              <img
                loading="lazy"
                className="logo-white"
                src={logodark}
                width="75"
                alt="logo"
              />
            </a>
            {/* /logo */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href=""
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* /main nav */}
        </div>
      </header>
      {/*
End Fixed Navigation
==================================== */}
      <div className="hero-slider">
        <Slider {...settings}>
          <div
            className="slider-item th-fullpage hero-area"
            style={{ backgroundImage: `url(${slideImage1})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1
                    className="animated fadeInUp"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Wedding Organizer <br /> City Park
                  </h1>
                  <p
                    className="animated fadeInUp"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Rencanakan pernikahan impian Anda dengan kami di tahun 2025.
                  </p>
                  <a
                    className="btn btn-main animated fadeInUp"
                    style={{ animationDelay: "0.8s" }}
                    href="service.html"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider-item th-fullpage hero-area"
            style={{ backgroundImage: `url(${slideImage1})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1
                    className="animated fadeInUp"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Wedding Organizer <br /> City Park
                  </h1>
                  <p
                    className="animated fadeInUp"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Rencanakan pernikahan impian Anda dengan kami di tahun 2025.
                  </p>
                  <a
                    className="btn btn-main animated fadeInUp"
                    style={{ animationDelay: "0.8s" }}
                    href="service.html"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/*
Start About Section
==================================== */}
      <section className="service-2 section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* section title */}
              <div className="title text-center">
                <h2>Layanan Kami</h2>
                <p>
                  Temukan rangkaian layanan lengkap kami untuk memastikan hari
                  pernikahan Anda menjadi momen yang tak terlupakan dan
                  istimewa.
                </p>
                <div className="border" />
              </div>
              {/* /section title */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row text-center">
                <div className="col-md-6 col-sm-6">
                  <div className="service-item">
                    <i className="fas fa-tint">
                      <FontAwesomeIcon icon={faTint} />
                    </i>
                    <h4>Melayani Baptisan</h4>
                  </div>
                </div>
                {/* END COL */}
                <div className="col-md-6 col-sm-6">
                  <div className="service-item">
                    <i className="tf-ion-ios-brush-outline">
                      <FontAwesomeIcon icon={faCut} />
                    </i>
                    <h4>Salon & Tata Rias</h4>
                  </div>
                </div>
                {/* END COL */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-item">
                    <i className="tf-ion-ios-restaurant-outline">
                      {" "}
                      <FontAwesomeIcon icon={faUtensils} />
                    </i>
                    <h4>Penyediaan Konsumsi</h4>
                  </div>
                </div>
                {/* END COL */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-item">
                    <i className="tf-ion-ios-no-outline">
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                    <h4>Peneguhan Janji</h4>
                  </div>
                </div>
                {/* END COL */}
                <div className="col-md-4 col-sm-6">
                  <div className="service-item">
                    <i className="tf-ion-ios-no-outline">
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </i>
                    <h4>Desain Website</h4>
                  </div>
                </div>
                {/* END COL */}
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* End section */}
      {/*
Start Call To Action
==================================== */}
      <section className="call-to-action-2 section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                "Sebab itu, apa yang telah dipersatukan Allah, tidak boleh
                diceraikan manusia." (Markus 10:9)
              </h2>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* End section */}
      {/* Start Services Section
==================================== */}
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            {/* section title */}
            <div className="col-xl-6 col-lg-8">
              <div className="title text-center">
                <h2>Kontak Kami</h2>
                <ul className="contact-short-info mt-4">
                  <li className="mb-3">
                    <i className="tf-ion-ios-home" />
                    <span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
                  </li>
                  <li className="mb-3">
                    <i className="tf-ion-android-phone-portrait" />
                    <span>Phone: +880-31-000-000</span>
                  </li>
                  <li className="mb-3">
                    <i className="tf-ion-android-globe" />
                    <span>Fax: +880-31-000-000</span>
                  </li>
                  <li>
                    <i className="tf-ion-android-mail" />
                    <span>Email: hello@meghna.com</span>
                  </li>
                </ul>
                <div className="border" />
              </div>
            </div>
            {/* /section title */}
          </div>
        </div>{" "}
        {/* end container */}
      </section>{" "}
      {/* end section */}
      <footer id="footer" className="bg-one">
        <div className="top-footer">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <h3>about</h3>
                <p>
                  Integer posuere erat a ante venenati dapibus posuere velit
                  aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris
                  sed posuere.
                </p>
              </div>
              {/* End of .col-sm-3 */}
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <ul>
                  <li>
                    <h3>Our Services</h3>
                  </li>
                  <li>
                    <a href="service.html">Ui/Ux Design</a>
                  </li>
                  <li>
                    <a href="service.html">Graphic Design</a>
                  </li>
                  <li>
                    <a href="service.html">Web Design</a>
                  </li>
                  <li>
                    <a href="service.html">Web Development</a>
                  </li>
                </ul>
              </div>
              {/* End of .col-sm-3 */}
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <ul>
                  <li>
                    <h3>Quick Links</h3>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="blog.html">Blogs</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                </ul>
              </div>
              {/* End of .col-sm-3 */}
              <div className="col-lg-3 col-md-6">
                <ul>
                  <li>
                    <h3>Connect with us Socially</h3>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/themefisher/">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/themefisher/">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCx9qVW8VF0LmTi4OF2F8YdA">
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a href="https://www.github.com/themefisher/">Github</a>
                  </li>
                </ul>
              </div>
              {/* End of .col-sm-3 */}
            </div>
          </div>
          {/* end container */}
        </div>
        <div className="footer-bottom">
          <h5>© Copyright 2025. All rights reserved.</h5>
          <h6>
            Design and Developed by&nbsp;
            <a href="https://www.linkedin.com/in/davidgrcias/" target="_blank">
              David
            </a>
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default Content;
