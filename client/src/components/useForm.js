import { useState } from 'react'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        jobTitle: '',
        salary: '',
        description: '',
    })

    const [errors, setErrors] = useState({
        jobTitle: '',
        salary: '',
        description: ''
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
        setErrors(validate(values))
        callback()
    }

    return {
        handleChange,
        handleSubmit,
        values, errors
    }
}
export default useForm