import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const DemoSection = () => {
    return (
        <section className="bg-[#F5F7FA] py-[64px] md:px-[9rem] px-[4rem] mt-10">
            <div className="text-center max-w-[800px] m-auto">
                <h1 className="lg:text-[64px] lg:leading-[76px] md:text-4xl text-3xl font-[600] text-[#263238] mb-10">Pellentesque suscipit fringilla libero eu.</h1>
                <Button className="bg-[#4CAF4F]">Get a Demo <ArrowRight /></Button>
            </div>
        </section>
    );
};

export default DemoSection;
