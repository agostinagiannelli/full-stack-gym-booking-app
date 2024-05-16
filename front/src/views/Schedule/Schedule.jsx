import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Input, SubmitButton, Title, Logout, NavBar, Footer } from '../../components'
import { scheduleAppointment, validateAppointment, showToast } from '../../helpers'

export default function Schedule() {
    const navigate = useNavigate();

    const userId = useSelector((state) => state.user.userId);

    const handleSubmit = (values) => {
        const appointmentData = { ...values, userId };

        scheduleAppointment(appointmentData)
            .then((res) => {
                showToast({ text: "Class booked! Ready to sweat? 💦" });
                navigate('/my-appointments');
            })
            .catch((err) => {
                console.error(err.response.data);
                showToast({ text: "Oops! Unable to book class 🚫" });
            })
    };

    const isFormEmpty = (values) => {
        return !values.date || !values.time;
    };

    return (
        <div className="bg-image d-flex flex-column min-vh-100">
            <NavBar />
            <Title
                title="Save Your Spot"
            />
            {userId ? (<div className="d-flex flex-fill">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Formik
                                initialValues={{ date: '', time: '' }}
                                validate={validateAppointment}
                                onSubmit={handleSubmit}
                            >
                                {({ values, isValid }) => (
                                    <Form>
                                        <Input
                                            placeholder="01/01/2025"
                                            type="date"
                                            name="date"
                                            label="Date"
                                        />
                                        <div className="form-floating">
                                            <Field
                                                className="form-select"
                                                as="select"
                                                name="time"
                                                id="time">
                                                <option value="">Select a class</option>
                                                <option value="07:00:00">7am Yoga</option>
                                                <option value="08:00:00">8am Crossfit</option>
                                                <option value="17:00:00">5pm Pilates</option>
                                                <option value="18:00:00">6pm Calisthenics</option>
                                                <option value="19:00:00">7pm Yoga</option>
                                                <option value="20:00:00">8pm Crossfit</option>
                                            </Field>
                                            <ErrorMessage
                                                name="time"
                                                component="div"
                                                className="mt-2 errorMessage" />
                                            <label htmlFor="time">Time</label>
                                        </div>
                                        <div className="d-flex justify-content-center pt-4 pb-5">
                                            <SubmitButton
                                                disabled={!isValid || isFormEmpty(values)}
                                                text="Book Now" />
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <Logout />
            )}
            <Footer />
        </div>
    )
}