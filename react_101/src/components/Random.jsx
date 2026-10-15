import React, { useState } from 'react'

function Random() {

    const [counter,setCounter] = useState(0);
    const [name, setName] = useState("Labib");

    function addValue(){
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setName("anonymous");
    }




  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={addValue}>Add Value</button>

        <h1 className="bg-amber-950 text-green-800 p-4 rounded-r-xl inline-block bg-center">{name}</h1>
        <button  onClick={addValue} className="bg-green-500 p-4 rounded-lg m-2">Change Name</button>
    </div>
  )
}

export default Random