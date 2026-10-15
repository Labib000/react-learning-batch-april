import React from 'react'
import { useEffect, useState } from 'react'

function ApiCalling() {


  const [data, setData] = React.useState([])
 
    useEffect(() => {

         const API = "https://jsonplaceholder.typicode.com/posts";
         fetch(API)
            .then(data => data.json())
            .then(response => setData(response))
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