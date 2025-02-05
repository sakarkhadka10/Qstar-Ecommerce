import React from "react";
import { Carousel } from "flowbite-react";

const DesktopHero = () => {
  return (
    <div className="h-[30rem] mt-0 rounded-sm w-full">
      <Carousel slideInterval={5000}>
        <img
          src="https://drive.brodox.com/uploads/465/24/07/1721153727.png"
          alt="..."
        />
        <img
          src="https://drive.brodox.com/uploads/465/24/06/1719740338.png"
          alt="..."
        />
        <img
          src="https://drive.brodox.com/uploads/465/24/07/1721153727.png"
          alt="..."
        />
        <img
          src="https://drive.brodox.com/uploads/465/24/06/1719740338.png"
          alt="..."
        />
        <img
          src="https://drive.brodox.com/uploads/465/24/07/1721153727.png"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default DesktopHero;
