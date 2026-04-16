import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    let navigate =useNavigate()
  return (
    <div className="flex justify-center items-center bg-cyan-700">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Go To Home
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Go To Next
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Go To Previous
      </button>
    </div>
  );
}

export default Navbar2