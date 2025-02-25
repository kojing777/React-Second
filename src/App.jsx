import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner'
import Slide from './components/Slide'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const currenttheme = localStorage.getItem('current_theme');
 const [theme, setTheme] = useState('current_theme' ? currenttheme : 'light');

  return (
    <div className={` ${theme}`}>
     
      <Navbar theme={theme} setTheme={setTheme}/>
      <Banner />
      <Slide />
    </div>
  )
}

export default App
