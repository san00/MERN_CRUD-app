import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayJob from './DisplayJob'

function Data() {
    const [vacancy, setVacancy] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            axios.get('/api/items')
                .then(res => {
                    setVacancy(res.data)
                }).catch((error) => {
                    console.error(error);
                })
        }
        fetchItems()

    }, [])


    const removeItem = (id) => {
        axios.delete(`/api/items/${id}`)
            .then(res => console.log(res.data)
            )
            .catch((error) => {
                console.error(error);
            })
        window.location = '/'
    }

    const jobInfo = vacancy.length === 0 ? (<h2 className='displayJob displayJob__message'> There are currently no jobs listed</h2>) : vacancy.map((jobPost, id, index) => {
        return (
            <DisplayJob key={id}
                jobPost={jobPost}
                index={index}
                removeItem={removeItem} />
        )
    })

    return (
        <section className='content__container displayJob__container'>
            <p className='displayJob__header'>Vacancies</p>
            {jobInfo}
        </section>
    )
}

export default Data
