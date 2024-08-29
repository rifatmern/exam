import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/componentes/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})