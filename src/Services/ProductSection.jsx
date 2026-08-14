import React from "react";
import { useCart } from "react-use-cart";

function ProductSection() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      title: "Nordic Chair",
      price: 50,
      image: "images/product-1.png",
    },
    {
      id: 2,
      title: "Kruzo Aero Chair",
      price: 78,
      image: "images/product-2.png",
    },
    {
      id: 3,
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
      {/* Start Product Section */}
      <div className="product-section pt-0 mt-5">
        <div className="container">
          <div className="row">

            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>

              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit
                imperdiet dolor tempor tristique.
              </p>

              <p>
                <a href="/shop" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {/* End Column 1 */}

            {/* Product 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="product-item">

                <img
                  src={products[0].image}
                  className="img-fluid product-thumbnail"
                  alt={products[0].title}
                />

                <h3 className="product-title">
                  {products[0].title}
                </h3>

                <strong className="product-price">
                  ${products[0].price.toFixed(2)}
                </strong>

                <button
                  type="button"
                  className="icon-cross border-0 bg-black"
                  onClick={() => handleAddToCart(products[0])}
                >
                  <img
                    src="images/cross.svg"
                    className="img-fluid"
                    alt="Add to cart"
                  />
                </button>

              </div>
            </div>

            {/* Product 2 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="product-item">

                <img
                  src={products[1].image}
                  className="img-fluid product-thumbnail"
                  alt={products[1].title}
                />

                <h3 className="product-title">
                  {products[1].title}
                </h3>

                <strong className="product-price">
                  ${products[1].price.toFixed(2)}
                </strong>

                <button
                  type="button"
                  className="icon-cross border-0 bg-black"
                  onClick={() => handleAddToCart(products[1])}
                >
                  <img
                    src="images/cross.svg"
                    className="img-fluid"
                    alt="Add to cart"
                  />
                </button>

              </div>
            </div>

            {/* Product 3 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <div className="product-item">

                <img
                  src={products[2].image}
                  className="img-fluid product-thumbnail"
                  alt={products[2].title}
                />

                <h3 className="product-title">
                  {products[2].title}
                </h3>

                <strong className="product-price">
                  ${products[2].price.toFixed(2)}
                </strong>

                <button
                  type="button"
                  className="icon-cross border-0 bg-black"
                  onClick={() => handleAddToCart(products[2])}
                >
                  <img
                    src="images/cross.svg"
                    className="img-fluid"
                    alt="Add to cart"
                  />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Product Section */}
    </div>
  );
}

export default ProductSection;