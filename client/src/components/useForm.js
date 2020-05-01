import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        jobTitle: '',
        salary: '',
        description: '',
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])
    
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
        setIsSubmitting(true)
    }

    return {
        handleChange,
        handleSubmit,
        values, errors, setValues
    }
}
export default useForm