import React from 'react'

function List({jobPost, removeItem}) {
    const { jobTitle, salary, description } = jobPost

    return (
        <article>
            <h1>{jobTitle}</h1>
            <p>{salary}</p> 
            <p>{description}</p>
            <button type='submit' onClick={removeItem}>delete</button>
        </article>
    )
}

export default List
