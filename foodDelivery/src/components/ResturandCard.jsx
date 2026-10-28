import React from 'react'

function ResturandCard(props) {


  console.log("props", props)
  return (
    <div className="m-8 ">
    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1154cffac2453eb0bf7fdda7e5ea1659'
      className="w-70 h-48 rounded-2xl"
    />
    <h1 className="font-bold">Chinese Wok</h1>
    <span className="font-bold">4.2</span>
    <span> 25-30 mins</span>
    <p>Chinese, Tibbetan, Desserts</p>
    <p>VVIP style Mall</p>
    
    
    </div>
  )
}

export default ResturandCard