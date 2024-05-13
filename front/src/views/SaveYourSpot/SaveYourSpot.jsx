import { Formik, Field, Form, ErrorMessage } from 'formik'
import { scheduleAppointment } from '../../helpers/axios'
import { validateAppointment } from '../../helpers/validateAppointment'
import { showToast } from '../../helpers/showToast'
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

export default function SaveYourSpot() {
    const handleSubmit = async (values) => {
        console.log(values)
        try {
            await scheduleAppointment(values);
            showToast({ text: "Class booked! Ready to sweat? 💦" }, { destination: "" });
        } catch (err) {
            showToast({ text: "Oops! Unable to book class 🚫" }, { destination: "" });
            console.error(err);
        }
    };

    const errorMessage = (message) => (
        <div className="mt-2 errorMessage">❌ {message}</div>
    );

    return (
        <div className='bg-image'>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center mb-5">
                        <h2 className="my-5 page-title">Save Your Spot</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Formik
                            initialValues={{ date: '', time: '' }}
                            validate={validateAppointment}
                            onSubmit={handleSubmit}
                        >
                            {({ isValid }) => (
                                <Form>
                                    {/* <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="1"
                                            type="number"
                                            name="userId" />
                                        <label htmlFor="floatingInput">User</label>
                                    </div> */}
                                    <div className="form-floating mb-3">
                                        <Field
                                            className="form-control"
                                            placeholder="01/01/2024"
                                            type="date"
                                            name="date" />
                                        <ErrorMessage name="date" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingInput">Date</label>
                                    </div>
                                    <div className="form-floating">
                                        <Field
                                            className="form-select"
                                            as="select"
                                            name="time">
                                            <option value="07:00:00">7am to 8am</option>
                                            <option value="08:00:00">8am to 9am</option>
                                            <option value="17:00:00">5pm to 6pm</option>
                                            <option value="18:00:00">6pm to 7pm</option>
                                            <option value="19:00:00">7pm to 8pm</option>
                                            <option value="20:00:00">8pm to 9pm</option>
                                        </Field>
                                        <ErrorMessage name="time" render={msg => errorMessage(msg)} />
                                        <label htmlFor="floatingSelect">Time</label>
                                    </div>
                                    <div className="d-flex justify-content-center pt-4 pb-5">
                                        <button className="btn btn-outline-light btn-lg btn-blue px-5" type="submit" disabled={!isValid}>Book Now</button>
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