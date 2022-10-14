import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute z-20 h-32 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="gi1" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="6ff" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="7ma" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
