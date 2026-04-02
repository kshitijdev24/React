import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className=" absolute top-0 left-0 h-full w-full p-8">
      <h2 className="h-12 w-12 rounded-full text-2xl font-medium bg-white text-black flex justify-center items-center mb-50 ">
        {props.idx+1}
      </h2>
      <p className="text-xl font-medium text-white mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        eveniet fuga porro consequatur quasi sed.
      </p>

      <div className="justify-between flex">
        <button className="bg-blue-600 rounded-4xl text-xl p-2 font-bold text-white">
          {props.tag}
        </button>
        <button className="bg-blue-600 rounded-full h-10 w-10 text-3xl flex justify-center items-center p-3 text-white">
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
}

export default RightCardContent