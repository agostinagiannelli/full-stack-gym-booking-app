import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slices'
import { Formik, Form } from 'formik'
import { loginUser } from '../../services/apiServices'
import { Input, SubmitButton, Title, NavBar, Footer } from '../../components'
import { showToast } from '../../helpers'

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        loginUser(values)
            .then((res) => {
                showToast({ text: "Success! Ready to crush your goals? 💥" });
                dispatch(setUser({ user: res.user }));
                navigate('/my-appointments');
            })
            .catch((err) => {
                console.error(err.response.data);
                showToast({ text: "Oops! Invalid username or password 🚫" });
            })
    };

    const isFormEmpty = (values) => {
        return !values.username || !values.password;
    };

    return (
        <div className="bg-color d-flex flex-column min-vh-100">
            <NavBar />
            <Title
                title="Log In"
            />
            <p className="text-center text-white">New here? <span><Link to="/auth/register" className="link-light">Register now</Link></span></p>
            <div className="d-flex flex-fill">
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
                                {({ values, isValid }) => (
                                    <Form>
                                        <Input
                                            placeholder="jsmith"
                                            type="text"
                                            name="username"
                                            label="Username"
                                        />
                                        <Input
                                            placeholder="********"
                                            type="password"
                                            name="password"
                                            label="Password"
                                        />
                                        <div className="d-flex justify-content-center pt-4 pb-5">
                                            <SubmitButton
                                                disabled={!isValid || isFormEmpty(values)}
                                                text="Submit" />
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}