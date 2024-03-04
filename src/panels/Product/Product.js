import React, { useEffect, useState } from "react";
import Header from "../Layout/Header/Header";
import Crumbs from "../Layout/Crumbs/Crumbs";
import "./Product.css";

const Product = ({ product, go }) => {
  return (
    <div>
      <Header go={go} />
      {product && (
        <div className="p-4">
          <div className="mb-4">
            <Crumbs go={go} current={product.name} catalog />
          </div>
          <div className="product">
            <div className="product-image">
              <img src={product.image_path} />
              {product.discount ? (
                <div className="item-discount">-{product.discount}%</div>
              ) : (
                ""
              )}
              <div className="item-bottom">
                <div className="item-prop">
                  <div
                    className="item-icon"
                    style={{ background: product.distributor.color }}
                  >
                    <img src={product.distributor.icon} />
                  </div>
                  <div className="item-type">
                    <img
                      src={product.product_type.icon}
                      alt={product.product_type.name}
                      title={product.product_type.name}
                    />
                  </div>
                  <div
                    className="item-prop-bottom"
                    style={{ background: product.distributor.color }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="product-content">
              <div className="product-name">{product.name}</div>
              <div className="product-sub-name mt-1 mb-2">
                {product.category.name}
              </div>
              <ul className="product-list">
                <li>
                  <div className="key">Платформа:</div>
                  <div className="value">{product.distributor.name}</div>
                </li>
                <li>
                  <div className="key">Тип покупки:</div>
                  <div className="value">{product.product_type.name}</div>
                </li>
                <li>
                  <div className="key">Регион активации:</div>
                  <div className="value">{product.activate_region.name}</div>
                </li>
              </ul>
              <div className="mt-4">
                {product.discount ? (
                  <div className="product-price-old mr-3">
                    <div className="product-price-old">{product.price}р</div>
                  </div>
                ) : (
                  ""
                )}
                <div className="product-price">
                  {product.discount
                    ? Math.round(
                        (product.price * (100 - product.discount)) / 100
                      )
                    : product.price}
                </div>
              </div>
              <div className="product-button mt-5">
                <a
                  className="button flex items-center justify-center"
                  href="https://vk.me/gusegame.store"
                  target="_blank"
                >
                  Заказать
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
