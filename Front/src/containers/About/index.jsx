import React from "react";
import "./about.css";
import { HomeSlider } from "../../components";

const About = () => {
  return (
    <>
      <section className="mt50">
        <div className="container">
          <div className="topService">
            <div className="serviceHeader">
              <h2>About Us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, <br />
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
                <br /> It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
              <div className="marketIcon">
                <img src="/assets/gplay.png" alt="" />
                <img src="/assets/pstore.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt100">
        <div className="container">
            <div className="aboutPhone1">
                <img src="/assets/f.png" alt="" /> 
            </div>
            <div className="aboutPhone2">
                <img src="/assets/f2.png" alt="" /> 
            </div>
          <div className="featureBox">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="featureNum">
                  <h4>24</h4>
                  <p>Different services</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="featureNum">
                  <h4>59</h4>
                  <p>Professional craftsmens</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="featureNum">
                  <h4>200+</h4>
                  <p>Satisfied customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mt50">
        <HomeSlider />
      </section>





    <section className="mt100">
        <div className="container">
            <div className="topService">
                <div className="serviceHeader">
                    <h2>Benefits</h2>
                </div>
            </div>
            
            <div className="row mt50">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="benefitsBox">
                        <img src="../assets/ben1.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="benefitsBox">
                        <img src="../assets/ben2.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="benefitsBox">
                        <img src="../assets/ben3.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="benefitsBox">
                        <img src="../assets/ben4.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default About
