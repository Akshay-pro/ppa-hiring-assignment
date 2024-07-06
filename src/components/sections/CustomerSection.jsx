import React from "react";
import { ArrowRight } from 'lucide-react';

const CustomerSection = () => {
    const clientItem = [
        { imgSrc:"/images/client/c1.svg" },
        { imgSrc:"/images/client/c2.svg" },
        { imgSrc:"/images/client/c3.svg" },
        { imgSrc:"/images/client/c4.svg" },
        { imgSrc:"/images/client/c5.svg" },
        { imgSrc:"/images/client/c6.svg" },
    ]
    return (
        <section className="bg-[#F5F7FA] py-[64px] md:px-[9rem] px-[4rem] mt-10">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="min-w-[326px] min-h-[326px]">
                    <img
                        src="/images/customer-img.svg"
                        className="w-full h-full object-cover rounded-sm"
                        alt="customer image"
                    />
                </div>
                <div>
                    <p className="text-base text-[#717171] font-[500] text-justify">
                        Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt
                        ullamcorper. Proin eu enim metus. Vivamus sed libero
                        ornare, tristique quam in, gravida enim. Nullam ut
                        molestie arcu, at hendrerit elit. Morbi laoreet elit at
                        ligula molestie, nec molestie mi blandit. Suspendisse
                        cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum
                        pretium. Suspendisse potenti. Quisque malesuada enim
                        sapien, vitae placerat ante feugiat eget. Quisque
                        vulputate odio neque, eget efficitur libero condimentum
                        id. Curabitur id nibh id sem dignissim finibus ac sit
                        amet magna.
                    </p>

                    <div className="my-6">
                        <h4 className="text-xl text-[#4CAF4F] font-[600]">
                            Tim Smith
                        </h4>
                        <p className="text-base text-[#89939E] font-[400] my-2">
                            British Dragon Boat Racing Association
                        </p>
                    </div>

                    <div className="grid md:grid-cols-10 grid-cols-4 gap-5">
                        {clientItem.map((item, id) => (
                            <img
                                className="block w-[48px] h-[48px]"
                                key={id}
                                src={item.imgSrc}
                                alt="client logo"
                            />
                        ))}

                        <p className="text-xl text-[#4CAF4F] font-[600] col-span-4 flex items-center">Meet all customers <ArrowRight className="ml-3" /></p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CustomerSection;
