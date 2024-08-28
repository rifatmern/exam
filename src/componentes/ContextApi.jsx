import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


let apiData = createContext()

const ContextApi = ({ children }) => {

    let [user, setUser] = useState([])

    let getData = () => axios.get('https://dummyjson.com/products').then((response) => {
        setUser(response.data.products);

    })
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <apiData.Provider value={user}>
                {children}
            </apiData.Provider>
        </>
    )
}

export { ContextApi, apiData }
