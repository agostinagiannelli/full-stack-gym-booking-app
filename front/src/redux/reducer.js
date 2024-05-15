import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        userName: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.userId = action.payload
        },
        removeUser: (state) => {
            state.userId = null
        }
    }
})

export const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState: { myAppointments: [] },
    reducers: {
        setAppointments: (state, action) => {
            state.myAppointments = action.payload
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export const { setAppointments } = appointmentsSlice.actions