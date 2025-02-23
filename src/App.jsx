import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Slide from './components/Slide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar />
      <Banner />
      <Slide />
    </>
  )
}

export default App
