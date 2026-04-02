import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div id='right' className="w-2/3 h-full gap-5 flex p-6 overflow-x-auto  rounded-4xl">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} S_no={elem.S_no} />
      })}
    </div>
  );
}

export default RightContent
