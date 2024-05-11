import { Formik, Field, Form, ErrorMessage } from 'formik'
import { registerUser } from '../../helpers/axios'
import { validateUser } from '../../helpers/validateUser'
import './RegisterForm.css'

export default function RegisterForm() {
    const handleSubmit = (values) => {
        values.identityNumber = parseInt(values.identityNumber);

        registerUser(values)
            .then(() => {
                alert('User registered successfully');
            })
            .catch(err => {
                console.error(err)
            })
    }

    const errorMessage = (message) => {
        return (
            <div className="mt-2 errorMessage">❌ {message}</div>
        )
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
                            {({ isValid }) => (
                                <Form>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="John Smith"
                                            type="text"
                                            name="name" />
                                        <ErrorMessage name="name" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="name@example.com"
                                            type="email"
                                            name="email" />
                                        <ErrorMessage name="email" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="01/01/90"
                                            type="text"
                                            name="dateOfBirth" />
                                        <ErrorMessage name="dateOfBirth" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingInput">Date Of Birth</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="11222333"
                                            type="text"
                                            name="identityNumber" />
                                        <ErrorMessage name="identityNumber" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingInput">Identity Number</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="jsmith"
                                            type="text"
                                            name="username" />
                                        <ErrorMessage name="username" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="********"
                                            type="text"
                                            name="password" />
                                        <ErrorMessage name="password" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingInput">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-center pt-4 mb-5">
                                        <button className="btn btn-outline-light btn-lg btn-blue" type="submit" disabled={!isValid}>Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}