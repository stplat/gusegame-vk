import React, { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Panel,
  PanelHeader,
  FixedLayout,
  Search,
  Separator,
} from "@vkontakte/vkui";

import "./Header.css";
import logo from "../../../img/logo.svg";

const navigation = [
  { name: "Battle.net", href: "#" },
  { name: "Steam", href: "#" },
  { name: "Playstation", href: "#" },
  { name: "Patreon", href: "#" },
];

const Header = ({ id, go }) => {
  const [productId, setProductId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clickOnProduct = (e) => {
    const id = e.currentTarget.dataset.id;

    setProductId(id);
    go({ panelName: "product", productId: id });
  };

  return (
    <Fragment>
      <FixedLayout vertical="top">
        <header className="header header_bg flex items-center justify-between">
          <nav
            className="flex items-center justify-between p-4 w-full"
            aria-label="Global"
          >
            <div className="flex shrink-0">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">GuseGame</span>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="Gusegame - покупки зарубежом"
                />
              </a>
            </div>
            <div className="w-full hidden sm:block">
              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium sr-only text-white"
                >
                  Search
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
                    id="default-search"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-gray-500  focus:ring-ray-500 focus:outline-none"
                    placeholder="Найти игру, подписку, ключ"
                    required=""
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
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex">
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
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="header_bg fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Gusegame - покупки зарубежом"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                </button>
              </div>
              <div className="w-full mt-6 md:hidden">
                <form className="mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium sr-only text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2 text-sm text-gray-900 border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-gray-500  focus:ring-ray-500 focus:outline-none"
                      placeholder="Найти игру, подписку, ключ"
                      required=""
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
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-4 flow-root">
                <div className="-my-6 divide-y divide-gray-100/20">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-regular leading-7 text-white header_hover"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-regular leading-7 text-white header_hover"
                    >
                      Личный кабинет
                    </a>
                  </div>
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
