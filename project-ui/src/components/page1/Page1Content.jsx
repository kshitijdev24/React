import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
      <div className='flex h-[90vh] py-10 px-18 items-center gap-10'>
          <LeftContent />
          <RightContent/>
    </div>
  )
}

export default Page1Content