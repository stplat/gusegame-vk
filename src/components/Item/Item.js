import React, { useState, useEffect } from "react";
import "swiper/css";
import "./Item.css";
import bnet from "../../img/icons/bnet.svg";
import steam from "../../img/icons/steam.svg";
import nint from "../../img/icons/nint.svg";
import xbox from "../../img/icons/xbox.svg";
import ps from "../../img/icons/ps.svg";

const Item = ({ id, item }) => {
  const [productId, setProductId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  const clickOnProduct = (e) => {
    const id = e.currentTarget.dataset.id;

    setProductId(id);
    go({ panelName: "product", productId: id });
  };

  function distributorIcon(distributorId) {
    let icon = bnet;
    switch (distributorId) {
      case 2:
        icon = steam;
        break;
      // case 3:
      //   icon = epic;
      //   break;
      case 4:
        icon = ps;
        break;
      case 5:
        icon = xbox;
        break;
      case 6:
        icon = nint;
        break;
      default:
        icon = bnet;
    }

    return icon;
  }

  return (
    <div className="item">
      <img src={item.image_path} />
      <div className="item-currency">
        <img src={item.currency.icon} />
      </div>
      <div className="item-bottom">
        <div className="item-name">{item.name}</div>
        <div className="item-sub-name">{item.category.name}</div>
        <div className="item-prop">
          <div
            className="item-icon"
            style={{ background: item.distributor.color }}
          >
            <img src={item.distributor.icon} />
          </div>
          <div className="item-price">
            {item.discount
              ? Math.round((item.price * (100 - item.discount)) / 100)
              : item.price}
            {item.discount ? (
              <div className="item-price-old">{item.price}р</div>
            ) : (
              ""
            )}
          </div>
          <div className="item-type">
            <img
              src={item.product_type.icon}
              alt={item.product_type.name}
              title={item.product_type.name}
            />
          </div>
          <div
            className="item-prop-bottom"
            style={{ background: item.distributor.color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Item;
