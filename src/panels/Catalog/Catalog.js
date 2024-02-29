import React, { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import Crumbs from "../Layout/Crumbs/Crumbs";
import { Pagination } from "@vkontakte/vkui";
import Item from "../../components/Item/Item";
import "./Catalog.css";

const Catalog = ({ go, products, fetchProducts, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [siblingCount, setSiblingCount] = useState(0);
  const [boundaryCount, setBoundaryCount] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const [filters, setFilters] = useState(null);

  const handleChange = (page) => {
    setCurrentPage(page);
    fetchProducts(Object.assign(filters, { page }));
  };

  async function changeFilters(params) {
    setFilters(params);
    await fetchProducts(params);
  }

  return (
    <div>
      <Header go={go} filter changeFilters={changeFilters} />
      <div className="p-4">
        <div className="mb-4">
          {totalPages}
          <Crumbs go={go} current="Каталог" />
        </div>
        <div className="catalog">
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

export default Catalog;
