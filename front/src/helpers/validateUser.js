export function validateUser(values) {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (!/^[a-zA-Z ]{2,30}$/i.test(values.name)) {
        errors.name = 'Invalid name: only letters and spaces allowed';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address: only email standard format allowed';
    }
    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Required';
    } else if (new Date(values.dateOfBirth) > new Date()) {
        errors.dateOfBirth = 'Invalid date of birth: cannot be in the future';
    }
    if (!values.identityNumber) {
        errors.identityNumber = 'Required';
    } else if (!/^\d{8}$/i.test(values.identityNumber)) {
        errors.identityNumber = 'Invalid identity number: use 8 digits';
    }
    if (!values.username) {
        errors.username = 'Required';
    } else if (!/^[a-zA-Z0-9]{4,20}$/i.test(values.username)) {
        errors.username = 'Invalid username: only letters and numbers allowed, 4-20 characters long';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (!/^[a-zA-Z0-9]{4,20}$/i.test(values.password)) {
        errors.password = 'Invalid password: only letters and numbers allowed, 4-20 characters long';
    }
    return errors;
}