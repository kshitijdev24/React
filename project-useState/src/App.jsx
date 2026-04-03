import React from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);

  const [name, setname] = useState("Anshu");

  const [counter, setCounter] = useState(0);

  function changeStates() {
    setA(a + 1);
    setname("Kshitij");
  }

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  const [user, setUser] = useState({ name: "Anshu", age: 21, city: "Delhi" });

  const changeUser = () => {
    const newUse = { ...user };// spread operator is used to create a new object with the same properties as the original user object. This is important because we want to avoid mutating the original user object directly, which can lead to unexpected behavior in React. By creating a new object, we ensure that we are following React's principle of immutability, allowing React to properly detect changes and update the UI accordingly.
    newUse.name = "Kshitij";
    newUse.age = 22;
    newUse.city = "Mumbai";
    setUser(newUse);
  };

  return (
    <div>
      Value of num is {a}
      <br />
      Name is {name}
      <br />
      <button onClick={changeStates}>Change States</button>
      <hr />
      <h1>Counter App</h1>
      <h1>counter:{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <h1>User Info</h1>
      <h3>user name:{ user.name}</h3>
      <h3>user age:{ user.age}</h3>
      <h3>user city:{user.city}</h3>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
};

export default App;
