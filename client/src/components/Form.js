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
                <label htmlFor='title'>Title:
                <input type='text' id='title' placeholder='title' onChange={onChangeTitle} value={title}></input>
                </label>
            </div>

            <div>
                <label htmlFor='job title'>Job title:
                <input type='text' id='job title' placeholder='job title' onChange={onChangeJobTitle} value={jobTitle}></input>
                </label>
            </div>

            <div>
                <label htmlFor='school'>School:
                <input type='text' id='school' placeholder='school' onChange={onChangeSchool} value={school}></input>
                </label>
            </div>

            <div>
                <label htmlFor='salary'>Salary:
                <input type='text' id='salary' placeholder='salary' onChange={onChangeSalary} value={salary}></input>
                </label>
            </div>

            <div>
                <label htmlFor='description'>Description:
                <input type='text' id='description' placeholder='description' onChange={onChangeDescription} value={description}></input>
                </label>
            </div>
                <label htmlFor='submit'>
                    <input type='submit' id='submit' value='save'></input>
                </label>
        </form>
    )
}

export default Form;
