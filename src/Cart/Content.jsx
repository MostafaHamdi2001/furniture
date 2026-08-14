import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

function Content() {
  const navigate = useNavigate();

  const {
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  const cartItems = items || [];

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);

    if (!item) return;

    const newQuantity = Math.max(1, item.quantity + delta);

    updateItemQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <form
            className="col-md-12"
            method="post"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <tr key={item.id}>
                        {/* Image */}
                        <td className="product-thumbnail">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-fluid"
                          />
                        </td>

                        {/* Product Name */}
                        <td className="product-name">
                          <h2 className="h5 text-black">
                            {item.title}
                          </h2>
                        </td>

                        {/* Price */}
                        <td>
                          ${Number(item.price).toFixed(2)}
                        </td>

                        {/* Quantity */}
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: "120px" }}
                          >
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-black decrease"
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(item.id, -1)
                                }
                              >
                                &minus;
                              </button>
                            </div>

                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              value={item.quantity}
                              readOnly
                            />

                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-black increase"
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(item.id, 1)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>

                        {/* Total */}
                        <td>
                          $
                          {(
                            Number(item.price) * item.quantity
                          ).toFixed(2)}
                        </td>

                        {/* Remove */}
                        <td>
                          <button
                            type="button"
                            className="btn btn-black btn-sm"
                            onClick={() =>
                              handleRemoveItem(item.id)
                            }
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center py-4"
                      >
                        Your cart is empty.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button
                  type="button"
                  className="btn btn-black btn-sm btn-block"
                >
                  Update Cart
                </button>
              </div>

              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-outline-black btn-sm btn-block"
                  onClick={() => navigate("/shop")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Coupon */}
            <div className="row">
              <div className="col-md-12">
                <label
                  className="text-black h4"
                  htmlFor="coupon"
                >
                  Coupon
                </label>

                <p>
                  Enter your coupon code if you have one.
                </p>
              </div>

              <div className="col-md-8 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control py-3"
                  id="coupon"
                  placeholder="Coupon Code"
                />
              </div>

              <div className="col-md-4">
                <button
                  type="button"
                  className="btn btn-black"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">
                      Subtotal
                    </span>
                  </div>

                  <div className="col-md-6 text-right">
                    <strong className="text-black">
                      ${Number(cartTotal || 0).toFixed(2)}
                    </strong>
                  </div>
                </div>

                {/* Total */}
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">
                      Total
                    </span>
                  </div>

                  <div className="col-md-6 text-right">
                    <strong className="text-black">
                      ${Number(cartTotal || 0).toFixed(2)}
                    </strong>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="row">
                  <div className="col-md-12 mb-5 py-5">
                    <button
                      type="button"
                      className="btn btn-black btn-block btn-lg py-3"
                      onClick={() => navigate("/checkout")}
                      disabled={cartItems.length === 0}
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;