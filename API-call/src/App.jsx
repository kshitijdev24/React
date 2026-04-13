import React from 'react'
import axios from 'axios';
import {useState} from 'react'

const App = () => {

  const [user, setUser] = useState([]);
  async function fetchData() {
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/todos/",
    // );

    // console.log(response);
    // const data = await response.json();
    // console.log(data);

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/",
    );
    console.log(response);
    setUser(response.data);


  }
  
  

  return (
    
    <div>
      <button onClick={fetchData}>Get Data</button>
      {user.map(function(employee,idx){
        return <p>{employee.title},{ idx+1}</p>
      })}
    </div>
  )
}

export default App