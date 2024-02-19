import React, { useState, useEffect } from "react";
import { Panel, Group, Card } from "@vkontakte/vkui";
import { register } from "swiper/element/bundle";
import Header from "../Layout/Header/Header";
import "swiper/css";
import "./Home.css";

const Home = ({ id, go }) => {
  const [productId, setProductId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  const clickOnProduct = (e) => {
    const id = e.currentTarget.dataset.id;

    setProductId(id);
    go({ panelName: "product", productId: id });
  };

  return (
    <Group
      header={
        <Header aside={<Link>Показать все</Link>}>
          <Title level="1">PlayStation</Title>
        </Header>
      }
    >
      <HorizontalScroll>
        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <HorizontalCell
              onClick={clickOnProduct}
              key={i}
              size="l"
              header="Diablo 4"
              subtitle="Казахстан"
              data-id={i}
            >
              <Title
                level="2"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  color: "white",
                }}
              >
                5990р
              </Title>
              <img src={lastOfUs} />
            </HorizontalCell>
          ))}
        </div>
      </HorizontalScroll>
    </Group>
  );
};

export default Home;
