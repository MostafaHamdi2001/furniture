import React from "react";
import { useCart } from "react-use-cart";

function ContentSection() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      title: "Nordic Chair",
      price: 50,
      image: "images/product-3.png",
    },
    {
      id: 2,
      title: "Nordic Chair",
      price: 50,
      image: "images/product-1.png",
    },
    {
      id: 3,
      title: "Kruzo Aero Chair",
      price: 78,
      image: "images/product-2.png",
    },
    {
      id: 4,
      title: "Ergonomic Chair",
      price: 43,
      image: "images/product-3.png",
    },
    {
      id: 5,
      title: "Nordic Chair",
      price: 50,
      image: "images/product-3.png",
    },
    {
      id: 6,
      title: "Nordic Chair",
      price: 50,
      image: "images/product-1.png",
    },
    {
      id: 7,
      title: "Kruzo Aero Chair",
      price: 78,
      image: "images/product-2.png",
    },
    {
      id: 8,
      title: "Ergonomic Chair",
      price: 43,
      image: "images/product-3.png",
    },
  ];

  const handleAddToCart = (product) => {
    addItem(product);
  };

  return (
    <div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div
                className="col-12 col-md-4 col-lg-3 mb-5 py-5"
                key={product.id}
              >
                <div className="product-item">
                  <img
                    src={product.image}
                    className="img-fluid product-thumbnail"
                    alt={product.title}
                  />

                  <h3 className="product-title">
                    {product.title}
                  </h3>

                  <strong className="product-price">
                    ${product.price.toFixed(2)}
                  </strong>

                  <button
                    type="button"
                    className="icon-cross border-0 bg-black"
                    onClick={() => handleAddToCart(product)}
                  >
                    <img
                      src="images/cross.svg"
                      className="img-fluid"
                      alt="Add to cart"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;