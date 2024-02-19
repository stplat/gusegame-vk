import React, { useState, useLayoutEffect } from "react";
import { Panel, Group, Card } from "@vkontakte/vkui";
import { register } from "swiper/element/bundle";
import Header from "../Layout/Header/Header";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import "swiper/css";
import "./Home.css";

register();

const Home = ({ id, go }) => {
  const [productId, setProductId] = useState(null);
  const [slides, setSlides] = useState([]);
  const [populars, setPopulars] = useState([]);

  useLayoutEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/main");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.slides);
        setPopulars(data.populars);
      } catch (e) {
        console.log("Ошибка запроса: " + e);
      }
    })();
  }, []);

  return (
    <Panel id={id}>
      <Header />
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
        <ProductSlider products={populars} />
      </div>
    </Panel>
  );
};

export default Home;
