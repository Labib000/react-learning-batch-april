import { useState } from "react";


function App() {
  
  const [bgColor, setBgColor] = useState('olive')

  return (
    <div className="w-full  h-screen duration-200" style={{ backgroundColor: bgColor }}>
       <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg p-4 bg-white rounded-3xl">

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: 'red' }} onClick={() => setBgColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: 'green' }} onClick={() => setBgColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: 'blue' }} onClick={() => setBgColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: 'black' }} onClick={() => setBgColor("black")}>Black</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: 'purple' }} onClick={() => setBgColor("purple")}>Purple</button>
           
          </div>




       </div>
    </div>
  )
}

export default App
