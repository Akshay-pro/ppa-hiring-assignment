import React from "react";
import { Button } from "../ui/button";

const UnlockCard = ({imgSrc, title, para}) => {

    return (
        <div className="flex items-center flex-col md:flex-row gap-4">
            <div className="max-w-[442px] m-auto">
                <img
                    src={imgSrc}
                    className="w-full h-full"
                />
            </div>
            <div className="flex flex-col gap-6 w-fit">
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
