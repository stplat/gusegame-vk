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
import "./Tearms.css";

const questions = [
  {
    id: 1,
    question: "Какие у меня гарантии?",
    answer: (
      <Paragraph>
        GuseGame - это онлайн-сервис по покупке и установке под ключ цифровых
        товаров, в частности видео-игр, не доступных на сегодняшний день на
        территории России и Беларуси. Все продаваемые товары закупаются у
        официальных дистрибьюторов и издателей.
        <Spacing size={16} />
        Мы принимаем оплату на расчётный счёт индивидуального предпринимателя с
        использованием контрольно-кассовой техники и передаём соответствующие
        документы в налоговую.
        <Spacing size={16} />
        Ежедневно мы вкладываем в развитие нашего сообщество большое количество
        времени, сил, денег и конечно же душу. Глупо всё потерять, ведь мы
        искренне верим, что наши труды находят отклик в Ваших сердцах! Убедиться
        в вышеизложенном можно почитав отзывы от наших клиентов:
        <Spacing size={5} />–{" "}
        <Link href="https://t.me/gusegame/165" target="_blank">
          Отзывы Телеграм
        </Link>
        <Spacing size={5} />–{" "}
        <Link href="https://vk.com/gusegame.store" target="_blank">
          Отзывы Вконтакте
        </Link>
        <Spacing size={5} />–{" "}
        <Link href="https://www.avito.ru/brands/gusegame" target="_blank">
          Отзывы Авито
        </Link>
      </Paragraph>
    ),
  },
  {
    id: 2,
    question: "Как оформить заказ?",
    answer: (
      <Paragraph>
        Опишите свой заказ нашему оператору -{" "}
        <Link href="https://vk.me/gusegame.store" target="_blank">
          написать
        </Link>
        .
      </Paragraph>
    ),
  },
  {
    id: 3,
    question: "Как можно оплатить заказ?",
    answer: (
      <Paragraph>
        Мы принимаем оплату на расчётный счёт индивидуального предпринимателя с
        использованием контрольно-кассовой техники и передаём соответствующие
        документы в налоговую.
        <Spacing size={5} />
        После оформления заказа, оператор выставит Вам счёт, который можно будет
        оплатить любым удобным для Вас способом (банковская карта, СБП, QR-код и
        т.д.)!
      </Paragraph>
    ),
  },
  {
    id: 4,
    question: "Можно ли вернуть деньги за оказанные услуги?",
    answer: (
      <Paragraph>
        Каждый случай рассматривается индивидуально. Все денежные средства,
        согласованные к возврату, будут возвращены на карту, с которой они были
        зачислены нам.
        <Spacing size={5} />
        Мы точно не сможем вернуть денежные средства, если купленная игра не
        оправдала ожиданий или просто куплена по ошибке.
      </Paragraph>
    ),
  },
  {
    id: 5,
    question: "Можно оплатить Ваши услуги из Республики Беларусь?",
    answer: (
      <Paragraph>
        Мы не можем гарантировать качество оказываемых услуг сторонними
        сервисами, но наши клиенты пользуются сервисом - Оплати. Официальный
        сайт -{" "}
        <Link href="https://www.o-plati.by/" target="_blank">
          https://www.o-plati.by/
        </Link>
        .
      </Paragraph>
    ),
  },
];

const Tearms = ({ go }) => {
  return (
    <div>
      <Header go={go} />
      <div className="p-4">
        <div className="mb-4">
          <Crumbs go={go} current="Поддержка" />
        </div>
        <div className="tearms mb-4 py-4 md:px-6">
          <Paragraph weight="1">Добро пожаловать в службу поддержки!</Paragraph>
          <Spacing size={1} />
          <Spacing />
          <Separator wide />
          <Spacing />
          <Paragraph>
            Если Вы не смогли найти ответ на свой вопрос в разделе «FAQ»,
            расположенному ниже, - задайте его нашему оператору:
            <Spacing size={5} />
            <ul>
              <li>
                –{" "}
                <Link href="https://t.me/GuseGame_bot" target="_blank">
                  Оператор Телеграм
                </Link>
              </li>
              <Spacing size={5} />
              <li>
                –{" "}
                <Link href="https://vk.me/gusegame.store" target="_blank">
                  Оператор Вконтакте
                </Link>
              </li>
            </ul>
            <Spacing size={16} />
            <div>Работаем ежедневно, практически 24/7 - обращайтесь! :)</div>
          </Paragraph>
        </div>
        <div className="tearms mb-1 ">
          {questions.map((item) => (
            <Accordion>
              <Accordion.Summary
                iconPosition="before"
                style={{ width: "100%", whiteSpace: "normal" }}
              >
                {item.question}
              </Accordion.Summary>
              <div className="pt-2 pb-4 px-6">{item.answer}</div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tearms;
