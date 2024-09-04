import React from "react";
import card1 from '../assets/services1.png'
import card2 from '../assets/services2.png'
import card3 from '../assets/services3.png'
function MainServices() {
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  return (
    <>
      <div className="grid grid-flow-row py-8 justify-center">
        <h1 className="uppercase font-sans font-bold text-3xl">
          Our<span className="text-orange-500"> Services</span>
        </h1>
        <div className="h-2 w-60 bg-black rounded-full">
          <div className="services-hr">.</div>
        </div>
        <p className="italic">
          We Provide best embroidery services across the Globe
        </p>
      </div>
      <div className="slide-container swiper">
        <div className="slide-content shadow-lg">
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src={card1}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name uppercase font-bold font-sans">Custom Patches</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                   src={card2}
                    alt=""
                    className="card-img h-72"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name font-bold font-sans uppercase">Sublimation</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src={card3}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name font-bold font-sans uppercase">Vector</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src={card1}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name font-bold font-sans uppercase">Vector</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>  
           
            </div>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src={card3}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name font-bold font-sans uppercase">Vector</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>  
           
            </div>

            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src={card2}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name font-bold font-sans uppercase">Vector</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>  
           
            </div>

            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src={card1}
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name font-bold font-sans uppercase">Vector</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>  
           
            </div>

          </div>
        </div>

        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export default MainServices;
