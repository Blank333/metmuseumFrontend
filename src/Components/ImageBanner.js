import React, { useEffect, useState } from "react";
import image1 from "../images/banner/image1.jpg";
import image2 from "../images/banner/image2.jpg";
import image3 from "../images/banner/image3.jpg";
import image4 from "../images/banner/image4.jpg";
import image5 from "../images/banner/image5.jpg";
import { FiberManualRecordOutlined } from "@mui/icons-material";

const ImageBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoPlay);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={
        images.length > 0
          ? "w-full h-auto overflow-x-hidden container m-auto"
          : "hidden"
      }
    >
      <div className='h-96 relative'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='w-[500vw] h-full flex transition-transform duration-2000'
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className='w-screen h-full object-cover'
              loading='priority'
              alt={`Banner${index + 1}`}
            />
          ))}
        </div>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' />

        <div className='absolute top-20 left-20 text-white font-bold lg:text-5xl text-xl w-1/2 flex flex-col items-start gap-8'>
          <h1>
            Over 5,000 years of art from around the world for everyone to
            experience and enjoy
          </h1>
          <button className='lg:text-lg text-sm bg-green-user rounded-full py-3 px-6'>
            View Now
          </button>
        </div>
        <div className='text-white absolute w-fit left-0 right-0 mx-auto flex bottom-4'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer p-1 ${
                index === currentSlide
                  ? "bg-green-user w-1/2 h-1/2 rounded-full"
                  : ""
              } duration-300`}
            >
              <FiberManualRecordOutlined />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
