import React from 'react'
import useForm from './useForm'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function Edit(props) {

    const update = (e) => {
        e.preventDefault();

        const listing = {
            jobTitle: jobTitle,
            salary: salary,
            description: description
        }

        axios.put(`/api/items/${props.match.params.id}`, listing)
            .then(res => {
                console.log(res)
            })
    }

    const { handleChange, handleSubmit, values } = useForm(update)
    const { jobTitle, salary, description } = values

    return (
        <>
            <p>Edit vacancy</p>
            <form onSubmit={handleSubmit}>

                <label htmlFor='job title'>Job title:
                <input name='jobTitle'
                        type='jobTitle' id='job title'
                        placeholder='job title'
                        onChange={handleChange}
                        value={jobTitle}
                        required>
                    </input>
                </label>

                <label htmlFor='salary'>Salary:
                <input name='salary'
                        type='salary'
                        id='salary' placeholder='salary'
                        onChange={handleChange}
                        value={salary}
                        required>
                    </input>
                </label>

                <label htmlFor='description'>Description:
                <input name='description'
                        type='description'
                        id='description'
                        placeholder='description'
                        onChange={handleChange}
                        value={description}
                        required>
                    </input>
                </label>
                <div>
                    <button type='submit' onClick={(e) => update(e)}>Update</button>
                </div>
            </form>
        </>
    )
}

export default withRouter(Edit)
