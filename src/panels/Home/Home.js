import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  HorizontalScroll,
  HorizontalCell,
  Group,
  Header,
  Link,
  Title,
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

const Home = ({ id, go }) => {
  const [productId, setProductId] = useState(null);

  const clickOnProduct = (e) => {
    const id = e.currentTarget.dataset.id;

    setProductId(id);
    go({ panelName: "product", productId: id });
  };

  return (
    <Panel id={id}>
      <PanelHeader
        before={
          <div className="header">
            <img src={logo}></img>
          </div>
        }
      >
        <div>
          {productId}
          Подписки и ключи для Steam, Battle.net, Epic Store, PlayStation,
          Patreon
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
      <Group
        header={
          <Header aside={<Link>Показать все</Link>}>
            <Title level="1">Battle.net</Title>
          </Header>
        }
      >
        <HorizontalScroll>
          <div style={{ display: "flex" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
              <HorizontalCell
                onClick={() => {}}
                key={i}
                size="l"
                header="Diablo 4"
                subtitle="Казахстан"
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
    </Panel>
  );
};

export default Home;
