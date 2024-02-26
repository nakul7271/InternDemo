import React, { useState } from "react";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";

const CartAndWishlist = () => {
  const [isWOpen, setIsWOpen] = useState(false);
  const [isCOpen, setIsCOpen] = useState(false);

  //   const wishlistItemsArray = useSelector(
  //     (state) => state.wishlist.wishlistItems
  //   );
  //   const totalWishlistQuantity = useSelector(
  //     (state) => state.wishlist.totalQuantity
  //   );

    const cartItemsArray = useSelector((state) => state.cart.cartItems);
    const totalCartQuantity = useSelector((state) => state.cart.totalQuantity);
    const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div className="flex">
        <div className=" mr-1 sm:mr-4">
          <button
            onClick={() => {
              setIsWOpen(true);
            }}
            className="flex text-slate-600 transition-colors duration-300 hover:text-blue-500"
          >
            <span className="pr-0.5 sm:pr-1 pt-3">
              <HiOutlineHeart className="w-9 h-9 " strokeWidth={"1.1px"} />
            </span>
            <span>
              <div className="bg-blue-500 rounded-full w-6 text-white mt-2 sm:mt-0">
                0
              </div>
              <div className="text-inherit hidden sm:block">Wishlist</div>
            </span>
          </button>
          {isWOpen && (
            <Modal
              onClose={() => {
                setIsWOpen(false);
              }}
              name="Wishlist"
              items={[]}
            ></Modal>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setIsCOpen(true);
            }}
            className="flex text-slate-600 transition-colors duration-300 hover:text-blue-400"
          >
            <span className="pr-0.5 sm:pr-1 pt-4">
              <HiOutlineShoppingCart
                className="w-8 h-8"
                strokeWidth={"1.1px"}
              />
            </span>
            <span>
              <div className="bg-blue-500 rounded-full w-6  text-white mt-2 sm:mt-0">
                {totalCartQuantity}
              </div>
              <div className="text-inherit hidden sm:block">My Cart</div>
            </span>
          </button>
          {isCOpen && (
            <Modal
              onClose={() => {
                setIsCOpen(false);
              }}
              name="Cart"
              items={cartItemsArray}
              cartTotalPrice={cartTotalPrice}
            ></Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default CartAndWishlist;
