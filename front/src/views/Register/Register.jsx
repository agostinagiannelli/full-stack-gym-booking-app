import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/reducer'
import { Formik, Form } from 'formik'
import { Input, SubmitButton, Title, NavBar, Footer } from '../../components'
import { registerUser, validateUser, showToast } from '../../helpers'

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        values.identityNumber = parseInt(values.identityNumber);

        registerUser(values)
            .then((res) => {
                showToast({ text: "Welcome aboard, fitness enthusiast! 🚀" });
                dispatch(setUser(res.newUser.id));
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
            <p className="text-center text-white">Already with us? <span><Link to="/auth/login" className="link-light">Log in now</Link></span></p>
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
                                        label="DOB"
                                    />
                                    <Input
                                        placeholder="11222333"
                                        type="text"
                                        name="identityNumber"
                                        label="ID Number"
                                    />
                                    <Input
                                        placeholder="jsmith"
                                        type="text"
                                        name="username"
                                        label="Username"
                                    />
                                    <div className="row g-3">
                                        <div className="col">
                                            <Input
                                                placeholder="********"
                                                type="password"
                                                name="password"
                                                label="Password"
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                placeholder="********"
                                                type="password"
                                                name="passwordConfirmation"
                                                label="Confirm Password"
                                            />
                                        </div>
                                    </div>
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


//? Code with localStorage

// const navigate = useNavigate();

// const handleSubmit = (values) => {
//     values.identityNumber = parseInt(values.identityNumber);

//     registerUser(values)
//         .then((res) => {
//             showToast({ text: "Welcome aboard, fitness enthusiast! 🚀" });
//             localStorage.setItem('userId', res.newUser.id);
//             navigate('/my-appointments');
//         })
//         .catch((err) => {
//             console.error(err.response.data);
//             showToast({ text: "Oops! Email, ID or username already registered 🚫" });
//         })
// };