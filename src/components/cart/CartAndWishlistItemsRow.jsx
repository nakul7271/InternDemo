import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartItemsRow = ({ item }) => {
  const totalAmount = item.price * item.quantity;
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        productName: item.productName,
        price: +item.price,
        quantity: 1,
        imageUrl: item.imageUrl,
      })
    );
  };

  const removeFromCart = () => {
    dispatch(
      cartActions.removeFromCart({
        id: item.id,
        price:item.price
      })
    );
  };

  const removeCartItemFully = () => {
    dispatch(
      cartActions.removeCartItemFully({
        id: item.id
      })
    );
  };

  return (
    <tr key={item.id}>
      <td className="py-8 flex justify-center">
        <img className="w-[100px] " src={`${item.imageUrl}.jpg`} alt=""></img>
      </td>
      <td className="py-8 text-center">{item.productName}</td>
      <td className="py-8 text-center"> {`₹${item.price}`} </td>
      <td className="py-8 ">
        <div className="flex justify-center items-center ">
          <div
            onClick={removeFromCart}
            className="py-2 px-2 border border-slate-200 cursor-pointer"
          >
            -
          </div>
          <input
            className=" py-2 px-2 outline-none border-t border-b border-slate-200 w-[80px] text-center"
            type="text"
            name="amount"
            value={item.quantity}
          />
          <div
            onClick={addCartHandler}
            className=" border border-slate-200 py-2 px-2 cursor-pointer   "
          >
            +
          </div>
        </div>
      </td>
      <td className="py-8 text-center">{`₹${totalAmount}`}</td>
      <td className="py-8">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-slate-600 mr-4 hover:text-blue-600 cursor-pointer"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-slate-600 hover:text-blue-600 cursor-pointer"
            onClick={removeCartItemFully}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
};

export default CartItemsRow;