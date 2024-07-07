import React from 'react'
import Image from 'next/image'

const CommunityCard = ({imgSrc, title, para}) => {
  return (
    <div className="w-[300px] md:p-4 p-2 text-center">
        <Image src={imgSrc} width={65} height={56} className="m-auto  dark:bg-white rounded-lg" alt="member organization" />
        <h1 className="text-[#4D4D4D] dark:text-white py-3 font-[700] md:text-[28px] text-2xl md:leading-[36px]">{title}</h1>
        <p className="text-[#717171] dark:text-[#dbdbdb] font-[400] text-sm">{para}</p>
    </div>
  )
}

export default CommunityCard