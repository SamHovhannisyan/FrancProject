import React from "react";
import "./home.css";
import { HomeSlider } from "../../components";

const Home = () => {
  return (
    <>
      <section>
        <div className="container mt100">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="leftSlider">
                <h1>
                  Reliable Web Hosting
                  <span> Platform For Your Website</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="rightSlider">
                <div className="rightSliderTopBox">
                  <div className="rsTopBox">
                    <h3>Nov 1</h3>
                  </div>
                  <div className="rsTopBoxText">
                    <p>Lorem Ipsum </p>
                    <p>Aram Piloyan </p>
                  </div>
                </div>
                <img src="/assets/image.png" alt="" />
                <div className="rightSliderBottomBox">
                  <div className="rsBottomBox">
                    <h3>Nov 2</h3>
                  </div>
                  <div className="rsBottomBoxText">
                    <p>Lorem Ipsum </p>
                    <p>Poxos Piloyan </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <HomeSlider />
      </section>

      <section>
        <div className="container">
          <div className="topService">
            <div className="serviceHeader">
              <h2>Our Top Services</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="row bigService">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <a href="">
                  <div className="servInfo">
                    <h4>Electricity</h4>
                    <p>
                      Intervention urgence, Reparation de chaudiere de tous les
                      types
                    </p>
                    <img src="./assets/serv1.png" alt="" />
                  </div>
                </a>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <a href="">
                  <div className="servInfo">
                    <h4>Boiler</h4>
                    <p>
                      Intervention urgence, Reparation de chaudiere de tous les
                      types
                    </p>
                    <img src="./assets/serv2.png" alt="" />
                  </div>
                </a>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <a href="">
                  <div className="servInfo">
                    <h4>Plumbing</h4>
                    <p>
                      Intervention urgence, Reparation de chaudiere de tous les
                      types
                    </p>
                    <img src="./assets/serv3.png" alt="" />
                  </div>
                </a>
              </div>

              <button>See More</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row homeContact">
            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="formBox">
                <h2>Contact Us</h2>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Text ..."
                  >
                    {" "}
                  </textarea>
                </form>
                <button>Send Massage</button>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="formImg">
                <img src="./assets/formimg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
