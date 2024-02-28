import React, { Fragment, useEffect, useState } from "react";
import "./Crumbs.css";

const Crumbs = ({ go, current, catalog = false }) => {
  function goHome(e) {
    e.preventDefault();
    go({ panelName: "home" });
  }

  function goCatalog(e) {
    e.preventDefault();
    go({ panelName: "catalog" });
  }

  return (
    <ul className="crumbs">
      <li>
        <a href="" onClick={goHome}>
          Главная
        </a>
      </li>
      {catalog && (
        <Fragment>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li>
            <a href="" onClick={goCatalog}>
              Каталог
            </a>
          </li>
        </Fragment>
      )}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li>{current}</li>
    </ul>
  );
};
export default Crumbs;
