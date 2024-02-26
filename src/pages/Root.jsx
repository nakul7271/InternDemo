import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "../store/cart-actions";
import { useEffect } from "react";

let isInitial = true;

const RootLayout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.change) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
