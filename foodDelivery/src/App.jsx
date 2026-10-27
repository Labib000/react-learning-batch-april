import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
    <Header/>
    <Body/>
    </React.Fragment>
  )
}

export default App

//jsx needes a parent element and that parent element should not add a extra node or element in the dom that is when we use React.Fragment
