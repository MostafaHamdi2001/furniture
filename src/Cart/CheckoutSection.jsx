import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const PAYMENT_METHODS = [
  {
    id: "collapsebank",
    title: "Direct Bank Transfer",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
  },
  {
    id: "collapsecheque",
    title: "Cheque Payment",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
  },
  {
    id: "collapsepaypal",
    title: "Paypal",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
  },
];

function CheckoutSection() {
  const navigate = useNavigate();

  // Get cart data from react-use-cart
 const {
  items = [],
  removeItem,
} = useCart();

const subTotal = items.reduce(
  (total, item) =>
    total +
    Number(item.price) * Number(item.quantity),
  0
);

const handlePlaceOrder = () => {
  items.forEach((item) => {
    removeItem(item.id);
  });

  navigate("/thankyou");
};

  return (
    <div>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Checkout</h1>
              </div>
            </div>

            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="untree_co-section">
        <div className="container">

          {/* Returning Customer */}
          <div className="row mb-5">
            <div className="col-md-12">
              <div
                className="border p-4 rounded"
                role="alert"
              >
                Returning customer?{" "}
                <a href="#">Click here</a> to login
              </div>
            </div>
          </div>

          <div className="row">

            {/* =========================
                BILLING DETAILS
            ========================== */}
            <div className="col-md-6 mb-5 mb-md-0">

              <h2 className="h3 mb-3 text-black">
                Billing Details
              </h2>

              <div className="p-3 p-lg-5 border bg-white">

                {/* Country */}
                <div className="form-group">
                  <label
                    htmlFor="c_country"
                    className="text-black"
                  >
                    Country{" "}
                    <span className="text-danger">*</span>
                  </label>

                  <select
                    id="c_country"
                    className="form-control"
                  >
                    <option value="1">
                      Select a country
                    </option>
                    <option value="2">
                      Bangladesh
                    </option>
                    <option value="3">
                      Algeria
                    </option>
                    <option value="4">
                      Afghanistan
                    </option>
                    <option value="5">
                      Ghana
                    </option>
                    <option value="6">
                      Albania
                    </option>
                    <option value="7">
                      Bahrain
                    </option>
                    <option value="8">
                      Colombia
                    </option>
                    <option value="9">
                      Dominican Republic
                    </option>
                  </select>
                </div>

                {/* First Name / Last Name */}
                <div className="form-group row">

                  <div className="col-md-6">
                    <label
                      htmlFor="c_fname"
                      className="text-black"
                    >
                      First Name{" "}
                      <span className="text-danger">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="c_fname"
                      name="c_fname"
                    />
                  </div>

                  <div className="col-md-6">
                    <label
                      htmlFor="c_lname"
                      className="text-black"
                    >
                      Last Name{" "}
                      <span className="text-danger">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="c_lname"
                      name="c_lname"
                    />
                  </div>

                </div>

                {/* Company */}
                <div className="form-group row">
                  <div className="col-md-12">

                    <label
                      htmlFor="c_companyname"
                      className="text-black"
                    >
                      Company Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="c_companyname"
                      name="c_companyname"
                    />

                  </div>
                </div>

                {/* Address */}
                <div className="form-group row">
                  <div className="col-md-12">

                    <label
                      htmlFor="c_address"
                      className="text-black"
                    >
                      Address{" "}
                      <span className="text-danger">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                    />

                  </div>
                </div>

                <div className="form-group mt-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />

                </div>

                {/* State / Postal */}
                <div className="form-group row">

                  <div className="col-md-6">

                    <label
                      htmlFor="c_state_country"
                      className="text-black"
                    >
                      State / Country{" "}
                      <span className="text-danger">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="c_state_country"
                      name="c_state_country"
                    />

                  </div>

                  <div className="col-md-6">

                    <label
                      htmlFor="c_postal_zip"
                      className="text-black"
                    >
                      Postal / Zip{" "}
                      <span className="text-danger">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="c_postal_zip"
                      name="c_postal_zip"
                    />

                  </div>

                </div>

                {/* Email / Phone */}
                <div className="form-group row mb-5">

                  <div className="col-md-6">

                    <label
                      htmlFor="c_email_address"
                      className="text-black"
                    >
                      Email Address{" "}
                      <span className="text-danger">
                        *
                      </span>
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="c_email_address"
                      name="c_email_address"
                    />

                  </div>

                  <div className="col-md-6">

                    <label
                      htmlFor="c_phone"
                      className="text-black"
                    >
                      Phone{" "}
                      <span className="text-danger">
                        *
                      </span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                    />

                  </div>

                </div>

                {/* Create Account */}
                <div className="form-group">

                  <label
                    htmlFor="c_create_account"
                    className="text-black"
                    data-bs-toggle="collapse"
                    href="#create_an_account"
                    role="button"
                    aria-expanded="false"
                    aria-controls="create_an_account"
                  >

                    <input
                      type="checkbox"
                      value="1"
                      id="c_create_account"
                    />{" "}
                    Create an account?

                  </label>

                  <div
                    className="collapse"
                    id="create_an_account"
                  >

                    <div className="py-2 mb-4">

                      <p className="mb-3">
                        Create an account by entering
                        the information below. If you are
                        a returning customer please login
                        at the top of the page.
                      </p>

                      <div className="form-group">

                        <label
                          htmlFor="c_account_password"
                          className="text-black"
                        >
                          Account Password
                        </label>

                        <input
                          type="password"
                          className="form-control"
                          id="c_account_password"
                          name="c_account_password"
                        />

                      </div>

                    </div>

                  </div>

                </div>

                {/* Different Address */}
                <div className="form-group">

                  <label
                    htmlFor="c_ship_different_address"
                    className="text-black"
                    data-bs-toggle="collapse"
                    href="#ship_different_address"
                    role="button"
                    aria-expanded="false"
                    aria-controls="ship_different_address"
                  >

                    <input
                      type="checkbox"
                      value="1"
                      id="c_ship_different_address"
                    />{" "}
                    Ship To A Different Address?

                  </label>

                  <div
                    className="collapse"
                    id="ship_different_address"
                  >

                    <div className="py-2">

                      <div className="form-group">

                        <label
                          htmlFor="c_diff_country"
                          className="text-black"
                        >
                          Country{" "}
                          <span className="text-danger">
                            *
                          </span>
                        </label>

                        <select
                          id="c_diff_country"
                          className="form-control"
                        >
                          <option value="1">
                            Select a country
                          </option>
                          <option value="2">
                            Bangladesh
                          </option>
                          <option value="3">
                            Algeria
                          </option>
                          <option value="4">
                            Afghanistan
                          </option>
                          <option value="5">
                            Ghana
                          </option>
                          <option value="6">
                            Albania
                          </option>
                          <option value="7">
                            Bahrain
                          </option>
                          <option value="8">
                            Colombia
                          </option>
                          <option value="9">
                            Dominican Republic
                          </option>
                        </select>

                      </div>

                      <div className="form-group row">

                        <div className="col-md-6">

                          <label
                            htmlFor="c_diff_fname"
                            className="text-black"
                          >
                            First Name{" "}
                            <span className="text-danger">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="c_diff_fname"
                            name="c_diff_fname"
                          />

                        </div>

                        <div className="col-md-6">

                          <label
                            htmlFor="c_diff_lname"
                            className="text-black"
                          >
                            Last Name{" "}
                            <span className="text-danger">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="c_diff_lname"
                            name="c_diff_lname"
                          />

                        </div>

                      </div>

                      <div className="form-group row">

                        <div className="col-md-12">

                          <label
                            htmlFor="c_diff_companyname"
                            className="text-black"
                          >
                            Company Name
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="c_diff_companyname"
                            name="c_diff_companyname"
                          />

                        </div>

                      </div>

                      <div className="form-group row mb-3">

                        <div className="col-md-12">

                          <label
                            htmlFor="c_diff_address"
                            className="text-black"
                          >
                            Address{" "}
                            <span className="text-danger">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="c_diff_address"
                            name="c_diff_address"
                            placeholder="Street address"
                          />

                        </div>

                      </div>

                      <div className="form-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />

                      </div>

                      <div className="form-group row">

                        <div className="col-md-6">

                          <label
                            htmlFor="c_diff_state_country"
                            className="text-black"
                          >
                            State / Country{" "}
                            <span className="text-danger">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="c_diff_state_country"
                            name="c_diff_state_country"
                          />

                        </div>

                        <div className="col-md-6">

                          <label
                            htmlFor="c_diff_postal_zip"
                            className="text-black"
                          >
                            Postal / Zip{" "}
                            <span className="text-danger">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="c_diff_postal_zip"
                            name="c_diff_postal_zip"
                          />

                        </div>

                      </div>

                      <div className="form-group row mb-5">

                        <div className="col-md-6">

                          <label
                            htmlFor="c_diff_email_address"
                            className="text-black"
                          >
                            Email Address{" "}
                            <span className="text-danger">
                              *
                            </span>
                          </label>

                          <input
                            type="email"
                            className="form-control"
                            id="c_diff_email_address"
                            name="c_diff_email_address"
                          />

                        </div>

                        <div className="col-md-6">

                          <label
                            htmlFor="c_diff_phone"
                            className="text-black"
                          >
                            Phone{" "}
                            <span className="text-danger">
                              *
                            </span>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="c_diff_phone"
                            name="c_diff_phone"
                            placeholder="Phone Number"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Order Notes */}
                <div className="form-group">

                  <label
                    htmlFor="c_order_notes"
                    className="text-black"
                  >
                    Order Notes
                  </label>

                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Write your notes here..."
                  ></textarea>

                </div>

              </div>
            </div>

            {/* =========================
                RIGHT SIDE
            ========================== */}
            <div className="col-md-6">

              {/* Coupon */}
              <div className="row mb-5">

                <div className="col-md-12">

                  <h2 className="h3 mb-3 text-black">
                    Coupon Code
                  </h2>

                  <div className="p-3 p-lg-5 border bg-white">

                    <label
                      htmlFor="c_code"
                      className="text-black mb-3"
                    >
                      Enter your coupon code if you have
                      one
                    </label>

                    <div className="input-group w-75 couponcode-wrap">

                      <input
                        type="text"
                        className="form-control me-2"
                        id="c_code"
                        placeholder="Coupon Code"
                        aria-label="Coupon Code"
                      />

                      <div className="input-group-append">

                        <button
                          className="btn btn-black btn-sm"
                          type="button"
                        >
                          Apply
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* =========================
                  YOUR ORDER
              ========================== */}
              <div className="row mb-5">

                <div className="col-md-12">

                  <h2 className="h3 mb-3 text-black">
                    Your Order
                  </h2>

                  <div className="p-3 p-lg-5 border bg-white">

                    <table className="table site-block-order-table mb-5">

                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>

                      <tbody>

                        {/* Products */}
                        {items.length > 0 ? (
                          items.map((item) => (
                            <tr key={item.id}>

                              <td>
                                {item.title}

                                <strong className="mx-2">
                                  x
                                </strong>

                                {item.quantity}
                              </td>

                              <td>
                                $
                                {(
                                  Number(item.price) *
                                  Number(item.quantity)
                                ).toFixed(2)}
                              </td>

                            </tr>
                          ))
                        ) : (
                          <tr>

                            <td
                              colSpan="2"
                              className="text-center"
                            >
                              Your cart is empty
                            </td>

                          </tr>
                        )}

                        {/* Subtotal */}
                        <tr>

                          <td className="text-black font-weight-bold">
                            <strong>
                              Subtotal
                            </strong>
                          </td>

                          <td className="text-black font-weight-bold">
                            <strong>
                              ${subTotal.toFixed(2)}
                            </strong>
                          </td>

                        </tr>

                        {/* Order Total */}
                        <tr>

                          <td className="text-black font-weight-bold">
                            <strong>
                              Order Total
                            </strong>
                          </td>

                          <td className="text-black font-weight-bold">
                            <strong>
                              ${subTotal.toFixed(2)}
                            </strong>
                          </td>

                        </tr>

                      </tbody>

                    </table>

                    {/* =========================
                        PAYMENT METHODS
                    ========================== */}

                    {PAYMENT_METHODS.map(
                      (method, index) => (
                        <div
                          key={method.id}
                          className={`border p-3 ${
                            index ===
                            PAYMENT_METHODS.length - 1
                              ? "mb-5"
                              : "mb-3"
                          }`}
                        >

                          <h3 className="h6 mb-0">

                            <a
                              className="d-block"
                              data-bs-toggle="collapse"
                              href={`#${method.id}`}
                              role="button"
                              aria-expanded="false"
                              aria-controls={method.id}
                            >
                              {method.title}
                            </a>

                          </h3>

                          <div
                            className="collapse"
                            id={method.id}
                          >

                            <div className="py-2">

                              <p className="mb-0">
                                {method.description}
                              </p>

                            </div>

                          </div>

                        </div>
                      )
                    )}

                    {/* =========================
                        PLACE ORDER
                    ========================== */}

                    <div className="form-group">

                      <button
                        type="button"
                        className="btn btn-black btn-lg py-3 btn-block"
                        onClick={handlePlaceOrder}
                        disabled={items.length === 0}
                      >
                        Place Order
                      </button>

                    </div>

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

export default CheckoutSection;