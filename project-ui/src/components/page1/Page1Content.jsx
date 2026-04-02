import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
      <div className='flex h-[90vh] px-4 pb-20 pt-6  items-center gap-10'>
          <LeftContent />
          <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content