import React, { useState } from "react";
import BillingDetails from "./BillingDetails";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { cartNotificationActions } from "../../store";

const Checkout = () => {
  const [toggle01, setToggle01] = useState(false);
  const [toggle02, setToggle02] = useState(false);
  const [toggle03, setToggle03] = useState(false);
  // const [placeOrder, setPlaceOrder] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  // const dispatch = useDispatch();

  const finalBoughtItems = cartItems.map((item) => {
    const total = item.quantity * item.price;
    return (
      <div key={item.id} className="mb-1 flex justify-between text-slate-600">
        <p>
          {item.productName} X {item.quantity}
        </p>
        <span>₹{total}</span>
      </div>
    );
  });

  return (
    <div className="mt-10">
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="lg:flex justify-between">
          <div className="lg:w-[59%] w-full">
            <BillingDetails />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-[38%] w-full">
            <h3 className="font-semibold text-2xl">Your Order</h3>
            <div className="my-6 bg-gray-100 ">
              <div className="py-8 px-10">
                <div className="font-semibold flex justify-between text-lg mb-6">
                  <span>Product</span>
                  <span>Total</span>
                </div>
                <hr className="bg-gray-700 mb-6  dark:bg-gray-700"></hr>
                {finalBoughtItems}
                <hr className="bg-gray-700 mt-5 dark:bg-gray-700"></hr>
                <div className="my-5 flex justify-between">
                  <span className="text-lg">Shipping</span>
                  <span className="text-slate-600">Free shipping</span>
                </div>
                <hr className="bg-gray-700  dark:bg-gray-700"></hr>
                <div className="flex justify-between text-lg font-semibold my-6">
                  <span className="">Total</span>
                  <span className="text-blue-500">₹{totalPrice}</span>
                </div>
                <hr className="bg-gray-700  dark:bg-gray-700"></hr>

                <div className="my-8 ">
                  <h5
                    onClick={() => {
                      setToggle01((prev) => {
                        return !prev;
                      });
                    }}
                    className="cursor-pointer mt-3 mb-1 font-semibold"
                  >
                    Direct bank transfer
                  </h5>
                  {toggle01 && (
                    <p className="text-slate-600 pl-3">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  )}
                  <h5
                    onClick={() => {
                      setToggle02((prev) => {
                        return !prev;
                      });
                    }}
                    className="cursor-pointer mt-3 mb-1 font-semibold"
                  >
                    Check payments
                  </h5>
                  {toggle02 && (
                    <p className="text-slate-600 pl-3">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  )}
                  <h5
                    onClick={() => {
                      setToggle03((prev) => {
                        return !prev;
                      });
                    }}
                    className="cursor-pointer mt-3 mb-1 font-semibold"
                  >
                    Cash on delivery
                  </h5>
                  {toggle03 && (
                    <p className="text-slate-600 pl-3">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
