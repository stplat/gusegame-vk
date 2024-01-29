import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Banner,
  Image,
  Button,
  Div,
} from "@vkontakte/vkui";

import diablo from "../img/persik.png";
import "./ProductCard.css";

const Persik = (props) => (
  <Panel id={props.id}>
    <PanelHeader before={<PanelHeaderBack onClick={props.go} data-to="home" />}>
      Persik
    </PanelHeader>
    <Div>
      <Banner
        before={
          <Image
            size={96}
            src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
          />
        }
        header="Баста в Ледовом"
        subheader="Большой концерт"
        asideMode="dismiss"
        actions={<Button>Подробнее</Button>}
      />
    </Div>
    {/* <img className="ProductCard" src={diablo} alt="Persik The Cat"/> */}
  </Panel>
);

Persik.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Persik;
