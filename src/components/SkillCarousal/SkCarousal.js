import React, { useState, useEffect } from 'react';
import logo512 from '../../assets/logo512.png';
import TA from '../../assets/TA.png';
import CSS from '../../assets/CSS.png';
import './SkCarousal.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SkCarousal = () => {
  const initialImages = [TA, logo512, CSS];
  const totalImages = initialImages.length;
  const [images, setImages] = useState([]);
  const [position, setPosition] = useState(0);
  const imageWidth = 25;
  const intervalDuration = 1000;

  useEffect(() => {
    const clonedImages = initialImages.concat(initialImages, initialImages);
    setImages(clonedImages);
  }, [initialImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition - imageWidth);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,  // Adjust the number of items to show at a time
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,  // Adjust the number of items to show at a time
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
  };  

  return (
    <div className="sk-carousal-container">
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        draggable
        swipeable
        containerClass="sk-carousal-wrapper"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="sk-carousal-item"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="sk-carousal-image"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SkCarousal;
