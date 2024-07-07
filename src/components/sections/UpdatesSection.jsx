import React from "react";
import Header from "../common/Header";
import UpdateCard from "../common/UpdateCard";

export const UpdatesSection = () => {
    const updateItems = [
        {
            imgSrc: "/images/update/img1.svg",
            title: "Creating Streamlined Safeguarding Processes with OneRen",
        },
        {
            imgSrc: "/images/update/img2.svg",
            title: "What are your safeguarding responsibilities and how can you manage them?",
        },
        {
            imgSrc: "/images/update/img3.svg",
            title: "Revamping the Membership Model with Triathlon Australia",
        },
    ];
    return (
        <section className="md:py-[64px] py-[40px] md:px-[9rem] px-[3rem]">
            <Header
                title="Caring is the new marketing"
                para="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
            />

            <div className="flex flex-wrap gap-4 mt-4">
                {updateItems.map((item, id) => (
                    <UpdateCard key={id} {...item} />
                ))}
            </div>
        </section>
    );
};
