import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  Panel,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./index.css";

import Home from "./panels/Home/Home";
import Product from "./panels/Product/Product";
import Catalog from "./panels/Catalog/Catalog";
import Tearms from "./panels/Tearms/Tearms";
import Contacts from "./panels/Contacts/Contacts";
import Search from "./panels/Search/Search";

const api = "http://127.0.0.1:8000/api/vk";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [slides, setSlides] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // bridge
    //   .send("VKWebAppGetAuthToken", {
    //     app_id: 51837568,
    //     group_id: 216337775,
    //     scope: "market",
    //   })
    //   .then((data) => {
    //     if (data.access_token) {
    //       // Ключ доступа сообщества получен
    //     }
    //   })
    //   .catch((error) => {
    //     // Ошибка
    //     console.log(error);
    //   });

    (async () => {
      try {
        const response = await fetch(`${api}/main`);
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

  async function getProduct(productId) {
    try {
      const response = await fetch(`${api}/products/${productId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (e) {
      console.log("Ошибка запроса: " + e);
    }
  }

  async function getProducts({
    page,
    distributors = [],
    games = [],
    categories = [],
    search = "",
  }) {
    try {
      const response = await fetch(`${api}/products/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          page: page,
          limit: 8,
          distributor_ids: distributors,
          game_ids: games,
          category_ids: categories,
          search: search,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log("Ошибка запроса: " + e);
    }
  }

  const go = async ({ panelName, productId = null }) => {
    if (productId) {
      await getProduct(productId);
    }

    if (panelName === "catalog") {
      await getProducts({ page: 1 });
    }

    setActivePanel(panelName);
  };

  return (
    <ConfigProvider transitionMotionEnabled={false}>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={activePanel}>
            <Panel id="home">
              <Home slides={slides} populars={populars} go={go} />
            </Panel>
            <Panel id="product">
              <Product product={product} go={go} />
            </Panel>
            <Panel id="catalog">
              <Catalog
                products={products}
                go={go}
                fetchProducts={getProducts}
              />
            </Panel>
            <Panel id="tearms">
              <Tearms go={go} />
            </Panel>
            <Panel id="contacts">
              <Contacts go={go} />
            </Panel>
            <Panel id="search">
              <Search go={go} />
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
