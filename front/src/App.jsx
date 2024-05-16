import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs, Pricing, Register, Login, MyAppointments, Schedule, Profile, NotFound } from './views'
import './reset.css'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App