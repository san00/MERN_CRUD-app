import React, { useState } from 'react'
import axios from 'axios'

function Form() {
    const [title, setTitle] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [school, setSchool] = useState('')
    const [salary, setSalary] = useState('')
    const [description, setDescription] = useState('')

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeJobTitle = (e) => {
        setJobTitle(e.target.value)
    }

    const onChangeSchool = (e) => {
        setSchool(e.target.value)
    }

    const onChangeSalary = (e) => {
        setSalary(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listing = {
            title: title,
            jobTitle: jobTitle,
            school: school,
            salary: salary,
            description: description
        }
        axios.post('/api/items', listing)
            .then(res => {console.log(res)})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create new listing</h2>
            <div>
                <label htmlFor='form'>Title:
                <input type='text' placeholder='title' onChange={onChangeTitle} value={title}></input>
                </label>
            </div>

            <div>
                <label htmlFor='form'>Job title:
                <input type='text' placeholder='job title' onChange={onChangeJobTitle} value={jobTitle}></input>
                </label>
            </div>

            <div>
                <label htmlFor='form'>School:
                <input type='text' placeholder='school' onChange={onChangeSchool} value={school}></input>
                </label>
            </div>

            <div>
                <label htmlFor='form'>Salary:
                <input type='text' placeholder='salary' onChange={onChangeSalary} value={salary}></input>
                </label>
            </div>

            <div>
                <label htmlFor='form'>Description:
                <input type='text' placeholder='description' onChange={onChangeDescription} value={description}></input>
                </label>
            </div>
                <label htmlFor='form'>
                    <input type='submit' value='save'></input>
                </label>
        </form>
    )
}

export default Form;
