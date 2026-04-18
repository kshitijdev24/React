import React from "react";

const Navbar2 = (props) => {
  const toggleTheme = () => {
    props.theme=='light'? props.setTheme('dark'):props.setTheme('light')
    
  }
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Services</h4>
      <h4>Contact</h4>
      <button onClick={toggleTheme}>toggle theme</button>
      <h3>{props.theme}</h3>
    </div>
  );
};

export default Navbar2;
