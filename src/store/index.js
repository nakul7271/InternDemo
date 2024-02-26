import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  change: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    fetchCart(state, action) {
      state.cartItems = action.payload.cartItems || [];
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
    addToCart(state, action) {
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
      state.change = true;

      const found = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (found) {
        found.quantity++;
        return;
      }

      state.cartItems.push({
        id: action.payload.id,
        imageUrl: action.payload.imageUrl,
        productName: action.payload.productName,
        quantity: action.payload.quantity,
        price: action.payload.price,
      });
    },

    removeFromCart(state, action) {
      state.totalQuantity--;
      state.totalPrice -= action.payload.price;
      state.change = true;

      const found = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (found.quantity > 1) {
        found.quantity--;

        return;
      }
      state.cartItems = state.cartItems.filter((item) => {
        return item !== found;
      });
    },
    removeCartItemFully(state, action) {
      state.change = true;

      const found = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      state.totalQuantity -= found.quantity;
      state.totalPrice -= found.quantity * found.price;

      state.cartItems = state.cartItems.filter((item) => {
        return item !== found;
      });
    },
    removeAll(state) {
      state.change = true;
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

const initialProductState = {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
  sortByOrder: "",
  // reload: false,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    sortByOrder(state, action) {
      state.sortByOrder = action.payload;
      // state.reload = false;
    },
    byStocks(state) {
      state.byStock = !state.byStock;
      // state.reload = false;
    },
    byFastDelivery(state) {
      state.byFastDelivery = !state.byFastDelivery;
      // state.reload = false;
    },
    byRating(state, action) {
      state.byRating = action.payload;
      // state.reload = false;
    },
    searchQuery(state, action) {
      state.searchQuery = action.payload;
      // state.reload = false;
    },
    clearAll(state) {
      state.byStock = false;
      state.byFastDelivery = false;
      state.byRating = 0;
      state.searchQuery = "";
      state.sortByOrder = "";
      // state.reload = true;
    },
  },
});

const showCartNotificationSlice = createSlice({
  name: "showCartNotification",
  initialState: { notification: null},
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  //   placeOrder(state, action) {
  //     state.placeOrder = action.payload;
  //   }
   },

});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    showCartNotification: showCartNotificationSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export const productActions = productSlice.actions;
export const cartNotificationActions = showCartNotificationSlice.actions;

export default store;
