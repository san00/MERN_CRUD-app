import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <h1>Job vacancies</h1>
            <Link to='/create'>Add a Job</Link>
            <Link to='/'>View all jobs</Link>
        </nav>
    )
}

export default Navbar
