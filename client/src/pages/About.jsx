import React from "react";
import { assets } from "../assets/assets";
import 'animate.css';
const About = () => {
  return (
    <>
      {/* Section one */}
      <div
        className="w-full min-h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${assets.imgAbout})` }}
      >
        {/* Overlay đen làm mờ ảnh */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Nội dung nổi bật */}
        <div className="relative z-10 text-white text-center px-4 animate__animated animate__fadeInUp">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-weigth-400 mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Welcome to Quickstay, where luxury meets comfort in the heart of Dubai.
          </p>
        </div>
      </div>

      {/* Section two */}
      <div className="w-full py-16 px-4 md:px-20 bg-white flex flex-col md:flex-row items-center gap-12">
        {/* Hình ảnh trái */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img src='https://html.themewant.com/moonlit/assets/images/index-4/about/1.webp' alt="Nature" className="rounded-xl w-2/3 shadow-lg" data-aos="fade-up" />
          <img
            src='https://html.themewant.com/moonlit/assets/images/index-4/about/2.webp'
            alt="Explorer"
            className="rounded-xl w-1/2 absolute -bottom-8 -right-8 shadow-xl border-4 border-white" data-aos="fade-left"
          />
        </div>

        {/* Nội dung phải */}
        <div className="w-full md:w-1/2 text-center ml-6 md:text-left" data-aos="fade-up">
          <p className="text-sm text-[#B88E2F] font-medium mb-2" >— About Us</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-medium mb-6 leading-tight">
            Welcome To Our Moonlit <br /> Hotel
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6" >
            Welcome to Quickstay, where luxury meets comfort in the heart of Dubai.
            Since 1999, we have been dedicated to providing an exceptional stay
            for our guests, blending modern amenities with timeless elegance.
            Our beautifully designed rooms and suites offer stunning views and
            plush accommodations, ensuring a restful retreat whether you're here
            for business or leisure.
          </p>

        </div>
      </div>

      {/* Section three */}
      <div className="relative bg-[#f5f5f5] py-20 px-4 md:px-20 flex flex-col lg:flex-row items-start justify-between gap-12 items-center">
        {/* Nền xám phần trái */}
        <div className="w-full lg:w-1/2 mt-7">
          <p className="text-[#B88E2F] font-medium text-sm mb-2">— Facilities</p>
          <h2 className="text-4xl font-playfair font-medium mb-10">Hotel Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" >
            {/* Item 1 */}
            <div className="flex gap-4">
              <img src={assets.bedIcon} alt="bed-icon" className="h-8 w-8" />
              <div>
                <h4 className="text-lg font-medium mb-1">Rooms and Suites</h4>
                <p className="text-sm text-gray-600">
                  Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <img src={assets.securityIcon} alt="Security-icon" className="h-8 w-8" />
              <div>
                <h4 className="text-lg font-medium mb-1">24-Hour Security</h4>
                <p className="text-sm text-gray-600">
                  On-site security personnel and surveillance. Secure storage for valuables.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <img src={assets.gymIcon} alt="Gym" className="h-8 w-8" />
              <div>
                <h4 className="text-lg font-medium mb-1">Fitness Center</h4>
                <p className="text-sm text-gray-600">
                  Exercise machines, massages, facials, and more.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-4">
              <img src={assets.swimmingIcon} alt="Pool" className="h-8 w-8" />
              <div>
                <h4 className="text-lg font-medium mb-1">Swimming Pool</h4>
                <p className="text-sm text-gray-600">
                  Indoor or outdoor pools. Massages, facials, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ảnh bên phải: bé hơn, đặt thấp xuống, đè qua vùng xám */}
        <div className="w-full lg:w-1/2  ">
          <div className="w-[450px] h-[550px] relative z-10 jarallax" style={{
            clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'
          }}>
            <img
              src={assets.facility}
              alt="Facility"
              className="w-full h-full object-cover rounded-xl shadow-xl jarallax-img"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
                width: '100%',
                height: '100%',
              }}
            />

          </div>
        </div>
      </div>



      {/* Section four
      <div class="rts__section pb-120">
        <div class="container">
          <div class="row mb-40">
            <div class="d-flex align-items-center justify-content-between position-relative">
              <div class="section__content__left">
                <span class="h6 subtitle__icon__two d-block wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">Testimonial</span>
                <h2 class="content__title h2 lh-1">What Our Client Say</h2>
              </div>
              <div class="slider__navigation">
                <div class="nav__btn button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-48e4d74be3ba3d8e">
                  <img src="assets/images/icon/arrow-left-short.svg" alt="" />
                </div>
                <div class="nav__btn button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-48e4d74be3ba3d8e">
                  <img src="assets/images/icon/arrow-right-short.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-11">
              <div class="testimonial__slider overflow-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div class="swiper-wrapper" id="swiper-wrapper-48e4d74be3ba3d8e" aria-live="polite" style="transition-duration: 0ms; transition-delay: 0ms; transform: translate3d(-1186px, 0px, 0px);"><div class="swiper-slide swiper-slide-next swiper-slide-prev" role="group" aria-label="2 / 2" data-swiper-slide-index="1" style="width: 1186px;">
                  <div class="testimonial__item__content">
                    <div class="author__icon">
                      <img src="assets/images/author/author-2x.webp" alt="" />
                    </div>
                    <div class="testimonial__content">
                      <div class="single__slider__item ">
                        <div class="slider__rating mb-20">
                          <i class="flaticon-star"></i>
                          <i class="flaticon-star"></i>
                          <i class="flaticon-star"></i>
                          <i class="flaticon-star"></i>
                          <i class="flaticon-star-sharp-half-stroke"></i>
                        </div>
                        <span class="slider__text d-block">Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise.Their commitment to and delivering tailored.</span>
                        <div class="slider__author__info">
                          <div class="slider__author__info__content">
                            <h6 class="mb-0">Sarah Martinez</h6>
                            <span>COO of Apex Solutions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 2" data-swiper-slide-index="0" style="width: 1186px;">
                    <div class="testimonial__item__content">
                      <div class="author__icon">
                        <img src="assets/images/author/author-5.webp" alt="" />
                      </div>
                      <div class="testimonial__content">
                        <div class="single__slider__item ">
                          <div class="slider__rating mb-20">
                            <i class="flaticon-star"></i>
                            <i class="flaticon-star"></i>
                            <i class="flaticon-star"></i>
                            <i class="flaticon-star"></i>
                            <i class="flaticon-star-sharp-half-stroke"></i>
                          </div>
                          <span class="slider__text d-block">Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise.Their commitment to and delivering tailored.</span>
                          <div class="slider__author__info">
                            <div class="slider__author__info__content">
                              <h6 class="mb-0">Emran Hossain</h6>
                              <span>COO of Apex Solutions</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
          </div>
        </div>
      </div> */}




    </>

  );
};

export default About;