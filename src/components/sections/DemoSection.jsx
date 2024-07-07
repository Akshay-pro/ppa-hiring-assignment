import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const DemoSection = () => {
    return (
        <section className="bg-[#F5F7FA] dark:bg-[#222222] py-[64px] md:px-[9rem] px-[3rem]">
            <div className="text-center max-w-[800px] m-auto">
                <h1 className="lg:text-[64px] lg:leading-[76px] md:text-4xl text-3xl font-[600] text-[#263238] dark:text-white mb-10">Pellentesque suscipit fringilla libero eu.</h1>
                <Button className="md:w-[178px] md:h-[52px] w-[148px] h-[40px] text-base font-[500] bg-[#4CAF4F] dark:text-white">Get a Demo <ArrowRight className="ml-2" /></Button>
            </div>
        </section>
    );
};

export default DemoSection;
