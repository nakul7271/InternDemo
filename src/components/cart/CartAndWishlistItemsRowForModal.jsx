
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
// import wishlistactions


const CartAndWishlistItemsRowForModal = ({ item, name }) => {
  const dispatch = useDispatch();

  const removeCartItemFully = () => {
    // if (name === "Wishlist") {
    //   dispatch(
    //     wishlistActions.removeWishlistItemFully({
    //       id: item.id,
    //       productName: item.productName,
    //       price: item.price,
    //       quantity: 1,
    //       imageUrl: item.imageUrl,
    //     })
    //   );
    // }
    if (name === "Cart") {
      dispatch(
        cartActions.removeCartItemFully({
          id: item.id
        })
      );
    }
    
  };

  return (
    <>
      <div className="my-5">
      <div className="flex w-full">
        <img
          className=" w-[30%] md:w-[120px]"
          src={`${item.imageUrl}.jpg`}
          alt="#"
        ></img>

        <div className="flex justify-between w-full ml-6 mt-1">
          <div>
            <h5 className="font-semibold mb-3">{item.productName}</h5>
            <p>
              {" "}
              <span>{item.quantity}</span> x <span>{item.price}</span>
            </p>
          </div>
          <div className=" ml-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
              onClick={removeCartItemFully}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
      </div>
      <hr className="bg-slate-200"></hr>
    </>
    
  );
};

export default CartAndWishlistItemsRowForModal;


