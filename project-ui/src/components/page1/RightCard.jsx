import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className="w-80 h-full rounded-4xl overflow-hidden relative  shrink-0">
      <img
        className="object-cover h-full w-full  "
        src={props.img}
        alt=""
      />
      <RightCardContent tag={props.tag} idx={props.id} />
    </div>
  );
}

export default RightCard