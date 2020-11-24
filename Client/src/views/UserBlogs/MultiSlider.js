
import React from 'react';
import Swiper from 'react-id-swiper';
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import "swiper/swiper.less";


const MutipleSlidesPerView = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }

  return (
    <Swiper>
      <div>Slide #1</div>
      <div>Slide #2</div>
      <div>Slide #3</div>
      <div>Slide #4</div>
      <div>Slide #5</div>
    </Swiper>
  )
};

export default MutipleSlidesPerView;
