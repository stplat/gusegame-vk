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
} from "@vkontakte/vkui";

import diablo from "../img/diablo4.jpg";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id} style={{ height: 1000 }}>
    <PanelHeader>Example</PanelHeader>
    <Group>
      <Div>
        <Title level="2">Каталог игр:</Title>
      </Div>
      <Banner
        before={<Image size={96} src={diablo} />}
        header="Diablo 4"
        subheader="Турция"
        text="5 990р"
        actions={<Button>Подробнее</Button>}
      />

      {/* <CardGrid size="s">
				<Card>
					<div><img className="ProductCard" src={diablo} alt="Persik The Cat"/></div>
				</Card>
				<Card>
					<div style={{ paddingBottom: '92%' }} />
				</Card>
				<Card>
					<div style={{ paddingBottom: '92%' }} />
				</Card>
			</CardGrid> */}
    </Group>
    {/* {fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group> */}
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
