import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = () => {
  return (
    <div className="w-80 h-full rounded-4xl overflow-hidden relative  shrink-0">
      <img
        className="object-cover h-full w-full  "
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D "
        alt=""
      />
      <RightCardContent/>
    </div>
  );
}

export default RightCard