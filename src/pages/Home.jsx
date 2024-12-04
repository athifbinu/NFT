import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/iamges/girl-with-vr-glasses-metaverse-concept-generated-ai_802770-124.jpg";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card

  const [isToggled, setIsToggled] = useState(false);
  // Array of images
  const images = [
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img1, alt: "Image 2" },
    { id: 3, src: img1, alt: "Image 3" },
    { id: 4, src: img1, alt: "Image 4" },
    { id: 5, src: img1, alt: "Image 5" },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen text-white p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 font-bold text-lg mb-6">
          <h2 className="text-rose-500">Choose Your NFT</h2>
          <p className="text-green-400">$99</p>
          <h2 className="text-rose-500 line-through">$199</h2>
        </div>
        {/* Image Slider */}
        <Slider {...settings}>
          {images.map((image) => (
            <div
              key={image.id}
              className={` rounded-lg cursor-pointer transform transition-transform duration-300 bg-black h-80 mb-10 ${
                selectedCard === image.id
                  ? " border-4 border-green-500"
                  : "border-4 border-transparent"
              }`}
              onClick={() => setSelectedCard(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>

        {/* Minimum Trade Size Section */}
        <div>
          <div className="justify-between flex font-bold mb-6">
            <div>
              <h2 className="text-rose-500">Minimum Trade Size</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Customize</span>
              <button
                onClick={() => setIsToggled(!isToggled)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                  isToggled ? "bg-rose-700" : "bg-gray-700"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-teal-900 rounded-full transition-transform duration-300 transform ${
                    isToggled ? "translate-x-7" : "translate-x-0"
                  }`}
                ></span>
              </button>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            molestias praesentium id quas iusto quos voluptatem asperiores culpa
            nam modi, vero cupiditate, fuga amet dolorum quidem earum quia
            doloremque totam.
          </p>

          {/* buttons */}
          {/* Buttons Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            <div>
              <p className="text-rose-500 font-bold mb-2">Lot min</p>
              <div className="bg-gradient-to-r from-teal-200 to-teal-500 flex justify-between p-2 rounded-lg text-black border-none font-bold cursor-pointer">
                <span>-</span>
                <span>+</span>
              </div>
            </div>

            <div>
              <p className="text-rose-500 font-bold mb-2">Lot min</p>
              <div className="bg-gradient-to-r from-teal-200 to-teal-500 flex justify-between p-2 rounded-lg text-black border-none font-bold cursor-pointer">
                <span>-</span>
                <span>+</span>
              </div>
            </div>

            <div>
              <p className="text-rose-500 font-bold mb-2">Lot min</p>
              <div className="bg-gradient-to-r from-teal-200 to-teal-500 flex justify-between p-2 rounded-lg text-black border-none font-bold cursor-pointer">
                <span>-</span>
                <span>+</span>
              </div>
            </div>

            <div>
              <p className="text-rose-500 font-bold mb-2">Lot min</p>
              <div className="bg-gradient-to-r from-teal-200 to-teal-500 flex justify-between p-2 rounded-lg text-black border-none font-bold cursor-pointer">
                <span>-</span>
                <span>+</span>
              </div>
            </div>

            <div>
              <p className="text-rose-500 font-bold mb-2">Lot min</p>
              <div className="bg-gradient-to-r from-teal-200 to-teal-500 flex justify-between p-2 rounded-lg text-black border-none font-bold cursor-pointer">
                <span>-</span>
                <span>+</span>
              </div>
            </div>

            <div>
              <p className="text-rose-500 font-bold mb-2">Lot min</p>
              <div className="bg-gradient-to-r from-teal-200 to-teal-500 flex justify-between p-2 rounded-lg text-black border-none font-bold cursor-pointer">
                <span>-</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
