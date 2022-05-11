import React, {useEffect, useState} from "react";
import {icons} from "react-icons/lib";
import "./HomeSlider.css";
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/all";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
    const [carouselDeg, setcarouselDeg] = useState(17);
    const [itemDeg, setitemDeg] = useState(-17);
    const [centerItem, setcenterItem] = useState(0);
    const [lastItem, setlastItem] = useState(4);
    const [prevItem, setprevItem] = useState(4);
    const [nextItem, setnextItem] = useState(1);
    const carousel = [
        {
            name: "1",
            id: 0,
            position: 1,
            icons: "assets/ben2.png",
            h4: "Nous sommes de services d'urgence",
            text: "“Intervention Urgence 24/7 heures” garantit de toute évidence des interventions urgences et sûres, en offrant des services (plombiers, électriciens ou serruriers) très qualifiés pour les particuliers, les bureaux et les commerces. ",
            button: "See More",
        },
        {
            name: "2",
            id: 1,
            position: 2,
            icons: "assets/ben3.png",
            h4: "Nous sommes de services d'urgence",
            text: "“Intervention Urgence 24/7 heures” garantit de toute évidence des interventions urgences et sûres, en offrant des services (plombiers, électriciens ou serruriers) très qualifiés pour les particuliers, les bureaux et les commerces. ",
            button: "See More",
        },
        {
            name: "3",
            id: 2,
            position: 3,
            icons: "assets/ben4.png",
            h4: "Nous sommes de services d'urgence",
            text: "“Intervention Urgence 24/7 heures” garantit de toute évidence des interventions urgences et sûres, en offrant des services (plombiers, électriciens ou serruriers) très qualifiés pour les particuliers, les bureaux et les commerces. ",
            button: "See More",
        },
        {
            name: "4",
            id: 3,
            position: 4,
            icons: "assets/serv3.png",
            h4: "Nous sommes de services d'urgence",
            text: "“Intervention Urgence 24/7 heures” garantit de toute évidence des interventions urgences et sûres, en offrant des services (plombiers, électriciens ou serruriers) très qualifiés pour les particuliers, les bureaux et les commerces. ",
            button: "See More",
        },
        {
            name: "5",
            id: 4,
            position: 5,
            icons: "assets/serv2.png",
            h4: "Nous sommes de services d'urgence",
            text: "“Intervention Urgence 24/7 heures” garantit de toute évidence des interventions urgences et sûres, en offrant des services (plombiers, électriciens ou serruriers) très qualifiés pour les particuliers, les bureaux et les commerces. ",
            button: "See More",
        },

        // { name: "1", id: 0, position: 1, icons: "", text: "something" },
    ];

    useEffect(() => {
        prevNext(centerItem);
    }, [centerItem]);

    const getIdItems = (side) => {
        if (side) {
            setcenterItem(nextItem);
        } else {
            setcenterItem(prevItem);
        }
    };

    const prevNext = (itemId) => {
        if (itemId == lastItem) {
            setprevItem(0);
            setnextItem(lastItem - 1);
        } else if (itemId == 0) {
            setprevItem(1);
            setnextItem(lastItem);
        } else {
            setprevItem(centerItem + 1);
            setnextItem(centerItem - 1);
        }
    };

    const next = () => {
        getIdItems(true);
        setcarouselDeg(carouselDeg - 72);
        setitemDeg(itemDeg + 72);
    };

    const prev = () => {
        getIdItems(false);
        setcarouselDeg(carouselDeg + 72);
        setitemDeg(itemDeg - 72);
    };

    const getCssClass = (id) => {
        if (id == centerItem) {
            return "active";
        }
    };

    const itemItems = carousel.map((item, index) => (
        <div
            className={`item-carousel ${getCssClass(index)}`}
            key={item.id}
            id={item.id}
            style={{transform: `rotate(${itemDeg}deg)`}}
        >
            <h4>{item.h4}</h4>
            <p>{item.text}</p>
            <button className='btn_sliderMain'>{item.button}</button>
        </div>
    ));

    const slidItemItems = carousel.slice(0, 1).map((item) => (
        <div
            key={item.id}
            id={item.id}
        >
            <h4>{item.h4}</h4>
            <p>{item.text}</p>
            <button className='btn_sliderMain'>{item.button}</button>
        </div>
    ));

    const settings = {
        infinite: true,
        slidesToScroll: 2,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    return (
        <>
            <section className="divMobile">
                <div className="container-fluid mt-5">
                    <div className="row rowCol mt-5">
                        <div className="col-sm-12 com-md-4 col-lg-4 poxos">
                            <div className='heraxos_div'>
                                <img src="assets/heraxos2.png" alt=""/>
                            </div>
                        </div>

                        <div
                            className="col-sm-12 com-md-8 col-lg-8 poxos2"
                            style={{
                                backgroundImage: `url("./assets/bg1.png")`,
                            }}
                        >

                            <div className='btn_slider'>
                                <div
                                    className="carousel"
                                    style={{transform: `rotate(${carouselDeg}deg)`}}
                                >
                                    {itemItems}
                                </div>
                                <div className="buttonsSlider">
                                    <button onClick={next}><MdOutlineKeyboardArrowUp/></button>
                                    <button onClick={prev}><MdOutlineKeyboardArrowDown/></button>
                                </div>
                            </div>


                        </div>
                        <div className='media_slider mb-5'>
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        {carousel.slice(0, 1).map((item) => (
                                            <div key={item.id} id={item.id} className='sliderDivs'>
                                                <h4>{item.h4}</h4>
                                                <p>{item.text}</p>
                                                <button className='btn_sliderMain'>{item.button}</button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="carousel-item">
                                        {carousel.slice(0, 1).map((item) => (
                                            <div key={item.id} id={item.id} className='sliderDivs'>
                                                <h4>{item.h4}</h4>
                                                <p>{item.text}</p>
                                                <button className='btn_sliderMain'>{item.button}</button>
                                            </div>
                                            ))}
                                    </div>
                                    <div className="carousel-item">
                                        {carousel.slice(0, 1).map((item) => (
                                            <div key={item.id} id={item.id} className='sliderDivs'>
                                                <h4>{item.h4}</h4>
                                                <p>{item.text}</p>
                                                <button className='btn_sliderMain'>{item.button}</button>
                                            </div>
                                            ))}
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="triangle mt50">
                        <div className="triangleSlider">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeSlider;
