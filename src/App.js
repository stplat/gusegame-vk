import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  Group,
  Cell,
  SimpleCell,
  Separator,
  Spacing,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home/Home";
import Product from "./panels/Product/Product";
import Persik from "./panels/Persik";
import {
  Icon20Add,
  Icon20ListPenOutline,
  Icon28Notifications,
} from "@vkontakte/icons";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [productId, setProductId] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

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
    setPopout(null);
  }, []);

  async function fetchData() {
    console.log("asd");
    // const user = await bridge.send("VKWebAppGetUserInfo");
    // setUser(user);
  }

  const go = ({ panelName, productId }) => {
    setActivePanel(panelName);

    if (productId) {
      setProductId(productId);
    }
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={activePanel}>
            <Home id="home" fetchData={fetchData} go={go} />
            <Persik id="persik" go={go} />
            <Product id="product" productId={productId} go={go} />
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
