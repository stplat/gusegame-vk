import React, { useState, useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { Group, CardScroll, Card } from "@vkontakte/vkui";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../Item/Item";
import "swiper/css";
import "./ProductSlider.css";
import flagRussia from "../../img/flag_russia.svg";

const ProductSlider = ({ products = [] }) => {
  const clickOnProduct = (e) => {
    const id = e.currentTarget.dataset.id;

    setProductId(id);
    go({ panelName: "product", productId: id });
  };

  useEffect(() => {}, []);

  console.log(products);

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
          <Item item={item}></Item>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
