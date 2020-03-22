import { useState } from 'react'

const useForm = (callback) => {
    const [values, setValues] = useState({
        jobTitle: '',
        salary: '',
        description: '',
        validationErrors: {}
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        callback()
        validate()
    }

    const validate = () => {
        const { jobTitle, salary, description } = values
        const errors = {}

        if (!jobTitle) {
            errors.jobTitle = 'Job title cannot be empty!'
        } else if (!/\D/gi.test(jobTitle)) {
            errors.jobTitle = 'Job title must contain letters!'
        }
        if (!salary) {
            errors.salary = 'Salary cannot be empty!'
        } else if (!/\d/gi.test(salary)) {
            errors.salary = 'Salary must be a number!'
        }
        if (!description) {
            errors.description = 'Description cannot be empty!'
        }
        else if (description.length < 3) {
            errors.description = 'Please provide at least 3 characters!'
        }

        setValues({ validationErrors: errors })
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}
export default useForm