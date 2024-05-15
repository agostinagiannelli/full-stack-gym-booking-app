import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        userName: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.userId = action.payload.userId,
            state.userName = action.payload.userName
        },
        removeUser: (state) => {
            state.userId = null,
            state.userName = ''
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