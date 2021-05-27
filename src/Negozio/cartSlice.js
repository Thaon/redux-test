import { createSlice } from "@reduxjs/toolkit";
const shopContents = require("../shop.json");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    glasses: [],
    shop: shopContents,
  },
  reducers: {
    addToCart: (state, action) => {
      //add to cart
      let cartIndex = state.glasses.findIndex((x) => x.ID == action.payload.ID);
      if (cartIndex < 0) {
        //non e' nel carrello
        let newGlasses = { ...action.payload }; //copia, modifica e ripassa
        newGlasses.quantity = 1; //aggiungiamo 1 paio al carrello
        state.glasses.push(newGlasses);
      } else {
        state.glasses[cartIndex].quantity += 1;
      }

      //lower quantity
      let arrayIndex = state.shop.findIndex((x) => x.ID == action.payload.ID);
      state.shop[arrayIndex].quantity -= 1;
    },

    removeFromCart: (state, action) => {
      //remove from cart
      let cartIndex = state.glasses.findIndex((x) => x.ID == action.payload.ID);
      if (cartIndex < 0) {
        //non e' nel carrello
        console.log("come mai?");
      } else {
        state.glasses[cartIndex].quantity -= 1;
        //se non abbiamo piu' occhiali, rimuoviamo l'entry dal carrello
        if (state.glasses[cartIndex].quantity <= 0) {
          //rimuoviamo dal carrello
          state.glasses = state.glasses.filter(
            (x) => x.ID != action.payload.ID
          );
        }
      }

      //add back to shop
      let arrayIndex = state.shop.findIndex((x) => x.ID == action.payload.ID);
      state.shop[arrayIndex].quantity += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;