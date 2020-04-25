function validate(values) {

    let errors = {}

    if (!values.jobTitle) {
        errors.jobTitle = 'Job title cannot be empty!'
    } else if (!/\D/gi.test(values.jobTitle)) {
        errors.jobTitle = 'Job title must contain letters!'
    }
    if (!values.salary) {
        errors.salary = 'Salary cannot be empty!'
    } else if (!/\d/gi.test(values.salary)) {
        errors.salary = 'Salary must be a number!'
    }
    if (!values.description) {
        errors.description = 'Description cannot be empty!'
    }
    else if (values.description.length < 3) {
        errors.description = 'Please provide at least 3 characters!'
    }


    return errors
}

export default validate
