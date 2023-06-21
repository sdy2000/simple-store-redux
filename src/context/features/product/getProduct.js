import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com/products/";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (productId, thunkAPI) => {
    try {
      const resp = await axios(url + productId);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
