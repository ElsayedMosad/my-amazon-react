import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazonSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findIndex = state.products.findIndex(
        (element) => element.id === action.payload.id
      );
      findIndex === -1
        ? state.products.push({ ...action.payload, quantity: 1 })
        : state.products[findIndex].quantity++;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
    increaseQuantity: (state, action) => {
      // state.products.map((product) => {
      //   if (product.id === action.payload) {
      //     product.quantity++;
      //     return product;
      //   } else {
      //     return product;
      //   }
      // });
      let product = state.products.find(
        (product) => product.id === action.payload
      );
      product.quantity++;
    },
    decreaseQuantity: (state, action) => {
      // console.log(action.payload);
      // state.products.map((product) => {
      //   if (product.id === action.payload.id && action.payload.quantity !== 1) {
      //     product.quantity--;
      //     return product;
      //   } else {
      //     return product;
      //   }
      // });
      let product = state.products.find(
        (product) => product.id === action.payload
      );
      product.quantity !== 1 ? product.quantity-- : "";
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    signOutUser: (state) => {
      state.userInfo = null
    }
  },
});

export const {
  addToCart,
  deleteProduct,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  setUserInfo,
  signOutUser
} = amazonSlice.actions;
export default amazonSlice.reducer;
