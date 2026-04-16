import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams()
    console.log(params.Id)
    
  return (
      <div>{params.Id} - CourseDetails</div>
  )
}

export default CourseDetails