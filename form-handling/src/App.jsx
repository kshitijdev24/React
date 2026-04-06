import React from 'react'

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log('Form submitted')
}
const App = () => {
  return (
    <div>
      <h1>Form Handling in React</h1>
      <p>This is a simple example of form handling in React.</p>
      <form action="" onSubmit={(e) => {
        handleSubmit(e)
      }}>
        <input type="text" placeholder="Enter your name" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App