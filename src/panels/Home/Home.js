import React, { useState } from "react";
import { Panel, CardScroll, Card } from "@vkontakte/vkui";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../Layout/Header/Header";
import "./Home.css";
import "swiper/css";

const Home = ({ id, go }) => {
  const [productId, setProductId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/asd");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  fetchData();

  const clickOnProduct = (e) => {
    const id = e.currentTarget.dataset.id;

    setProductId(id);
    go({ panelName: "product", productId: id });
  };

  return (
    <Panel id={id}>
      <Header />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            class="flex items-center swiper-image rounded-md overflow-hidden relative stsp-box-shadow"
            style={{ background: `background: url({item.slide_path}) 50% 0;` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Panel>
  );
};

export default Home;
