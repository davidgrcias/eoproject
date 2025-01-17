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
                    <span>
                      &nbsp;GBI City Park, RT.7/RW.14, Cengkareng, Jakarta
                    </span>
                  </li>
                  <li className="mb-3">
                    <i className="tf-ion-android-phone-portrait" />
                    <span>&nbsp;WhatsApp: 0813-1779-6129</span>
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
