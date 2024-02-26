import React from "react";
import ReactDOM from "react-dom";
import Classes from "./Modal.module.css";
import { Link } from "react-router-dom";
import CartAndWishlistItemsRowForModal from "../cart/CartAndWishlistItemsRowForModal";

export const Backdrop = (props) => {
  return <div onClick={props.onClose} className={Classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
    const items = props.items.map((item) => {
      return <CartAndWishlistItemsRowForModal key={item.id} item={item} name={props.name} />;
    });


  return (
    <nav className={Classes.modal}>
      <div className="flex justify-between py-4">
        <div className=" font-semibold">{props.name}</div>
        <div className="">
          <button onClick={props.onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-slate-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr className="bg-gray-700  dark:bg-gray-700"></hr>
      {items}
      {props.name === "Wishlist" && (
        <div className="my-14">
          <Link to="/wishlist" onClick={props.onClose}>
            <button className="w-full text-slate-800 py-3 text-center hover:bg-blue-500 hover:text-white bg-slate-200 font-semibold rounded-md transition-all duration-300">
              VIEW WISHLIST
            </button>
          </Link>
        </div>
      )}
      {props.name === "Cart" && (
        <div>
          <div className="flex justify-between my-4">
            <span className="font-semibold ">Subtotal :</span>
            <span className="text-red-500">₹{props.cartTotalPrice}</span>
          </div>
          <hr className="bg-slate-200"></hr>
          <div>
            <Link to="/cart" onClick={props.onClose}>
              <button className="w-full text-slate-800 py-3 my-8 text-center hover:bg-blue-500 hover:text-white bg-slate-200 font-semibold rounded-md transition-all duration-300">
                VIEW CART
              </button>
            </Link>
            <Link to="/checkout" onClick={props.onClose}>
              <button className="w-full hover:text-slate-800 py-3 mb-8 text-center bg-blue-500 text-white  hover:bg-slate-200 font-semibold rounded-md transition-all duration-300">
                CHECKOUT
              </button>
            </Link>
          </div>
          <p className="text-slate-500 text-sm mb-12">
            Free Shipping on All Orders Over $100!
          </p>
        </div>
      )}
    </nav>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClose}
          name={props.name}
          items={props.items}
          cartTotalPrice={props.cartTotalPrice}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
