import React from 'react'
import Header from '../common/Header'
import CommunityCard from '../common/CommunityCard'

const CommunitySection = () => {
    const communityItems = [
        {
            imgSrc:"/images/community/mo.svg",
            title:"Membership Organisations",
            para:"Our membership management software provides full automation of membership renewals and payments"
        },
        {
            imgSrc:"/images/community/na.svg",
            title:"National Associations",
            para:"Our membership management software provides full automation of membership renewals and payments"
        },
        {
            imgSrc:"/images/community/cng.svg",
            title:"Clubs And Groups",
            para:"Our membership management software provides full automation of membership renewals and payments"
        }
    ]
  return (
    <section className="pt-[40px] md:px-[9rem] px-[3rem]">
        <Header title="Manage your entire community in a single system" para="Who is Nextcent suitable for?" />

        <div className="flex flex-wrap gap-6 lg:justify-evenly md:py-4">
            {
                communityItems.map((item, id) => (
                    <CommunityCard key={id} {...item}  />
                ))
            }
            
        </div>
    </section>
  )
}

export default CommunitySection