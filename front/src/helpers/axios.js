import axios from 'axios'

export async function getUsers() {
    await axios.get('http://localhost:3000/users');
}
export async function getUserById(id) {
    await axios.get(`http://localhost:3000/users/${id}`);
}
export async function registerUser(user) {
    await axios.post('http://localhost:3000/users/register', user)
}
export async function loginUser(credential) {
    await axios.post('http://localhost:3000/users/login', credential);
}

export async function getAppointments(userId) {
    await axios.get("http://localhost:3000/appointments/", userId);
}
export async function getAppointmentById(id) {
    await axios.get(`http://localhost:3000/appointments/${id}`);
}
export async function scheduleAppointment(appointment) {
    await axios.post('http://localhost:3000/appointments/schedule', appointment);
}
export async function cancelAppointment(id) {
    await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
}