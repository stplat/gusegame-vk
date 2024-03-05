import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../Item/Item";
import "swiper/css";
import "./ProductSlider.css";

const ProductSlider = ({ products = [], go }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      breakpoints={{
        835: {
          slidesPerView: 4,
        },
        630: {
          slidesPerView: 3,
        },
        400: {
          slidesPerView: 2,
        },
      }}
    >
      {products.map((item, key) => (
        <SwiperSlide
          key={key}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Item item={item} go={go}></Item>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
