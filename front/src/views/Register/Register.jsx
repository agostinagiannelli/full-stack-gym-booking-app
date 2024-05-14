import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { registerUser } from '../../helpers/axios'
import { validateUser } from '../../helpers/validateUser'
import { showToast } from '../../helpers/showToast'
import Input from '../../components/Input/Input'
import SubmitButton from '../../components/Buttons/SubmitButton'
import Title from '../../components/Title/Title'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function Register() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        values.identityNumber = parseInt(values.identityNumber);

        registerUser(values)
            .then((res) => {
                showToast({ text: "Success! Welcome aboard, fitness enthusiast! 🚀" });
                localStorage.setItem('userId', res.newUser.id);
                navigate('/my-appointments');
            })
            .catch((err) => {
                console.error(err.response.data);
                showToast({ text: "Oops! Email, ID or username already registered 🚫" });
            })
    };

    return (
        <div className='bg-color'>
            <NavBar />
            <Title
                title="Sign Up"
            />
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
                                    <Input
                                        placeholder="John Smith"
                                        type="text"
                                        name="name"
                                        label="Name"
                                    />
                                    <Input
                                        placeholder="name@example.com"
                                        type="email"
                                        name="email"
                                        label="Email"
                                    />
                                    <Input
                                        placeholder="01/01/1990"
                                        type="date"
                                        name="dateOfBirth"
                                        label="Date Of Birth"
                                    />
                                    <Input
                                        placeholder="11222333"
                                        type="text"
                                        name="identityNumber"
                                        label="Identity Number"
                                    />
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
                                    <Input
                                        placeholder="********"
                                        type="password"
                                        name="passwordConfirmation"
                                        label="Repeat Password"
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