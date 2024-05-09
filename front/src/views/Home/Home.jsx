import MyAppointments from '../MyAppointments/MyAppointments';
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'

export default function Home() {
    // const isRegistered = false;

    return (
        <div>
            <h1>Welcome</h1>
            <MyAppointments />
            {/* {isRegistered ? <Login /> : <Register />} */}
        </div>
    )
}