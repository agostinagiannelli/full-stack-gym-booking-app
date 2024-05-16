import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        userName: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.userId = action.payload.user.id,
            state.userName = action.payload.user.name
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