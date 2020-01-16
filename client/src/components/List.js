import React from 'react'

function List({jobPost}) {

    return (
        <article>
            <h1>{jobPost.title}</h1>
            <p>{jobPost.jobTitle}</p> 
            <p>{jobPost.school}</p>
            <p>{jobPost.salary}</p> 
            <p>{jobPost.description}</p>   
        </article>
    )
}

export default List
