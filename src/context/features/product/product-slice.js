import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default productSlice.reducer;
