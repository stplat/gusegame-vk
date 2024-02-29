import React, { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import Crumbs from "../Layout/Crumbs/Crumbs";
import { Pagination, Separator } from "@vkontakte/vkui";
import Item from "../../components/Item/Item";
import "./Search.css";

const Search = ({ go, products, search, fetchProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [siblingCount, setSiblingCount] = useState(0);
  const [boundaryCount, setBoundaryCount] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (page) => {
    setCurrentPage(page);
    fetchProducts({
      search,
      page,
    });
  };

  return (
    <div>
      <Header go={go} />
      <div className="p-4">
        <div className="mb-4">
          <Crumbs go={go} current="Страница поиска" />
        </div>
        <div className="catalog-search mb-2">
          По запросу <strong>{search}</strong> найдено:
        </div>
        <Separator wide />
        <div className="catalog pt-2">
          {products &&
            products.data.map((item, key) => (
              <div className="catalog-item" key={key}>
                <Item item={item} go={go}></Item>
              </div>
            ))}
        </div>
        <div className="catalog-pagination mt-4">
          <Pagination
            currentPage={currentPage}
            siblingCount={siblingCount}
            boundaryCount={boundaryCount}
            totalPages={Math.ceil(products.total / 8)}
            disabled={disabled}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
