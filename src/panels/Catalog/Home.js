import React from "react";
import {
  Panel,
  PanelHeader,
  Title,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  Card,
  CardGrid,
  Banner,
  Image,
  Caption,
} from "@vkontakte/vkui";

import "./Home.css";
import logo from "../../img/logo.svg";
import diablo4Banner from "../../img/diablo4_banner.jpg";
import lastOfUs from "../../img/last_of_us.jpg";
import diablo4 from "../../img/diablo4.jpg";
import atomicHeart from "../../img/atomic_heart.jpg";

const Home = ({ id, go, fetchData }) => {
  return (
    <Panel id={id} style={{ height: 1000 }}>
      <PanelHeader>
        <div className="header">
          <img src={logo}></img>
          <div>Мы работаем, что бы Вы могли играть</div>
        </div>
      </PanelHeader>
      <Group>
        <CardGrid size="l">
          <Card>
            <div
              style={{
                overflow: "hidden",
                fontSize: "1px",
                lineHeight: 1,
                borderRadius: "4px",
              }}
            >
              <img src={diablo4Banner}></img>
            </div>
          </Card>
        </CardGrid>
      </Group>
      <Group description="Популярные">
        <CardGrid size="s">
          <Card>
            <div
              style={{
                borderRadius: "4px",
                height: "280px",
                background: `url(${diablo4}) 0 100%`,
                backgroundSize: "cover",
                overflow: "hidden",
              }}
            >
              фыв
            </div>
          </Card>
          <Card>
            <div
              style={{
                borderRadius: "4px",
                height: "280px",
                background: `url(${atomicHeart}) 0 100%`,
                backgroundSize: "cover",
                overflow: "hidden",
              }}
            ></div>
          </Card>
          <Card>
            <div
              style={{
                borderRadius: "4px",
                height: "280px",
                background: `url(${lastOfUs}) 0 100%`,
                backgroundSize: "cover",
                overflow: "hidden",
              }}
            ></div>
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  );
};

export default Home;
