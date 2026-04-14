import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [userData, setUserData] = useState([])
  const [page,setPage]=useState(1)
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );
    console.log(response)
    setUserData(response.data);
  }

  useEffect(() => {
    getData()
    
  },[page])
  
  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1'>Loading.....</h3>
  if(userData.length>0){  
    printUserData=userData.map(function (ele,idx) {
      return (
        <div key={idx}>
          <a href={ele.url} target="_blank" rel="noreferrer">
            <div className='h-40 w-44 rounded-xl overflow-hidden'>
              <img className='h-full w-full object-cover' src={ele.download_url} />
            </div>
            <h2 className='font-bold text-lg'>{ele.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black  h-screen  overflow-auto text-white">
      <h1>{page}</h1>
      
      <div className='flex flex-wrap gap-3 h-[82%] p-2 mb-3'>{printUserData}</div>
      
      <div className='flex justify-center gap-6 items-center p-4'>
        <button className='bg-amber-300 p-3 font-bold text-2xl rounded ' onClick={() => {
          if (page > 1) {
            setPage(page - 1)
            setUserData([])
          }
        }} >Prev</button>
        <button className='bg-amber-300 p-3 font-bold text-2xl rounded ' onClick={() => {
          setPage(page + 1)
          setUserData([])
        }} >Next</button>
      </div>
    </div>


  )
}

export default App