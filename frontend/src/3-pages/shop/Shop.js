import React, { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import "../../4-css/Shop.css";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [filter, setFilter] = useState(false);

  return (
    <div className="shop-page">
      <header>
        <h2>Boutique</h2>
      </header>
      <div className="filter-part">
        <div className={"filter-display" + (filter ? " open" : "")}>
          <h4 onClick={() => setFilter(!filter)}>Filtres</h4>
          <AiOutlineDown onClick={() => setFilter(!filter)} />
        </div>
        <div className={"filter-container" + (filter ? " open" : "")}></div>
      </div>
      <div className="shop-part">
        <ProductCard link="/modele/product_name" />
        <ProductCard link="/modele/product_name" />
        <ProductCard link="/modele/product_name" />
        <ProductCard link="/modele/product_name" />
        <ProductCard link="/modele/product_name" />
        <ProductCard link="/modele/product_name" />
      </div>
    </div>
  );
}
