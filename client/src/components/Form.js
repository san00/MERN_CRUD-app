import React from 'react'
import axios from 'axios'
import useForm from './useForm';

function Form() {
    const submit = () => {
        const listing = {
            jobTitle: jobTitle,
            salary: salary,
            description: description
        }
        axios.post('/api/items', listing)
            .then(res => { console.log(res) })
    }

    const { handleChange, handleSubmit, values } = useForm(submit)
    const { jobTitle, salary, description } = values

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create new vacancy</h2>
            <div>
                <label htmlFor='job title'>Job title:
                <input name='jobTitle'
                        type='jobTitle'
                        id='job title'
                        placeholder='job title'
                        onChange={handleChange}
                        value={jobTitle}></input>
                </label>
            </div>

            <div>
                <label htmlFor='salary'>Salary:
                <input name='salary'
                        type='salary'
                        id='salary'
                        placeholder='salary'
                        onChange={handleChange}
                        value={salary}></input>
                </label>
            </div>

            <div>
                <label htmlFor='description'>Description:
                <input name='description'
                        type='description'
                        id='description'
                        placeholder='description'
                        onChange={handleChange}
                        value={description}></input>
                </label>
            </div>
            <label htmlFor='submit'>
                <input type='submit'
                    id='submit'
                    value='save'></input>
            </label>
        </form>
    )
}

export default Form;
