import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  productData: [],
  isFetching: false
}

export const getData = createAsyncThunk(
  'todo/fetchInitialTodo',
  async (thunkAPI) => {
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
  }
)

export const todoSilce = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setInitData: () => { }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, actions) => {
      state.productData = actions.payload
    })

  }
})

// Action creators are generated for each case reducer function
export const { setInitData } = todoSilce.actions

export default todoSilce.reducer