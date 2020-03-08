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
        <div className='content__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__header'>Add a job</h2>
                <input className='form__input' name='jobTitle'
                    type='jobTitle'
                    id='job title'
                    placeholder='job title'
                    onChange={handleChange}
                    value={jobTitle}
                    required></input>
                <label className='form__label' htmlFor='job title'>Job title:</label>

                <input className='form__input' name='salary'
                    type='salary'
                    id='salary'
                    placeholder='salary'
                    onChange={handleChange}
                    value={salary}
                    required></input>
                <label className='form__label' htmlFor='salary'>Salary:</label>

                <input className='form__input' name='description'
                    type='description'
                    id='description'
                    placeholder='description'
                    onChange={handleChange}
                    value={description}
                    required></input>
                <label className='form__label' htmlFor='description'>Description: </label>
                <div>
                    <input className='button' type='submit'
                        id='submit'
                        value='Save job'></input>
                    <label htmlFor='submit'></label>
                </div>
            </form>
        </div>
    )
}

export default Form;
