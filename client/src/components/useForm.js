import { useState } from 'react'

const useForm = (callback) => {
    const [values, setValues] = useState({
        jobTitle: '',
        salary: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        callback()
    }

    return {
        handleChange,
        handleSubmit,
        values, setValues
    }

}
export default useForm