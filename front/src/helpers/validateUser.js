export default function validateUser(values) {
    const errors = {};
    if (!values.name) {
        errors.name = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z ]{2,30}$/i.test(values.name)) {
        errors.name = `⚠️ Names should have 2-30 characters using only letters and spaces`;
    }
    if (!values.email) {
        errors.email = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)) {
        errors.email = `⚠️ That doesn't look like an email. Try again!`;
    }
    if (!values.dateOfBirth) {
        errors.dateOfBirth = `⚠️ Hey, this one's mandatory!`;
    } else if (new Date(values.dateOfBirth) > new Date()) {
        errors.dateOfBirth = `⚠️ Whoops! Your birthdate can't be in the future`;
    }
    if (!values.identityNumber) {
        errors.identityNumber = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^\d{8}$/i.test(values.identityNumber)) {
        errors.identityNumber = `⚠️ ID should have exactly 8 digits`;
    }
    if (!values.username) {
        errors.username = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z0-9]{4,20}$/i.test(values.username)) {
        errors.username = `⚠️ Usernames can only have letters and numbers, 4-20 characters`;
    }
    if (!values.password) {
        errors.password = `⚠️ Hey, this one's mandatory!`;
    } else if (!/^[a-zA-Z0-9]{4,20}$/i.test(values.password)) {
        errors.password = `⚠️ Passwords should have 4-20 characters with only letters and numbers`;
    }
    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = `⚠️ Hey, this one's mandatory!`;
    } else if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = `⚠️ Passwords don't match`;
    }
    return errors;
}