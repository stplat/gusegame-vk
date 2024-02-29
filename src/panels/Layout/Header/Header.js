import React, { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";
import { FixedLayout, FormItem, Checkbox } from "@vkontakte/vkui";

import "./Header.css";
import logo from "../../../img/icons/logo.svg";
import logoShort from "../../../img/icons/logo_short.svg";

const navigation = [
  { name: "Каталог", panel: "catalog" },
  { name: "Поддержка", panel: "tearms" },
  { name: "Контакты", panel: "contacts" },
];

const Header = ({ go, changeFilters, filter = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [checked, setChecked] = useState({
    distributors: [],
    games: [],
    categories: [],
  });

  const [data, setData] = useState({
    distributors: [
      { name: "Blizzard (battle.net)", value: 1, checked: false },
      { name: "Steam", value: 2, checked: false },
      { name: "PlayStation", value: 3, checked: false },
    ],
    games: [
      { name: "Diablo 4", value: 17, checked: false },
      { name: "World of Warcraft", value: 8, checked: false },
      { name: "Starcraft II", value: 13, checked: false },
    ],
    categories: [
      { name: "Электронное издание", value: 1, checked: false },
      { name: "Подписка", value: 2, checked: false },
      { name: "Питомец", value: 3, checked: false },
      { name: "Средство передвижения", value: 7, checked: false },
    ],
  });

  function goMenu(e) {
    e.preventDefault();
    go({ panelName: e.currentTarget.dataset.panel });
  }

  function handleChangeFilters(e) {
    var updatedList = [...checked[e.target.name]];
    if (e.target.checked) {
      updatedList = [...checked[e.target.name], e.target.value];
    } else {
      updatedList.splice(checked[e.target.name].indexOf(e.target.value), 1);
    }

    setChecked(
      Object.assign(checked, {
        [e.target.name]: updatedList,
      })
    );

    data[e.target.name].map((item) => {
      return Object.assign(item, {
        checked: updatedList.includes(String(item.value)),
      });
    });

    setData(data);
  }

  function applyFilters() {
    changeFilters(checked);
  }

  function searchProducts(e) {
    e.preventDefault();
    const searchHtml = document.querySelector("#search");
    const searchValue = searchHtml.value;

    changeFilters({ search: searchValue });
  }

  return (
    <Fragment>
      <FixedLayout vertical="top" style={{ zIndex: 100 }}>
        <header className="header header_bg flex items-center justify-between">
          <nav
            className="flex items-center justify-between p-4 w-full"
            aria-label="Global"
          >
            <div className="flex shrink-0">
              <a
                href=""
                className="-m-1.5 p-1.5"
                onClick={goMenu}
                data-panel="home"
              >
                <span className="sr-only">GuseGame</span>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="Gusegame - покупки зарубежом"
                />
              </a>
            </div>
            <div className="w-full hidden md:block">
              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium sr-only text-white"
                >
                  Поиск
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-gray-500  focus:ring-ray-500 focus:outline-none"
                    placeholder="Найти игру, подписку, ключ"
                    required
                  />
                  <button
                    type="submit"
                    onClick={searchProducts}
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-ggpink-800 rounded-e-lg border border-ggpink-800 hover:bg-ggpink-900 focus:ring-1 focus:outline-none focus:ring-ggpink-900"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Поиск</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex">
              {filter && (
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white mr-1"
                  onClick={() => setFilterMenuOpen(true)}
                >
                  <span className="sr-only">Меню</span>
                  <AdjustmentsVerticalIcon
                    className="h-8 w-8"
                    aria-hidden="true"
                  />
                </button>
              )}
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white   "
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Меню</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
          </nav>
          {filter && (
            <Dialog as="div" open={filterMenuOpen} onClose={setFilterMenuOpen}>
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="filter_bg fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="-m-1.5 p-1.5"
                    onClick={goMenu}
                    data-panel="home"
                  >
                    <span className="sr-only">GuseGame</span>
                    <img className="h-8 w-auto" src={logoShort} alt="Лого" />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-black"
                    onClick={() => setFilterMenuOpen(false)}
                  >
                    <span className="sr-only">Закрыть</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-4 flow-root">
                  <div className="divide-y divide-slate-200">
                    <div className="pb-4">
                      <div className="font-medium mb-3">Поставщик:</div>
                      {data.distributors.map((item) => (
                        <div
                          className="flex items-center mb-1"
                          key={item.value}
                        >
                          <input
                            id={"distributors_" + item.value}
                            name="distributors"
                            type="checkbox"
                            value={item.value}
                            className="w-4 h-4 checkbox"
                            onClick={handleChangeFilters}
                            defaultChecked={item.checked}
                          />
                          <label
                            htmlFor={"distributors_" + item.value}
                            className="pl-3 text-sm text-gray-900 dark:text-gray-300"
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="py-4">
                      <div className="font-medium mb-3">Игра:</div>
                      {data.games.map((item) => (
                        <div
                          className="flex items-center mb-1"
                          key={item.value}
                        >
                          <input
                            id={"games_" + item.value}
                            name="games"
                            type="checkbox"
                            value={item.value}
                            className="w-4 h-4 checkbox"
                            onClick={handleChangeFilters}
                            defaultChecked={item.checked}
                          />
                          <label
                            htmlFor={"games_" + item.value}
                            className="pl-3 text-sm text-gray-900 dark:text-gray-300"
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="py-4">
                      <div className="font-medium mb-3">Категория:</div>
                      {data.categories.map((item) => (
                        <div
                          className="flex items-center mb-1"
                          key={item.value}
                        >
                          <input
                            id={"category_" + item.value}
                            name="categories"
                            type="checkbox"
                            value={item.value}
                            className="w-4 h-4 checkbox"
                            onClick={handleChangeFilters}
                            defaultChecked={item.checked}
                          />
                          <label
                            htmlFor={"category_" + item.value}
                            className="pl-3 text-sm text-gray-900 dark:text-gray-300"
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <div className="product-button">
                        <button className="button" onClick={applyFilters}>
                          Применить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="filter_bg fixed border dialog-rounded inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="-m-1.5 p-1.5"
                  onClick={goMenu}
                  data-panel="home"
                >
                  <span className="sr-only">GuseGame</span>
                  <img className="h-8 w-auto" src={logoShort} alt="Лого" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Закрыть</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="w-full mt-6 md:hidden">
                <form className="max-w-lg mx-auto">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 ps-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder="Игра, подписка, ключ"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-ggpink-800 rounded-e-lg border border-ggpink-800 hover:bg-ggpink-900 focus:ring-1 focus:outline-none focus:ring-ggpink-900"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Поиск</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href=""
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={goMenu}
                        data-panel={item.panel}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Личный кабинет
                    </a>
                  </div> */}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </FixedLayout>
      <div className="fixed-offset"></div>
    </Fragment>
  );
};

export default Header;
