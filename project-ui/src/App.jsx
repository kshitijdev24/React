import React from "react";
import Page1 from "./components/page1/Page1";
import Page2 from "./components/page2/Page2";

const users = [
  {
    S_no: 1,// optional field to maintain the serial number of the card
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D ",
    intro: "",
    tag: "Satisfied",
  },
  {
    S_no: 2,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: "",
    tag: "UnderServed",
  },
  {
    S_no: 3,
    img: "https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: "",
    tag: "Underbanked",
  },
];
const App = () => {
  return (
    <div>
      <Page1 users={users} />
      <Page2 users={users} />
    </div>
  );
};

export default App;
