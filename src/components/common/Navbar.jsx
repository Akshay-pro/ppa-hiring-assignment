"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./DarkModeToggle";
import { Button } from "../ui/button";
import Image from "next/image";

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
            <div className="hidden lg:block animate-in fade-in zoom-in bg-[#F5F7FA] dark:bg-[#222222] py-4">
                <div className="flex justify-between lg:mx-[9rem] items-center gap-4">
                    <div>
                        <Image width={154} height={24} src="/images/header-logo.svg" alt="logo" className="dark:bg-white p-2 rounded-sm" />
                    </div>
                    
                    <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">

                        {
                            menuItem.map((item, id) => (
                                <Link key={id} href={item.link} className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray`}>{item.name}</Link>
                            ))
                        }
                        
                    </div>
                    <div className="flex items-center gap-[40px] select-none">
                        <Link href="/"
                            className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-[#4CAF4F]`}
                        >
                            Login
                        </Link>
                        <Button className="w-[90px] h-[40px] text-sm font-[500] bg-[#4CAF4F] text-white">Sign Up</Button>
                        <ModeToggle />
                    </div>
                </div>
            </div>
            {/* MOBILE */}
            <div
                className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[40] !bg-[#F5F7FA] dark:!bg-[#222222] py-4 animate-in fade-in zoom-in  ${
                    menu ? " bg-primary py-2" : ""
                } `}
            >
                <div className="flex justify-between px-4 ">
                    <div className="flex gap-[50px] text-[16px] items-center select-none">
                        <Image
                            width={112}
                            height={30}
                            src="/images/header-logo.svg"
                            alt="logo"
                            className="w-[7rem] dark:bg-white p-2 rounded-sm"
                        />
                    </div>
                    <div className="flex items-center gap-[40px] ">
                        <ModeToggle />
                        {menu ? (
                            <X
                                className="cursor-pointer animate-in fade-in zoom-in text-black dark:text-white"
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
                                    <Link  key={id} href={item.link} className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>{item.name}</Link>
                                ))
                            }
                            
                            <div className="flex flex-col gap-[40px] select-none">
                                <Link href="/" className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray dark:text-white`}>
                                    Login
                                </Link>
                                <Button className="w-[90px] h-[40px] text-sm font-[500] bg-[#4CAF4F] text-white">Sign Up</Button>
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
