import { Formik, Field, Form, ErrorMessage } from 'formik'
import { registerUser } from '../../helpers/axios'
import { validateUser } from '../../helpers/validateUser'
import { showToast } from '../../helpers/showToast'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';

export default function Register() {
    const handleSubmit = (values) => {
        values.identityNumber = parseInt(values.identityNumber);
        registerUser(values)
            .then((res) => {
                showToast({ text: "Success! Welcome aboard, fitness enthusiast! 🚀" }, { destination: "" });
                // Login user after successful registration
            })
            .catch((err) => {
                console.error(err);
                showToast({ text: "Oops! Email, ID or username already registered 🚫" }, { destination: "" });
            })
    };

    return (
        <div className='bg-color'>
            <NavBar />
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
                            initialValues={{ name: '', email: '', dateOfBirth: '', identityNumber: '', username: '', password: '', passwordConfirmation: '' }}
                            validate={validateUser}
                            onSubmit={handleSubmit}
                        >
                            {({ isValid }) => (
                                <Form>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="John Smith"
                                            type="text"
                                            name="name" />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="name@example.com"
                                            type="email"
                                            name="email" />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="01/01/1990"
                                            type="date"
                                            name="dateOfBirth" />
                                        <ErrorMessage
                                            name="dateOfBirth"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="11222333"
                                            type="text"
                                            name="identityNumber" />
                                        <ErrorMessage
                                            name="identityNumber"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="identityNumber">Identity Number</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="jsmith"
                                            type="text"
                                            name="username" />
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="********"
                                            type="password"
                                            name="password" />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="********"
                                            type="password"
                                            name="passwordConfirmation" />
                                        <ErrorMessage
                                            name="passwordConfirmation"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="passwordConfirmation">Repeat Password</label>
                                    </div>
                                    <div className="d-flex justify-content-center pt-4 pb-5">
                                        <button className="btn btn-outline-light btn-lg btn-blue px-5" type="submit" disabled={!isValid}>Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}