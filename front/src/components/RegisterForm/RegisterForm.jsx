import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import { validateUser } from '../../helpers/validateUser'
import './RegisterForm.css'

export default function RegisterForm() {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = (values) => {
        values.identityNumber = parseInt(values.identityNumber);
        values.dateOfBirth = new Date(values.dateOfBirth);

        axios.post('http://localhost:3000/users/register', values)
            .then(() => {
                setSuccess(true)
                setError('')
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err.response.data)
                setSuccess(false)
            })
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center mb-5">
                        <h2 className="my-5 page-title">Sign Up</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Formik
                            initialValues={{ name: '', email: '', dateOfBirth: '', identityNumber: '', username: '', password: '' }}
                            validate={validateUser}
                            onSubmit={(values) => { handleSubmit(values) }}
                        >
                            <Form>
                                <div className="form-floating mb-3">
                                    <Field
                                        className="form-control"
                                        placeholder="John Smith"
                                        type="text"
                                        name="name" />
                                    <ErrorMessage name="name" />
                                    <label htmlFor="floatingInput">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="email"
                                        name="email" />
                                    <ErrorMessage name="email" />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field
                                        className="form-control"
                                        placeholder="01/01/90"
                                        type="text"
                                        name="dateOfBirth" />
                                    <ErrorMessage name="dateOfBirth" />
                                    <label htmlFor="floatingInput">Date Of Birth</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="text"
                                        name="identityNumber" />
                                    <ErrorMessage name="identityNumber" />
                                    <label htmlFor="floatingInput">Identity Number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="text"
                                        name="username" />
                                    <ErrorMessage name="username" />
                                    <label htmlFor="floatingInput">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field
                                        className="form-control"
                                        placeholder="name@example.com"
                                        type="text"
                                        name="password" />
                                    <ErrorMessage name="password" />
                                    <label htmlFor="floatingInput">Password</label>
                                </div>
                                <div className="d-flex justify-content-center pt-4">
                                    <button className="btn btn-outline-light btn-lg btn-blue" type="submit">Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}