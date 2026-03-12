import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper/modules";
import { Link } from "react-router-dom";
import SocialHeroTwo from "../SocialHeroTwo/SocialHeroTwo";

const sliderDataTwo = [
  {
    id: 1,
    title: "Car Repair & Auto",
    maintitle: "Services",
    desp: "Our skilled team of certified technicians is here to provide top-notch car repair and auto services to ensure your vehicle performs at its best. Our skilled team of certified technicians.",
    url: "/appointment",
    img: "/assets/img/hero/hero_two_slider_bg_1.png",
  },
  {
    id: 2,
    title: "AUTOMOTIVE REPAIR",
    maintitle: "MAINTENANCE",
    desp: "Our skilled team of certified technicians is here to provide top-notch car repair and auto services to ensure your vehicle performs at its best. Our skilled team of certified technicians.",
    url: "/appointment",
    img: "/assets/img/hero/hero_two_slider_bg_2.png",
  },
];

const HeroSliderTwo = () => {
  const swiperRef = useRef(null);

  return (
    <section className="ak-slider ak-slider-hero-two-1">
      <Swiper
        speed={1000}
        loop={true}
        slidesPerView={"auto"}
        parallax={true}
        modules={[Parallax]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {sliderDataTwo.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="ak-hero ak-style1 slide-inner style-two">
              <img
                src={item.img}
                className="ak-hero-bg ak-bg object-cover"
                alt="..."
              />
              <div className="container">
                <div className="hero-slider-info style-two">
                  <div className="slider-info">
                    <div className="hero-title">
                      <h1
                        className="hero-main-title"
                        data-swiper-parallax="300"
                      >
                        {item.title}
                      </h1>
                      <h1
                        className="hero-main-title-1 style-2"
                        data-swiper-parallax="100"
                      >
                        {item.maintitle}
                      </h1>
                      <p className="mini-title" data-swiper-parallax="200">
                        {item.desp}
                      </p>
                    </div>
                    <div className="ak-height-45 ak-height-lg-30"></div>
                    <div data-swiper-parallax="300">
                      <Link to={item.url} className="common-btn">
                        APPOINTMENT
                      </Link>
                    </div>

                    <SocialHeroTwo />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSliderTwo;
