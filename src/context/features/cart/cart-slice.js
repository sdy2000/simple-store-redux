import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItems: [],
  total_amount: 0,
  total_price: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default cartSlice.reducer;
