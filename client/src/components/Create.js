import React from 'react'
import axios from 'axios'
import useForm from './useForm';

function Create(props) {
    const submit = () => {
        const listing = {
            jobTitle: jobTitle,
            salary: salary,
            description: description
        }
        axios.post('/api/items', listing)
            .then(res => { console.log(res) })
        props.history.push('/');
    }

    const { handleChange, handleSubmit, values } = useForm(submit)
    const { jobTitle, salary, description, validationErrors } = values

    return (
        <div className='content__container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='form__header'>Add vacancy</h2>
                <span className='handle-error'>{validationErrors.jobTitle}</span>
                <input className='form__input' name='jobTitle'
                    type='jobTitle'
                    id='job title'
                    placeholder='job title'
                    onChange={handleChange}
                    value={jobTitle}
                ></input>
                <label className='form__label' htmlFor='job title'>Job title:</label>
                <span className='handle-error'>{validationErrors.salary}</span>
                <input className='form__input' name='salary'
                    type='salary'
                    id='salary'
                    placeholder='salary'
                    onChange={handleChange}
                    value={salary}
                ></input>
                <label className='form__label' htmlFor='salary'>Salary:</label>
                <span className='handle-error'>{validationErrors.description}</span>
                <input className='form__input' name='description'
                    type='description'
                    id='description'
                    placeholder='description'
                    onChange={handleChange}
                    value={description}
                ></input>
                <label className='form__label form__label--description' htmlFor='description'>Description: </label>
                <div className='form__button'>
                    <input className='button' type='submit'
                        id='submit'
                        value='Save job'></input>
                    <label htmlFor='submit'></label>
                </div>
            </form>
        </div>
    )
}

export default Create;
