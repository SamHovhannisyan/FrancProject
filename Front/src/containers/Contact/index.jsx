import React from "react";
import "./contact.css";



const Contact = () => {
    return(
    <>
    <section className="mt100">
        <div className="container">
            <div className="HeaderBox">
                <h2>Contact Us</h2>
            </div>
            <div className="row mt50">

                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="contBox">
                        <img src="./assets/phone.png" alt="" />
                        <h4>+01 23 45 67 89</h4>
                        <h4>+01 23 45 67 89</h4>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="contBox">
                        <img src="./assets/email.png" alt="" />
                        <h4>Loremipsum@gmail.com</h4>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="contBox">
                    <img src="./assets/pin.png" alt="" />
                        <h4>Lorem ipsum 3/5</h4>
                    </div>
                </div>

            </div>
        </div>
    </section>



    <section>
        <div className="container mt100">
            <div className="row homeContact">
               <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="formBox formBoxCont">
                     <h2>We will help you with <br/> any question</h2>
                     <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Text ..."> </textarea>
                     </form>
                     <button>
                        Send Massage
                     </button>
                  </div>
               </div>

               <div className="col-sm-12 col-md-6 col-lg-6">
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
    </>
        
    )
}





export default Contact