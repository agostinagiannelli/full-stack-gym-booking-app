export function validateAppointment(values) {
    const errors = {};
    if (!values.date) {
        errors.date = 'Required';
    } else if (new Date(values.date) < new Date()) {
        errors.date = 'Invalid date: cannot be in the past';
    }
    if (!values.time) {
        errors.time = 'Required';
    }
    return errors;
}