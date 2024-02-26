import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ItemsInCart from "../components/cart/ItemsInCartAndWishlist";

const CartPage = () => {
  function Fallback({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
      <div className="text-center mt-10" role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

  return (
    <>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <ItemsInCart identifier={"Cart"} />
      </ErrorBoundary>
    </>
  );
};

export default CartPage;
