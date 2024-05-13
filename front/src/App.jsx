import './reset.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Agenda from './views/Timetable/Timetable'
import Pricing from './views/Pricing/Pricing'
import AboutUs from './views/AboutUs/AboutUs'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Schedule from './views/Schedule/Schedule'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<Agenda />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  )
}

export default App