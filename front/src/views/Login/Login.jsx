import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginUser } from '../../helpers/axios'
import { showToast } from '../../helpers/showToast'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';

export default function Login() {
    const handleSubmit = (values) => {
        loginUser(values)
            .then((res) => {
                showToast({ text: "Success! Ready to crush your workout goals? 💥" }, { destination: "" });
                localStorage.setItem('userId', res.user.id);
                // Navigate to the user's appointments
            })
            .catch((err) => {
                console.error(err);
                showToast({ text: "Oops! Invalid username or password 🚫" }, { destination: "" });
            })
    };

    return (
        <div className='bg-color'>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center mb-5">
                        <h2 className="my-5 page-title">Log In</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validate={({ username, password }) => {
                                const errors = {};
                                if (!username) {
                                    errors.username = `⚠️ Hey, this one's mandatory!`;
                                }
                                if (!password) {
                                    errors.password = `⚠️ Hey, this one's mandatory!`;
                                }
                                return errors;
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ isValid }) => (
                                <Form>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="jsmith"
                                            type="text"
                                            name="username"
                                        />
                                        <ErrorMessage name="username"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="********"
                                            type="password"
                                            name="password"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-center pt-4 pb-5">
                                        <button className="btn btn-outline-light btn-lg btn-blue px-5" type="submit" disabled={!isValid}>
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}