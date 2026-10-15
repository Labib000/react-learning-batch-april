import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCalling() {


  const [data, setData] = React.useState([])
 
    useEffect(() => {

         const API = "https://jsonplaceholder.typicode.com/posts";
         axios.get(API)
            .then(response => setData(response.data))
            .catch(error => console.log(error))



    }, [])





  return (
    <div>
       {data.map((item) => (
         <div key={item.id}>
           <h2>{item.title}</h2>
           <p>{JSON.stringify(item.body)}</p> 
         </div>
       ))}


    </div>
  )
}

export default ApiCalling