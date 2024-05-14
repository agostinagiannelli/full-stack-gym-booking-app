import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { loginUser } from '../../helpers/axios'
import { showToast } from '../../helpers/showToast'
import Input from '../../components/Input/Input'
import SubmitButton from '../../components/Buttons/SubmitButton'
import Title from '../../components/Title/Title'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        loginUser(values)
            .then((res) => {
                showToast({ text: "Success! Ready to crush your workout goals? 💥" });
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
                <div className="text-center text-white">
                    <p>New here? <span><Link to="/register" className="link-light">Register now</Link></span></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}