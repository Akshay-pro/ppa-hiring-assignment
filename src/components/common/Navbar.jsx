"use client";

import { X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    const menuItem = [
        {
            name:"Home",
            link: "/"
        },
        {
            name:"Service",
            link: "/"
        },
        {
            name:"Feature",
            link: "/"
        },
        {
            name:"Product",
            link: "/"
        },
        {
            name:"Testimonial",
            link: "/"
        },
        {
            name:"Faq",
            link: "/"
        },
    ]
    return (
        <div className="md:sticky md:top-0 md:shadow-none z-20 ">
            {/* DESKTOP */}
            <div className="hidden lg:block animate-in fade-in zoom-in bg-[#F5F7FA] py-4">
                <div className="flex justify-between md:mx-[9rem] items-center">
                    <div>
                        <img src="/images/logo.svg" alt="logo" />
                    </div>
                    
                    <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">

                        {
                            menuItem.map((item, id) => (
                                <>
                                    <Link href={item.link} key={id} className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>{item.name}</Link>
                                </>
                            ))
                        }
                        
                    </div>
                    <div className="flex items-center gap-[40px] select-none">
                        <Link href="/"
                            className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                        >
                            Login
                        </Link>
                        <MainButton text="Sign up" classes="shadow-none" />
                    </div>
                </div>
            </div>
            {/* MOBILE */}
            <div
                className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] !bg-[#F5F7FA] py-4 animate-in fade-in zoom-in  ${
                    menu ? " bg-primary py-2" : ""
                } `}
            >
                <div className="flex justify-between px-4 ">
                    <div className="flex gap-[50px] text-[16px] items-center select-none">
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            className="w-[7rem]"
                        />
                    </div>
                    <div className="flex items-center gap-[40px] ">
                        {menu ? (
                            <X
                                className="cursor-pointer animate-in fade-in zoom-in text-black"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <img
                                src="/images/hamburger.svg"
                                alt="logo"
                                className="cursor-pointer animate-in fade-in zoom-in"
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                </div>
                {menu ? (
                    <div className="my-8 select-none animate-in slide-in-from-right">
                        <div className="flex flex-col gap-8 mt-8 px-4">
                            {
                                menuItem.map((item, id) => (
                                    <>
                                        <Link href={item.link} key={id} className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>{item.name}</Link>
                                    </>
                                ))
                            }
                            <div className="flex flex-col gap-[40px] select-none">
                                <Link href="/" className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>
                                    Login
                                </Link>
                                <MainButton
                                    text="Sign up"
                                    classes="shadow-none"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
