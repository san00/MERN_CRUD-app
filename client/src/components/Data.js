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

    const itemsInList = listItems ? (listItems.map((jobPost, id, index) => {
        return (
            <List key={id} jobPost={jobPost} index={index} removeItem={removeItem} />
        )
    })) : 'Error, unable to connect'
   
    return (
        <section>
            {itemsInList}
        </section>
    )
}

export default Data
