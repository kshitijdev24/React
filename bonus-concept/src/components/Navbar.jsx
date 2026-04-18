import React from 'react'

const Navbar = (props) => {
    function toggleTheme() {
        props.setTheme(props.theme==='light'?'dark':'light')
     }
  return (
      <div>
          
          <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Navbar