import React from "react";
import { assets } from "../assets/assets";
import Title from "../componets/Title";
import { exclusiveOffers } from "../assets/assets";
const Experience = () => {
  return (
    <>
      <div
        className="w-full min-h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${assets.imgAbout})` }}
      >
        {/* Overlay đen làm mờ ảnh */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Nội dung nổi bật */}
        <div className="relative z-10 text-white text-center px-4 animate__animated animate__fadeInUp">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-weigth-400 mb-4">Experience</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Our diverse range of activities is designed to offer something for everyone.
          </p>
        </div>
      </div>



      {/* Section two*/}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-4 md:gap-6">
          <div className="w-full lg:w-1/2  ">
            <div className="w-[450px] h-[550px] relative z-10 jarallax " style={{
              clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'
            }}>
              <img
                src={assets.skying}
                alt="Facility"
                className="w-full max-w-[450px] h-[550px] relative z-10 jarallax-img"
                style={{
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                  width: '100%',
                  height: '100%',
                }}
              />

            </div>
          </div>

          {/* Nội dung */}
          <div  data-aos="fade-up">
            <p className="text-sm text-amber-600 font-medium flex items-center gap-2">
              <span className="w-4 h-0.5 bg-amber-600"></span> Winter Activities
            </p>
            <h2 className="text-4xl font-medium font-playfair mt-2 mb-4">Winter Activities</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Enjoy access to nearby slopes, perfect for both beginners and experienced skiers.
              Explore serene winter landscapes on guided snowshoe tours through nearby trails.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-800 text-sm">
              <div className="flex items-center gap-2">
                <img src={assets.sketing} className="w-5 h-5" />
                <span>Skiing & Snowboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.wild} className="w-5 h-5" />
                <span>Winter Wildlife Tours</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.coffee} className="w-5 h-5" />
                <span>Hot Cocoa by the Fire</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.snow} className="w-5 h-5" />
                <span>Snowshoeing</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.spa} className="w-5 h-5" />
                <span>Spa & Wellness</span>
              </div>
            </div>

            <a href="#" className="mt-8 inline-block text-amber-600 hover:underline font-medium text-sm">
              Discover More
            </a>
          </div>
        </div>
      </section>
      

      {/* Section three */}

      <section className="px-6 py-16 md:py-24 bg-white ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-4 md:gap-6 overflow-visible">
          {/* Nội dung */}
          <div  data-aos="fade-up">
            <p className="text-sm text-amber-600 font-medium flex items-center gap-2">
              <span className="w-4 h-0.5 bg-amber-600"></span> Summer Activities
            </p>
            <h2 className="text-4xl font-medium font-playfair mt-2 mb-4">Summer Activities</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Enjoy access to nearby slopes, perfect for both beginners and experienced skiers.
              Explore serene winter landscapes on guided snowshoe tours through nearby trails.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-800 text-sm">
              <div className="flex items-center gap-2">
                <img src={assets.sketing} className="w-5 h-5" />
                <span>Skiing & Snowboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.wild} className="w-5 h-5" />
                <span>Winter Wildlife Tours</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.coffee} className="w-5 h-5" />
                <span>Hot Cocoa by the Fire</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.snow} className="w-5 h-5" />
                <span>Snowshoeing</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={assets.spa} className="w-5 h-5" />
                <span>Spa & Wellness</span>
              </div>
            </div>

            <a href="#" className="mt-8 inline-block text-amber-600 hover:underline font-medium text-sm">
              Discover More
            </a>
          </div>



          <div className="w-full lg:w-1/2 ">
            <div className="w-[450px] h-[550px] relative z-10 jarallax " style={{
              clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'
            }}>
              <img
                src={assets.swimbeach}
                alt="Facility"
                className="w-full max-w-[450px] h-[550px] relative z-10 jarallax-img"
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
      </section>


      {/* Section four */}
      <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30' data-aos="fade-up">
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time offers
        and special packages to enhance your stay and create unforgettable memories.'/>
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
          View All Offers
          <img src={assets.arrowIcon} alt="arrow-icon" 
          className='group-hover:translate-x-1 transition-all'/>
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {exclusiveOffers.map((item) => (
          <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4
           rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${item.image})`}}>
            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
            <div>
              <p className='text-2xl font-medium font-playfair'>{item.title}</p>
              <p>{item.description}</p>
              <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
            </div>
            <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5'> 
              View Offers
              <img className='invert group-hover:translate-x-1' src={assets.arrowIcon} alt="arrow-icon"/>
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;