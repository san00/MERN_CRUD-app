import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './List'

function Data() {
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            axios.get('/api/items')
                .then(res => {
                    setListItems(res.data)
                }).catch((error) => {
                    console.log(error);
                })
        }
        fetchItems()
    }, [])

    const itemsInList = listItems ? (listItems.map((jobPost, index) => {
        return (
            <List key={index} jobPost={jobPost} index={index} />
        )
    })) : 'Error, unable to connect'

    return (
        <section>
            {itemsInList}
        </section>
    )
}

export default Data
