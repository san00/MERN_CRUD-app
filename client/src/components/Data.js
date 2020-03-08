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

    const jobInfo = vacancy.length === 0 ? (<h3> There are currently no jobs listed</h3>) : vacancy.map((jobPost, id, index) => {
        return (
            <DisplayJob key={id}
                jobPost={jobPost}
                index={index}
                removeItem={removeItem} />
        )
    })

    return (
        <section>
            {jobInfo}
        </section>
    )
}

export default Data
