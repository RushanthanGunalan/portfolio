// PopupCarousel.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './PopupCarousel.css'; // Import custom styles for the carousel

const PopupCarousel = ({ isOpen, onRequestClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentImageIndex(index),
  };

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '500px', // Adjusted width for the popup
      height: '500px', // Adjusted height for the popup
      margin: 'auto',
      backgroundColor: 'black',
      border: 'none',
      overflowX: 'hidden', // Hide any overflow content
    },
  };

  const imageContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Hide any overflow content
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Popup"
      style={modalStyles}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={imageContainerStyle}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'fill' }}
            />
          </div>
        ))}
      </Slider>
    </Modal>
  );
};

export default PopupCarousel;
