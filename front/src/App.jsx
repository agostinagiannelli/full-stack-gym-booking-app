import { Routes, Route } from 'react-router-dom'
import { Home, Register, Login, Pricing, AboutUs, MyAppointments, Schedule } from './views'
import './reset.css'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App