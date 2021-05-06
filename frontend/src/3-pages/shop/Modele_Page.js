import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ProductCard from "../components/ProductCard";

export default function Modele_Page(props) {
  return (
    <div className="modele-page">
      <header>
        <div className="back-page" onClick={() => props.history.goBack()}>
          <AiOutlineArrowLeft size={25} />
          <h2>Retour</h2>
        </div>
      </header>
      <div className="modele-part">
        <div className="modele-img">
          <img
            alt=""
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2006%2F05%2F23%2F389860%2FeditIMG1709.jpg&f=1&nofb=1"
          />
        </div>
        <div className="modele-details">
          <h2>Modele name</h2>
          <h2>19.99€</h2>
          <p>
            Tempor non est esse aute cupidatat aute cillum culpa eiusmod. Irure
            cillum aliquip proident et qui deserunt ullamco. Dolor quis et
            dolore velit ipsum deserunt ea reprehenderit aliquip fugiat aute.
            Commodo id culpa sunt nisi aliqua eu deserunt labore. Duis Lorem
            tempor consequat ipsum ea. Consectetur id Lorem mollit laboris
            mollit cillum tempor minim nostrud consequat.
          </p>
          <input type="file" />
          <button>Ajouter au panier</button>
        </div>
      </div>
      <div className="modele-similar">
        <h2 className="title">Dans le même style</h2>
        <ProductCard link="/modele/product_name" />
        <ProductCard link="/modele/product_name" />
        <ProductCard link="/modele/product_name" />
      </div>
    </div>
  );
}
