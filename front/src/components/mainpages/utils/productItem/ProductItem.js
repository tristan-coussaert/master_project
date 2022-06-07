import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product, isAdmin, handleCheck }) {
  return (
    <div className="product_card">
      <Link to={`/detail/${product._id}`}>
        {isAdmin && (
          <input
            type="checkbox"
            checked={product.checked}
            onChange={() => handleCheck(product._id)}
          />
        )}
        <img src={product.images.url} alt="" />

        <div className="product_box">
          <h2 title={product.title}>{product.title}</h2>
          <span>{product.price} €</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
