export function validateUser(values) {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (
        !/^[a-zA-Z ]{2,30}$/i.test(values.name)
    ) {
        errors.name = 'Invalid name';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Required';
    } else if (
        !/^\d{2}\/\d{2}\/\d{2}$/i.test(values.dateOfBirth)
    ) {
        errors.dateOfBirth = 'Invalid date of birth';
    }
    if (!values.identityNumber) {
        errors.identityNumber = 'Required';
    } else if (
        !/^\d{8}$/i.test(values.identityNumber)
    ) {
        errors.identityNumber = 'Invalid identity number';
    }
    if (!values.username) {
        errors.username = 'Required';
    } else if (
        !/^[a-zA-Z0-9]{2,30}$/i.test(values.username)
    ) {
        errors.username = 'Invalid username';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (
        !/^[a-zA-Z0-9]{8,30}$/i.test(values.password)
    ) {
        errors.password = 'Invalid password';
    }
    return errors;
}