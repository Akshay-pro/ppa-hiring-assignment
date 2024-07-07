"use client";
import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AchievementSection = () => {
    const [counterOn, setCounterOn] = useState(false);

    const achievementItems = [
        {
            imgSrc: "/images/achievement/member.svg",
            total: "2245341",
            title: "Members",
        },
        {
            imgSrc: "/images/achievement/event.svg",
            total: "46328",
            title: "Clubs",
        },
        {
            imgSrc: "/images/achievement/event.svg",
            total: "828867",
            title: "Event Bookings",
        },
        {
            imgSrc: "/images/achievement/payment.svg",
            total: "1926436",
            title: "Payment",
        },
    ];
    return (
        <ScrollTrigger
            onEnter={() => {
                setCounterOn(true);
            }}
            onExit={() => {
                setCounterOn(false);
            }}
        >
            <section className="bg-[#F5F7FA] dark:bg-[#222222] md:py-[64px] py-[40px] md:px-[9rem] px-[3rem] mt-10">
                <div className="flex flex-col gap-6 lg:flex-row items-center">
                    <div className="text-center sm:text-left">
                        <h1 className="md:text-4xl text-3xl font-[600] text-[#4D4D4D] dark:text-white">
                            Helping a local
                            <span className="block text-[#4CAF4F]">
                                business reinvent itself
                            </span>
                        </h1>
                        <p className="text-base text-[#18191F] dark:text-[#dbdbdb] font-[400] py-2">
                            We reached here with our hard work and dedication
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-auto ">
                        {achievementItems.map((item, id) => (
                            <div key={id} className="w-[255px] flex gap-4 items-center">
                                <div className="sm:w-12 sm:h-12 w-8 h-8">
                                    <Image
                                        width={12}
                                        height={12}
                                        src={item.imgSrc}
                                        alt="achievement logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="">
                                    <h1 className="font-[700] sm:text-[28px] text-xl leading-[36px] text-[#4D4D4D] dark:text-white">
                                        {counterOn && (
                                            <CountUp
                                                start={0}
                                                end={item.total}
                                                duration={3}
                                                delay={0}
                                            />
                                        )}
                                    </h1>
                                    <p className="sm:text-base text-sm font-[400] text-[#717171] dark:text-[#dbdbdb]">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default AchievementSection;
