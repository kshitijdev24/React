import React from 'react'
import { useState } from 'react';


const App = () => {
  const [title, setTitle] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", title);
    setTitle("");
  };
  return (
    <div>
      <h1>Form Handling in React</h1>
      <p>This is a simple example of form handling in React.</p>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder="type your name" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App