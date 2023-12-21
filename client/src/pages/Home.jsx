import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const citiesImages = [
    {img : "https://placekitten.com/800/401" , name:"cat1"},
    {img:"https://placekitten.com/802/402",name:"cat2"} ,
    {img:"https://placekitten.com/803/403",name:"cat3"} ,
    {img:"https://placekitten.com/801/404",name:"cat4"} ,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
  };

  return (
    <div className="h-full w-full  flex sm:pt-4 sm:px-4">
      <div className="w-full h-full   sm:mx-16 flex flex-col sm:flex-row bg-maindiv  rounded-lg">
        <div className="flex-1 pl-20 py-10 ">
          <div className=" gap-5 py-6 my-32 w-5/6 flex flex-col shadow-lg bg-white px-5 rounded-md">
            <h1 className="animate-bounce mx-4  bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
              Discovering Achraf's World...
            </h1>
            <h5>
              Welcome to Boîte Blog your digital haven for all things beautiful
              and inspiring! Boîte, which translates to "box" in French,
              represents the curated collection of thoughts, ideas, and
              experiences waiting to be explored within this virtual space.
            </h5>
          </div>
        </div>

        <div className=" flex-1  w-full sm:my-auto  sm:w-32 mr-10">
          <Slider {...settings}>
            {citiesImages.map((image, index) => (
              <div className="flex-1 " key={index}>
                <img
                  src={image.img}
                  alt={`City ${index + 1}`}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
