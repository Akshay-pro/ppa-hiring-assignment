import React from "react";
import { Button } from "../ui/button";

const UnlockSection = () => {
    return (
        <section className="pt-[40px] md:px-[9rem] px-[4rem]">
            <div className="flex items-center flex-col md:flex-row gap-4">
                <div className="min-w-[442px] h-[433px]">
                    <img
                        src="/images/unlock-img.svg"
                        alt="unlock image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="u-right flex flex-col gap-6 max-w-[600px]">
                    <h1 className="font-[600] text-4xl text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h1>
                    <p className="font-[400] text-sm text-[#717171]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <Button className="w-36 bg-[#4CAF4F]">Learn More</Button>
                </div>
            </div>
        </section>
    );
};

export default UnlockSection;
