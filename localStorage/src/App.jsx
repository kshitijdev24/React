import React from 'react'

const App = () => {
  localStorage.setItem('name', "kshitij jaiswal");
  localStorage.setItem('age', 23);
  const user = { id: 1, username: 'kshitij', email: 'kshitij@example.com' }; 
  localStorage.setItem('user', JSON.stringify(user))
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('age'));
  console.log(JSON.parse(localStorage.getItem('user')));
  return (
  
    <div>App</div>
  )
}

export default App