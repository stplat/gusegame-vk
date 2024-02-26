import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../Item/Item";
import "swiper/css";
import "./ProductSlider.css";

const ProductSlider = ({ products = [], go }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        850: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        660: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
      }}
    >
      {products.map((item, key) => (
        <SwiperSlide key={key}>
          <Item item={item} go={go}></Item>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
