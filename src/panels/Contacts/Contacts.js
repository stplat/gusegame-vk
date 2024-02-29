import React, { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import Crumbs from "../Layout/Crumbs/Crumbs";
import {
  Accordion,
  Paragraph,
  Spacing,
  Separator,
  Link,
} from "@vkontakte/vkui";
import "./Contacts.css";

const Contacts = ({ go }) => {
  return (
    <div>
      <Header go={go} />
      <div className="p-4">
        <div className="mb-4">
          <Crumbs go={go} current="Контакты" />
        </div>
        <div className="tearms mb-4 py-4 px-6">
          <Paragraph weight="3">
            ИП Платонов С.О.
            <Spacing size={1} />
            323595800019822
            <Spacing size={1} />
            г. Пермь, ул Ленина, д. 88, оф. 304, этаж 3
            <Spacing size={1} />
            +79194444066
            <Spacing size={16} />
            Наши социальные сети:
            <Spacing size={5} />
            <ul>
              <li>
                –{" "}
                <Link href="https://t.me/gusegame" target="_blank">
                  Телеграм-канал
                </Link>
              </li>
              <Spacing size={5} />
              <li>
                –{" "}
                <Link href="https://t.me/GuseGame_bot" target="_blank">
                  Телеграм-бот
                </Link>
              </li>
              <Spacing size={5} />
              <li>
                –{" "}
                <Link href="https://vk.com/gusegame.store" target="_blank">
                  Сообщество Вконтакте
                </Link>
              </li>
              <Spacing size={5} />
              <li>
                –{" "}
                <Link
                  href="https://www.avito.ru/brands/gusegame"
                  target="_blank"
                >
                  Авито
                </Link>
              </li>
            </ul>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
