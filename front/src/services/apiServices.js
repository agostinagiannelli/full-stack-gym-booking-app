import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const apiService = axios.create({
    baseURL: API_URL
});

export async function getUsers() {
    const response = await apiService.get('/users');
    return response.data;
};
export async function getUserById(id) {
    const response = await apiService.get(`/users/${id}`);
    return response.data;
};
export async function registerUser(user) {
    const response = await apiService.post('/users/register', user);
    return response.data;
};
export async function loginUser(credential) {
    const response = await apiService.post('/users/login', credential);
    return response.data;
};

export async function getAppointments() {
    const response = await apiService.get(`/appointments/`);
    return response.data;
};
export async function getAppointmentById(id) {
    const response = await apiService.get(`/appointments/${id}`);
    return response.data;
};
export async function scheduleAppointment(appointment) {
    const response = await apiService.post('/appointments/schedule', appointment);
    return response.data;
};
export async function cancelAppointment(id) {
    const response = await apiService.put(`/appointments/cancel/${id}`);
    return response.data;
};