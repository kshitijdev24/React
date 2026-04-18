import React from 'react'
import {useContext} from 'react'
import {ThemeDataContext} from '../context/ThemeContext'


const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
    const toggleTheme=()=>{
        theme ==='light'? setTheme('dark'):setTheme('light')
    }
  return (
    <div>
     <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

export default Button