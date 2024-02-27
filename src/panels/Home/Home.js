import React, { useState, useEffect } from "react";
import { Panel } from "@vkontakte/vkui";
import { register } from "swiper/element/bundle";
import Header from "../Layout/Header/Header";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import "swiper/css";
import "./Home.css";

register();

const Home = ({ go, slides, populars }) => {
  return (
    <div>
      <Header go={go} />
      <div className="myswiper">
        <swiper-container slides-per-view="1">
          {slides.map((item, key) => (
            <swiper-slide key={key}>
              <div
                className="flex items-center swiper-image overflow-hidden relative stsp-box-shadow"
                style={{
                  height: "250px",
                  background: `url(${item.slide_path}) center 0`,
                  backgroundSize: "cover",
                }}
              ></div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="p-4 text-2xl">Популярные товары</div>
      <div className="px-4">
        <ProductSlider products={populars} go={go} />
      </div>
    </div>
  );
};

export default Home;
