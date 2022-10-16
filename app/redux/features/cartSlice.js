import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: { items: [], restaurantName: "" },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (action.payload.checkboxValue) {
        state.selectedItems = {
          items: [...state.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        state.selectedItems = {
          items: [
            ...state.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = cartSlice.actions;

export default cartSlice.reducer;
