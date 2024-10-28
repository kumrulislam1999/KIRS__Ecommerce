import React from 'react'


/* =====================================
    Start Import React Slick Slider Here
===================================== */
import Slider from "react-slick";
/* =====================================
    End Import React Slick Slider Here
===================================== */

/* =====================================
    Start Import React Slick Slider Here
===================================== */
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
/* =====================================
    End Import React Slick Slider Here
===================================== */

/* =====================================
    Start Import Images Here
===================================== */
import hero__img1 from "../../assets/home__page/hero_2_bg_1.png";
import hero__img2 from "../../assets/home__page/hero_2_bg_2.png";
/* =====================================
    End Import Images Here
===================================== */


/* ======= Start  Slick Arrow Classes Here  ======== */
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    const class__Name = `${className} next__arrow`
    return (
      <div
        className={class__Name}

        style={{ ...style }}
        onClick={onClick}
      ><FaAnglesRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const class__Name = `${className} prev__arrow`;
    return (
      <div
        className={class__Name}
        style={{ ...style }}
        onClick={onClick}
      ><FaAnglesLeft/></div>
    );
  }
/* =======  End Slick Arrow Classes  Here ======== */


const HeroBannar = () => {

    /* ====== Start Slick Slider Settings Here ====== */
    const settings = {
        className : "hero__slider__box",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        dotsClass : "dots__classs",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    /* ====== End Slick Slider Settings Here ====== */

      
  return (
    <>
        {/* ====== Start Hero Section Here ======  */}
        <div id='hero__section'>
        <Slider  {...settings}>
            <div className="hero__slider__item">
                <div className="hero__bg sec__pad" style={{backgroundImage: `url(${hero__img1})`}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-12 col-sm-8 col-md-8 col-lg-6">
                                <div className="text__content">
                                    <h5>Big Sale</h5>
                                    <h1>Product For <br/><span>Spa Treatment</span></h1>
                                    <p>
                                        Objectively incubate enabled innovation through leveraged
                                        mindshare. Competently.
                                    </p>
                                    <button type="button" className="shop__btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__slider__item">
                <div className="hero__bg sec__pad" style={{backgroundImage: `url(${hero__img2})`}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-12 col-sm-8 col-md-8 col-lg-6">
                                <div className="text__content">
                                    <h5>Big Sale</h5>
                                    <h1>Product For <br/><span>Spa Treatment</span></h1>
                                    <p>
                                        Objectively incubate enabled innovation through leveraged
                                        mindshare. Competently.
                                    </p>
                                    <button type="button" className="shop__btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__slider__item">
                <div className="hero__bg sec__pad" style={{backgroundImage: `url(${hero__img1})`}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-12 col-sm-8 col-md-8 col-lg-6">
                                <div className="text__content">
                                    <h5>Big Sale</h5>
                                    <h1>Product For <br/><span>Spa Treatment</span></h1>
                                    <p>
                                        Objectively incubate enabled innovation through leveraged
                                        mindshare. Competently.
                                    </p>
                                    <button type="button" className="shop__btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
        {/* ====== End Hero Section Here ======  */}
    </>
  )
}

export default HeroBannar
