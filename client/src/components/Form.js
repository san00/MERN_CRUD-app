import React, { useState } from 'react'
import axios from 'axios'

function Form() {
    const [values, setValues] = useState({ jobTitle: '', salary: '', description: '' })
    const {jobTitle, salary, description} = values
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listing = {
            jobTitle: jobTitle,
            salary: salary,
            description: description
        }
        axios.post('/api/items', listing)
            .then(res => { console.log(res) })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create new listing</h2>
          
            <div>
                <label htmlFor='job title'>Job title:
                <input name='jobTitle' type='jobTitle' id='job title' placeholder='job title' onChange={handleChange} value={jobTitle}></input>
                </label>
            </div> 

            <div>
                <label htmlFor='salary'>Salary:
                <input name='salary' type='salary' id='salary' placeholder='salary' onChange={handleChange} value={salary}></input>
                </label>
            </div>

            <div>
                <label htmlFor='description'>Description:
                <input name='description' type='description' id='description' placeholder='description' onChange={handleChange} value={description}></input>
                </label>
            </div> 
            <label htmlFor='submit'>
                <input type='submit' id='submit' value='save'></input>
            </label>
        </form>
    )
}

export default Form;
