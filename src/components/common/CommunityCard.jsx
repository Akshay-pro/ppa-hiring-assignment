import React from 'react'

const CommunityCard = ({imgSrc, title, para}) => {
  return (
    <div className="w-[280px] h-[260px] flex flex-col justify-between p-4 gap-4 text-center">
        <img src={imgSrc} className="w-14 h-14 m-auto" alt="member organization" />
        <h1 className="text-[#4D4D4D] font-[700] text-[28px] leading-[36px]">{title}</h1>
        <p className="text-[#717171] font-[400] text-sm">{para}</p>
    </div>
  )
}

export default CommunityCard