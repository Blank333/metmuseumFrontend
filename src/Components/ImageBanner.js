import React, { useState } from "react";

function ImageBanner() {
  const ImageBanner = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
      if (index === 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index - 1);
      }
    };

    const handleNext = () => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };

    return (
      <div className='container'>
        <div className=''>
          {images.map((image, i) => (
            <div className={` ${i === index ? "active" : ""}`} key={i}>
              <img src={image} alt='' />
            </div>
          ))}
        </div>
        <button className='bg-black' onClick={handlePrev}>
          Previous
        </button>
        <button className='' onClick={handleNext}>
          Next
        </button>
        HIIIIII
      </div>
    );
  };
}
export default ImageBanner;
