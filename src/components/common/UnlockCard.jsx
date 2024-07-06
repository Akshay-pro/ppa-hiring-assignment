import React from "react";
import { Button } from "../ui/button";

const UnlockCard = ({imgSrc, title, para}) => {

    return (
        <div className="flex items-center flex-col md:flex-row gap-4">
            <div className="max-w-[442px] max-h-[433px]">
                <img
                    src={imgSrc}
                    className="w-full h-full"
                />
            </div>
            <div className="u-right flex flex-col gap-6 max-w-[600px]">
                <h1 className="font-[600] text-4xl text-[#4D4D4D]">
                   {title}
                </h1>
                <p className="font-[400] text-sm text-[#717171]">
                    {para}
                </p>
                <Button className="w-36 bg-[#4CAF4F]">Learn More</Button>
            </div>
        </div>
    );
};

export default UnlockCard;
