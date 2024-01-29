import React from "react";
import PropTypes from "prop-types";

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

import diablo from "../img/diablo4.jpg";

const Home = ({ id, go, fetchData }) => (
  <Panel id={id} style={{ height: 1000 }}>
    <PanelHeader>История закупок</PanelHeader>
    <Group>
      <Banner
        before={<Image size={96} src={diablo} />}
        header={
          <React.Fragment>
            <strong>Diablo 4</strong>
          </React.Fragment>
        }
        text={
          <React.Fragment>
            <div style={{ padding: 5 }}>
              <Caption level="1" weight="1" style={{ marginBottom: 6 }}>
                Номер лота: 00001
              </Caption>
              <Caption level="1" weight="1" style={{ marginBottom: 6 }}>
                Собрано участников: 3/10
              </Caption>
              <Caption level="1" weight="1" style={{ marginBottom: 6 }}>
                Количество товаров: 10
              </Caption>
              <Caption level="1" weight="1" style={{ marginBottom: 8 }}>
                Дата проведения: 03.02.2024
              </Caption>
              <Caption level="1" weight="1" style={{ marginBottom: 8 }}>
                Скидка от лота: 10%
              </Caption>
            </div>
            <strong>
              Цена за единицу: <strong>5301р</strong> <strike>5890р</strike>
            </strong>
          </React.Fragment>
        }
        actions={<Button onClick={fetchData}>Участвовать</Button>}
      />
    </Group>
  </Panel>
);

export default Home;
