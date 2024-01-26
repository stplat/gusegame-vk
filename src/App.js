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

import Home from "./panels/Home";
import Persik from "./panels/Persik";
import {
  Icon20Add,
  Icon20ListPenOutline,
  Icon28Notifications,
} from "@vkontakte/icons";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    bridge
      .send("VKWebAppSendPayload", {
        group_id: 214250585,
        payload: {},
      })
      .then((data) => {
        if (data.result) {
          // Событие отправлено
        }
      })
      .catch((error) => {
        // Ошибка
        console.log(error);
      });

    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Spacing />
          <SplitLayout popout={popout} style={{ justifyContent: "center" }}>
            <SplitCol
              fixed
              width={240}
              maxWidth={240}
              style={{ marginRight: 5 }}
            >
              <Group>
                <SimpleCell before={<Icon20ListPenOutline />}>
                  История закупок
                </SimpleCell>
                <SimpleCell before={<Icon20Add />}>Создать закупку</SimpleCell>
              </Group>
            </SplitCol>
            <SplitCol width="100%" maxWidth="calc(100% - 260px)">
              <View activePanel={activePanel}>
                <Home id="home" fetchedUser={fetchedUser} go={go} />
                <Persik id="persik" go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
