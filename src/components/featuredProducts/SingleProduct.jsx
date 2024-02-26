import React from "react";
import { AiFillStar } from "react-icons/ai";
import { cartActions } from "../../store";
import { useDispatch } from "react-redux";

const SingleProduct = ({ item }) => {
  const dispatch = useDispatch();

  const stars = [...Array(item.rating)].map((_, i) => {
    return <AiFillStar key={i} fontSize="15px" />;
  });

  const inStock = item.inStock > 0;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        imageUrl: item.image,
        productName: item.name,
        quantity: 1,
        price: +item.price,
      })
    );
  };

  return (
    <div className="border-gray-200 border-2 rounded-sm shadow-lg overflow-hidden hover:transform hover:scale-105 cursor-pointer transition-transform duration-300">
      <div>
        <img className="rounded-sm" src={`${item.image}.jpg`} alt="product01" />
      </div>
      <div className="text-center w-full text-slate-800 ">
        <p data-testid="itemName" className="font-semibold my-1">{item.name}</p>
        <p>{`₹${item.price}`}</p>
        {item.fastDelivery ? <p>Fast Delivery</p> : <p>4 Days Delivery</p>}
        <p className="flex justify-center mt-1">{stars}</p>
        {inStock && (
          <button
            onClick={addToCartHandler}
            className=" hover:text-slate-800 text-sm my-3 py-2 px-5 text-center bg-blue-500 text-white hover:bg-slate-200 font-semibold rounded-md transition-all duration-300"
          >
            ADD TO CART
          </button>
        )}
        {!inStock && (
          <button className="cursor-not-allowed hover:text-slate-800 text-sm my-3 py-2 px-5 text-center bg-blue-300 text-white hover:bg-slate-200 font-semibold rounded-md transition-all duration-300">
            OUT OF STOCK
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
