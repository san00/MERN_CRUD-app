import React from 'react'

function List({jobPost, removeItem}) {
    const { title, jobTitle, school, salary, description } = jobPost

    return (
        <article>
            <h1>{title}</h1>
            <p>{jobTitle}</p> 
            <p>{school}</p>
            <p>{salary}</p> 
            <p>{description}</p>
            <button type='submit' onClick={removeItem}>delete</button>
        </article>
    )
}

export default List
