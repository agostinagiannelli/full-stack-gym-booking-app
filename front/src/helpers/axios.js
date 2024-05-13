import axios from 'axios'

export async function getUsers() {
    const response = await axios.get('http://localhost:3000/users');
    return response.data;
}
export async function getUserById(id) {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    return response.data;
}
export async function registerUser(user) {
    const response = await axios.post('http://localhost:3000/users/register', user);
    return response.data;
}
export async function loginUser(credential) {
    const response = await axios.post('http://localhost:3000/users/login', credential);
    return response.data;
}

export async function getAppointments(userId) {
    const response = await axios.get("http://localhost:3000/appointments/", userId);
    return response.data;
}
export async function getAppointmentById(id) {
    const response = await axios.get(`http://localhost:3000/appointments/${id}`);
    return response.data;
}
export async function scheduleAppointment(appointment) {
    const userId = localStorage.getItem('userId');
    const response = await axios.post(`http://localhost:3000/appointments/schedule`, { ...appointment, userId });
    return response.data;
}
export async function cancelAppointment(id) {
    const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
    return response.data;
}