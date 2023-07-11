import { configureStore } from "@reduxjs/toolkit";
import userReduser from './slices/userSlice'
import todoReduser from './slices/todoSlice'

const store = configureStore({
  reducer: {
    user: userReduser,
    todo: todoReduser,
  }
})

export default store
