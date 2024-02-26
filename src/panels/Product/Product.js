import React, { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import { Panel } from "@vkontakte/vkui";

const Product = ({ id, productId, go }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.gusegame.ru/api/main");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    console.log(productId);

    fetchData();
  }, []);

  return (
    <Panel id={id} centered={true}>
      <Header />
      Туалетка {productId}
    </Panel>
  );
};
export default Product;
