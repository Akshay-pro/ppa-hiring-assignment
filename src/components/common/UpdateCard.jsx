import { ArrowRight } from "lucide-react";
import React from "react";

const UpdateCard = ({ title, imgSrc }) => {
    return (
        <div className="max-w-[368px] h-[286px] relative m-auto mb-20">
            <img
                src={imgSrc}
                alt="update image"
                className="w-full h-full object-cover rounded-md"
            />

            <div className="md:w-[317px] w-[240px] mt-[-20px] absolute top-3/4 left-1/2 transform -translate-x-1/2 text-center py-6 px-4 bg-[#F5F7FA] shadow-lg rounded-sm z-10">
                <h4 className="text-xl font-[600] text-[#717171] mb-4">
                    {title}
                </h4>
                <p className="text-xl text-[#4CAF4F] font-[600] col-span-4 flex items-center justify-center">
                    Read More <ArrowRight className="ml-3" />
                </p>
            </div>
        </div>
    );
};

export default UpdateCard;