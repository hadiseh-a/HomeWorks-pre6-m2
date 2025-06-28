import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addtoItems: (state, action) => {
      if (!state.find((item) => item === action.payload))
        state.push(action.payload);
    },
    removeFromItems: (state, action) => {
      if (state.find((item) => item === action.payload))
        return state.filter((item) => item !== action.payload);
      console.log(state);
    },clearItems:()=>{
      return[]
    }
  },
});

export const { addtoItems, removeFromItems,clearItems } = itemsSlice.actions;
export default itemsSlice.reducer;
