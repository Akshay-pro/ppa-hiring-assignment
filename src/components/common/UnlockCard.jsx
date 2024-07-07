import React from "react";
import { Button } from "../ui/button";
import Image from 'next/image'

const UnlockCard = ({imgSrc, title, para}) => {

    return (
        <div className="flex items-center flex-col md:flex-row gap-4">
            
                <Image
                    width={442}
                    height={433}
                    src={imgSrc}
                    className="lg:w-[442px] lg:h-[433px] w-[300px] h-[300px]"
                />
     
            <div className="flex flex-col gap-6 max-w-[600px]">
                <h1 className="font-[600] md:text-4xl text-3xl text-[#4D4D4D] dark:text-white">
                   {title}
                </h1>
                <p className="font-[400] text-sm text-[#717171] dark:text-[#dbdbdb]">
                    {para}
                </p>
                <Button className="md:w-[151px] sm:h-[52px] w-[132px] h-[40px] text-base font-[500] bg-[#4CAF4F] text-white">Learn More</Button>
            </div>
        </div>
    );
};

export default UnlockCard;
