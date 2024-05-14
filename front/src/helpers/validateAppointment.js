export default function validateAppointment(values) {
    const errors = {};
    if (!values.date) {
        errors.date = `⚠️ Hey, this one's mandatory!`;
    } else if (new Date(values.date) < new Date()) {
        errors.date = `⚠️ Whoops! Date can't be in the past`;
    }
    if (!values.time) {
        errors.time = `⚠️ Hey, this one's mandatory!`;
    }
    return errors;
}