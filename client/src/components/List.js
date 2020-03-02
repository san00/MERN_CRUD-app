import React from 'react'
import { Link } from 'react-router-dom'

function List({ jobPost, removeItem }) {
    const { jobTitle, salary, description, _id } = jobPost

    return (
        <article>
            <h1>{jobTitle}</h1>
            <p>{salary}</p>
            <p>{description}</p>
            <button type='submit' onClick={removeItem}>Delete</button>
            <Link to={`/edit/${_id}`}><button>Edit</button></Link>
        </article>
    )
}

export default List
