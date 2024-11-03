import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";


import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Embrace your Student Lifestyle with LendScape
                </h2>

                <p className="section__description">
                Welcome to LEND-SCAPE, your community-driven platform for sharing and borrowing resources!
                We understand that as a student or young professional, you often need access to various items-textbooks, electronics, sporting gear, event supplies without the hefty price tag of buying them outright. That's where LEND-SCAPE steps in
                Our mission is to make essential resources more accessible, affordable, and sustainable.

                <p className="section__description">
                By creating a peer-to-peer rental marketplace, we empower you to borrow what you need and lend what you have
                reducing waste and unnecessary spending LEND-SCAPE is all about fostering a culture of sharing, where you can connect with others in your community, save money, and reduce your environmental footprint Whether you're gearing up for an event, need a camera for a weekend project, or looking to borrow the latest edition of a textbook, LEND-SCAPE makes it simple. Just browse listings, make a request, and pick
                up the item from a fellow user. On the flip side, if you have items you don't use frequently, you can list them on our platform and earn extra income by renting them out
                </p>
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+91 9131974270</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
