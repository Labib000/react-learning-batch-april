import React from 'react'
import ResturandCard from './ResturandCard'

function Body() {
  return (

    <>
     <h1 className="font-bold text-2xl m-8">Resturant with Online Food Delivery</h1>
     <button className='border rounder w-1/12 ml-20'>Rating +</button>

     <div className='flex flex-wrap justify-center gap-4'>
        <ResturandCard name="Pizza"/>
        <ResturandCard name="gramin kulfi"/>
        <ResturandCard name="burger"/>
        <ResturandCard name="Moglai"/>
        <ResturandCard/>
        <ResturandCard/>
        <ResturandCard/>
        <ResturandCard/>
        <ResturandCard/>
        <ResturandCard/>
        <ResturandCard/>
     </div>
     
    </>
    
  )
}

export default Body