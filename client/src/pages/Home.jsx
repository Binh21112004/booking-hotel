import React from "react";
import Hero from "../componets/Hero";
import FeaturedDestination from "../componets/FeaturedDestination";
import ExclusiveOffers from "../componets/ExclusiveOffers";
import Testimonial from "../componets/Testimonial";
import NewsLetter from "../componets/NewsLetter";
const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home;