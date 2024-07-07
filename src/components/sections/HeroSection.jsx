    import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

function HeroSection() {
    const carouselItem = [
        {
            mainHead: "Lessons and insights",
            secondHead: "from 8 years",
            para: "Where to grow your business as a photographer: site or social media?",
            btnText: "Register",
            imgSrc:"/images/heroImage.svg"
        },
        {
            mainHead: "Pass and insights",
            secondHead: "from 8 years",
            para: "Where to grow your business as a photographer: site or social media?",
            btnText: "Register",
            imgSrc:"/images/heroImage.svg"
        },
        {
            mainHead: "Lessons and insights",
            secondHead: "from 8 years",
            para: "Where to grow your business as a photographer: site or social media?",
            btnText: "Register",
            imgSrc:"/images/heroImage.svg"
        },
    ];

    return (
        <section className=" bg-[#F5F7FA] dark:bg-[#222222] py-[96px] md:px-[9rem] px-[4rem]">
            <Carousel>
                <CarouselContent>
                    {carouselItem.map((item, id) => (
                        <CarouselItem  key={id} className="flex justify-between flex-col-reverse gap-6 md:flex-row items-center">
                            <div>
                                <h2 className="font-[600] lg:leading-[76px] text-3xl md:text-5xl lg:text-[64px] text-[#000000] dark:text-white">
                                    {item.mainHead}
                                    <span className="block text-[#4CAF4F]">
                                        {item.secondHead}
                                    </span>
                                </h2>
                                <p className="text-[#717171] dark:text-white text-md py-4">{item.para}</p>
                                <div className="flex gap-[1.75rem] items-center mt-[3rem]">
                                <Button className="w-[128px] h-[52px] text-base font-[500] bg-[#4CAF4F] text-white">Register</Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={item.imgSrc}
                                    alt="guy with phone surrounded by action icons"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}

export default HeroSection;
