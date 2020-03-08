import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='nav'>
            <div className='content__container'>
                <div className='nav__container'>
                    <h1 className='nav__header'>Jobs board</h1>
                    <Link to='/' className="nav__link-home">View all jobs</Link>
                    <Link to='/create' className="nav__link-create">Add a Job</Link>                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
