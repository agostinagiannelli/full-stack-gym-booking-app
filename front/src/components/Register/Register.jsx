import { useState } from "react"

export default function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', username: '', password: '' })

    return (
        <div>
            <h1>Register</h1>
            <form action="">
                <label>Name:</label>
                <input type="text" />

                <label>Email:</label>
                <input type="text" />

                <label>Username:</label>
                <input type="text" />

                <label>Password:</label>
                <input type="text" />
            </form>
        </div>
    )
}