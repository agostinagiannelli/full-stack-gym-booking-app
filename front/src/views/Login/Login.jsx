import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { Input, SubmitButton, Title, NavBar, Footer } from '../../components'
import { loginUser, showToast } from '../../helpers'

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        loginUser(values)
            .then((res) => {
                showToast({ text: "Success! Ready to crush your goals? 💥" });
                localStorage.setItem('userId', res.user.id);
                navigate('/my-appointments');
            })
            .catch((err) => {
                console.error(err.response.data);
                showToast({ text: "Oops! Invalid username or password 🚫" });
            })
    };

    return (
        <div className='bg-color'>
            <NavBar />
            <Title
                title="Log In"
            />
            <p className="text-center text-white">New here? <span><Link to="/auth/register" className="link-light">Register now</Link></span></p>
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
                                            disabled={!isValid}
                                            text="Submit" />
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