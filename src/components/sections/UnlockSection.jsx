import React from "react";
import { Button } from "../ui/button";
import UnlockCard from "../common/UnlockCard";

const UnlockSection = () => {

    const info = {
        imgSrc:"/images/unlock-img.svg",
        title:"The unseen of spending three years at Pixelgrade",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
    }
    return (
        <section className="pt-[40px] md:px-[9rem] px-[3rem]">
            <UnlockCard {...info} />
        </section>
    );
};

export default UnlockSection;
