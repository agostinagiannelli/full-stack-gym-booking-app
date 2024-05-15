import { configureStore } from '@reduxjs/toolkit'
import { userSlice, appointmentsSlice } from './reducer'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        appointments: appointmentsSlice.reducer
    }
})

export default store