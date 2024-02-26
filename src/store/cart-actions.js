import { cartNotificationActions, cartActions } from "./index";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartNotificationActions.showNotification({
        status: "Pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "api",
        {
          method: "PUT",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice
          }),
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartNotificationActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        cartNotificationActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    // dispatch(
    //     showCartActions.showNotification({
    //       status: "Pending",
    //       title: "fetching",
    //       message: "fetching cart data",
    //     })
    // );

    const sendReq = async () => {
      const response = await fetch(
        "api"
      );

      const responseData = await response.json();

      dispatch(
        cartActions.fetchCart({
          cartItems: responseData.cartItems,
          totalQuantity: responseData.totalQuantity,
          totalPrice: responseData.totalPrice
        })
      );
    };

    try {
      await sendReq();
      // dispatch(
      //     showCartActions.showNotification({
      //       status: "success",
      //       title: "Success!",
      //       message: "Fetch cart data successfully",
      //     })
      //   );
    } catch (error) {
      // dispatch(
      //     showCartActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Fetching cart data failed",
      //     })
      //   );
    }
  };
};
